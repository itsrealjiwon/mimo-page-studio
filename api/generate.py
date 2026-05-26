"""Vercel Serverless Function — MiMo Page Studio API"""

import os
import json
import urllib.request
import urllib.error

# ── Style Presets ──────────────────────────────────────────────────────────

STYLE_PRESETS = {
    "modern-saas": {
        "name": "Modern SaaS",
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

LANGUAGES = {"en": "English", "zh": "Chinese (Simplified)", "id": "Indonesian"}

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


def build_prompt(user_prompt, style, language):
    preset = STYLE_PRESETS.get(style, STYLE_PRESETS["modern-saas"])
    lang_name = LANGUAGES.get(language, "English")
    return f"""Generate a complete landing page for:

{user_prompt}

STYLE: {preset['name']}
{preset['prompt_suffix']}

LANGUAGE: All text content must be in {lang_name}.

Make it visually stunning, professional, and production-ready. Output only the HTML."""


def handler(request):
    """Vercel Python serverless function handler."""
    # CORS headers
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    # Handle preflight
    if request.method == "OPTIONS":
        return {"statusCode": 204, "headers": headers}

    if request.method != "POST":
        return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}

    try:
        body = json.loads(request.body)
    except Exception:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Invalid JSON"})}

    user_prompt = body.get("prompt", "").strip()
    style = body.get("style", "modern-saas")
    language = body.get("language", "en")

    if not user_prompt:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Prompt is required"})}

    api_key = os.environ.get("MIMO_API_KEY", "")
    api_base = os.environ.get("MIMO_API_BASE", "https://api.xiaomimimo.com/v1")
    model = os.environ.get("MIMO_MODEL", "mimo-v2.5-pro")

    if not api_key:
        return {"statusCode": 500, "headers": headers, "body": json.dumps({"error": "MIMO_API_KEY not configured"})}

    full_prompt = build_prompt(user_prompt, style, language)

    # Call MiMo API (non-streaming for Vercel serverless)
    try:
        req_data = json.dumps({
            "model": model,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": full_prompt}
            ],
            "temperature": 0.7,
            "max_tokens": 16000
        }).encode()

        req = urllib.request.Request(
            f"{api_base}/chat/completions",
            data=req_data,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
                "User-Agent": "mimo-page-studio/1.0"
            },
            method="POST"
        )

        resp = urllib.request.urlopen(req, timeout=90)
        result = json.loads(resp.read())
        content = result["choices"][0]["message"]["content"]

        return {
            "statusCode": 200,
            "headers": {**headers, "Content-Type": "application/json"},
            "body": json.dumps({"content": content})
        }

    except urllib.error.HTTPError as e:
        error_body = e.read().decode()[:200]
        return {
            "statusCode": 502,
            "headers": headers,
            "body": json.dumps({"error": f"MiMo API error: {e.code} {error_body}"})
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)})
        }
