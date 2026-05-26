"""MiMo Page Studio — AI Landing Page Generator powered by Xiaomi MiMo"""

import os
import json
import asyncio
from pathlib import Path
from typing import Optional

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, StreamingResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

load_dotenv()

app = FastAPI(title="MiMo Page Studio", version="1.0.0")

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

MIMO_API_KEY = os.getenv("MIMO_API_KEY", "")
MIMO_API_BASE = os.getenv("MIMO_API_BASE", "https://api.xiaomimimo.com/v1")
MIMO_MODEL = os.getenv("MIMO_MODEL", "mimo-v2.5-pro")

# ── Style Presets & Prompt Engineering ──────────────────────────────────────

STYLE_PRESETS = {
    "modern-saas": {
        "name": "Modern SaaS",
        "icon": "🚀",
        "description": "Clean, conversion-optimized for software products",
        "prompt_suffix": """
Design a modern SaaS landing page with:
- Hero with gradient background (#667eea → #764ba2 or similar), large headline, subtext, and CTA button
- Feature cards with icons (use emoji or SVG inline)
- Pricing section with 3 tiers
- Social proof / testimonials
- Clean footer
- Smooth scroll animations via CSS
- Inter or system font stack
- Fully responsive (mobile-first)
"""
    },
    "creative-portfolio": {
        "name": "Creative Portfolio",
        "icon": "🎨",
        "description": "Bold, artistic showcase for personal brands",
        "prompt_suffix": """
Design a creative portfolio landing page with:
- Full-screen hero with bold typography and dark background
- Masonry-style project gallery
- About section with asymmetric layout
- Contact form with stylish inputs
- Smooth CSS animations and hover effects
- Monospace accent font mixed with sans-serif
- Dark mode aesthetic (#0a0a0a bg, #ffffff text, accent color)
"""
    },
    "ecommerce": {
        "name": "E-commerce",
        "icon": "🛒",
        "description": "Product-focused with clear purchase flow",
        "prompt_suffix": """
Design an e-commerce product landing page with:
- Hero product showcase with large image area
- Feature highlights with alternating image/text sections
- Product specifications table
- Customer reviews with star ratings
- Add-to-cart CTA with urgency elements
- Trust badges (security, shipping, returns)
- Clean white background with accent color
"""
    },
    "agency": {
        "name": "Agency",
        "icon": "💼",
        "description": "Professional, trust-building for services",
        "prompt_suffix": """
Design a professional agency landing page with:
- Elegant hero with video/image background placeholder
- Services grid with hover effects
- Case studies / portfolio section
- Team section with circular photos
- Stats/numbers section (animated counters via CSS)
- Contact section with map placeholder
- Navy (#1a1a2e) + gold (#e2b04a) color scheme
"""
    },
    "app-landing": {
        "name": "App Landing",
        "icon": "📱",
        "description": "Mobile app showcase with download CTAs",
        "prompt_suffix": """
Design a mobile app landing page with:
- Hero with phone mockup placeholder and download buttons
- Feature walkthrough with numbered steps
- Screenshot gallery (horizontal scroll)
- App store badges (styled as buttons)
- FAQ accordion
- Newsletter signup
- Gradient background (#0f0c29 → #302b63 → #24243e)
"""
    },
    "event": {
        "name": "Event",
        "icon": "🎪",
        "description": "Conference / launch event page",
        "prompt_suffix": """
Design an event landing page with:
- Countdown timer (CSS-only, large digits)
- Event hero with date, location, tagline
- Speaker cards in grid
- Schedule/agenda timeline
- Ticket pricing tiers
- Sponsor logos section
- Bold, vibrant colors (#ff6b6b, #4ecdc4)
"""
    }
}

LANGUAGES = {
    "en": "English",
    "zh": "Chinese (Simplified)",
    "id": "Indonesian"
}

SYSTEM_PROMPT = """You are MiMo Page Studio, an expert frontend developer powered by Xiaomi MiMo's reasoning engine. You generate complete, production-ready landing pages as single self-contained HTML files.

RULES:
1. Output ONLY the HTML file content — no explanations, no markdown fences, no commentary
2. The HTML must be completely self-contained (inline CSS + JS, no external dependencies)
3. Use modern CSS (grid, flexbox, variables, animations)
4. Make it fully responsive (mobile-first)
5. Use semantic HTML5
6. Include smooth scroll and subtle animations
7. Use professional color schemes and typography
8. All content must be in the requested language
9. Make the design visually stunning and conversion-optimized
10. Include appropriate emoji as icon substitutes where needed
11. The page should be AT MINIMUM 6 sections / 400 lines of HTML
12. Add a small "Powered by MiMo" badge in the footer
"""


