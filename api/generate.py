"""Vercel Serverless Function — MiMo Page Studio API"""

import os
import json
from http.server import BaseHTTPRequestHandler

# ── Style Presets ──────────────────────────────────────────────────────────

STYLE_PRESETS = {
    "modern-saas": {
        "name": "Modern SaaS",
        "prompt_suffix": "Design a modern SaaS landing page with gradient hero, feature cards, pricing tiers, testimonials, smooth CSS animations, Inter font, fully responsive."
    },
    "creative-portfolio": {
        "name": "Creative Portfolio",
        "prompt_suffix": "Design a creative portfolio landing page with bold dark hero, masonry gallery, asymmetric layout, CSS animations, monospace accent font, dark mode aesthetic."
    },
    "ecommerce": {
        "name": "E-commerce",
        "prompt_suffix": "Design an e-commerce product landing page with hero product showcase, feature highlights, specs table, reviews, add-to-cart CTA, trust badges."
    },
    "agency": {
        "name": "Agency",
        "prompt_suffix": "Design a professional agency landing page with elegant hero, services grid, case studies, team section, stats counters, contact section, navy+gold scheme."
    },
    "app-landing": {
        "name": "App Landing",
        "prompt_suffix": "Design a mobile app landing page with hero mockup, feature walkthrough, screenshot gallery, app store badges, FAQ accordion, gradient background."
    },
    "event": {
        "name": "Event",
        "prompt_suffix": "Design an event landing page with countdown timer, event hero, speaker cards, schedule timeline, ticket tiers, sponsor logos, vibrant colors."
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


def call_mimo_api(prompt):
    """Call MiMo API and return generated content."""
    import urllib.request
    import urllib.error

    api_key = os.environ.get("MIMO_API_KEY", "")
    api_base = os.environ.get("MIMO_API_BASE", "https://api.xiaomimimo.com/v1")
    model = os.environ.get("MIMO_MODEL", "mimo-v2.5-pro")

    if not api_key:
        return None, "MIMO_API_KEY not configured"

    req_data = json.dumps({
        "model": model,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt}
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
    return result["choices"][0]["message"]["content"], None


class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        try:
            data = json.loads(body)
        except Exception:
            self._respond(400, {"error": "Invalid JSON"})
            return

        user_prompt = data.get("prompt", "").strip()
        style = data.get("style", "modern-saas")
        language = data.get("language", "en")

        if not user_prompt:
            self._respond(400, {"error": "Prompt is required"})
            return

        full_prompt = build_prompt(user_prompt, style, language)
        content, error = call_mimo_api(full_prompt)

        if error:
            self._respond(500, {"error": error})
            return

        self._respond(200, {"content": content})

    def _respond(self, status, data):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())