def build_user_prompt(user_prompt: str, style: str, language: str) -> str:
    preset = STYLE_PRESETS.get(style, STYLE_PRESETS["modern-saas"])
    lang_name = LANGUAGES.get(language, "English")

    return f"""Generate a complete landing page for:

{user_prompt}

STYLE: {preset['name']}
{preset['prompt_suffix']}

LANGUAGE: All text content must be in {lang_name}.

Make it visually stunning, professional, and production-ready. Output only the HTML."""


# ── Routes ─────────────────────────────────────────────────────────────────

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse("index.html", {
        "request": request,
        "presets": STYLE_PRESETS,
        "languages": LANGUAGES,
        "model": MIMO_MODEL
    })


@app.get("/api/presets")
async def get_presets():
    return JSONResponse(STYLE_PRESETS)


@app.post("/api/generate")
async def generate(request: Request):
    body = await request.json()
    user_prompt = body.get("prompt", "")
    style = body.get("style", "modern-saas")
    language = body.get("language", "en")

    if not user_prompt.strip():
        return JSONResponse({"error": "Prompt is required"}, status_code=400)

    if not MIMO_API_KEY:
        return JSONResponse({"error": "MIMO_API_KEY not configured"}, status_code=500)

    full_prompt = build_user_prompt(user_prompt, style, language)

    async def stream():
        async with httpx.AsyncClient(timeout=120.0) as client:
            try:
                async with client.stream(
                    "POST",
                    f"{MIMO_API_BASE}/chat/completions",
                    headers={
                        "Authorization": f"Bearer {MIMO_API_KEY}",
                        "Content-Type": "application/json"
                    },
                    json={
                        "model": MIMO_MODEL,
                        "messages": [
                            {"role": "system", "content": SYSTEM_PROMPT},
                            {"role": "user", "content": full_prompt}
                        ],
                        "stream": True,
                        "temperature": 0.7,
                        "max_tokens": 16000
                    }
                ) as resp:
                    if resp.status_code != 200:
                        error_body = ""
                        async for chunk in resp.aiter_text():
                            error_body += chunk
                        yield f"data: {json.dumps({'error': f'API error {resp.status_code}: {error_body[:200]}'})}\n\n"
                        return

                    async for line in resp.aiter_lines():
                        if not line.startswith("data: "):
                            continue
                        data = line[6:]
                        if data.strip() == "[DONE]":
                            yield "data: [DONE]\n\n"
                            return
                        try:
                            chunk = json.loads(data)
                            delta = chunk.get("choices", [{}])[0].get("delta", {})
                            content = delta.get("content", "")
                            if content:
                                yield f"data: {json.dumps({'content': content})}\n\n"
                        except json.JSONDecodeError:
                            continue

            except httpx.TimeoutException:
                yield f"data: {json.dumps({'error': 'Request timed out. Try a simpler prompt.'})}\n\n"
            except Exception as e:
                yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return StreamingResponse(stream(), media_type="text/event-stream")


@app.post("/api/generate-sync")
async def generate_sync(request: Request):
    """Non-streaming fallback"""
    body = await request.json()
    user_prompt = body.get("prompt", "")
    style = body.get("style", "modern-saas")
    language = body.get("language", "en")

    if not user_prompt.strip():
        return JSONResponse({"error": "Prompt is required"}, status_code=400)

    if not MIMO_API_KEY:
        return JSONResponse({"error": "MIMO_API_KEY not configured"}, status_code=500)

    full_prompt = build_user_prompt(user_prompt, style, language)

    async with httpx.AsyncClient(timeout=120.0) as client:
        try:
            resp = await client.post(
                f"{MIMO_API_BASE}/chat/completions",
                headers={
                    "Authorization": f"Bearer {MIMO_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": MIMO_MODEL,
                    "messages": [
                        {"role": "system", "content": SYSTEM_PROMPT},
                        {"role": "user", "content": full_prompt}
                    ],
                    "temperature": 0.7,
                    "max_tokens": 16000
                }
            )

            if resp.status_code != 200:
                return JSONResponse({"error": f"API error: {resp.text[:200]}"}, status_code=502)

            data = resp.json()
            content = data["choices"][0]["message"]["content"]
            return JSONResponse({"content": content})

        except Exception as e:
            return JSONResponse({"error": str(e)}, status_code=500)


# ── Main ───────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", "7860"))
    uvicorn.run(app, host="0.0.0.0", port=port)
