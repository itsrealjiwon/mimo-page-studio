# 🚀 MiMo Page Studio

**AI-Powered Landing Page Generator — Built with Xiaomi MiMo**

Generate beautiful, production-ready landing pages in seconds using MiMo's advanced reasoning engine. Describe your product, pick a style, and watch the magic happen.

![MiMo Page Studio](https://img.shields.io/badge/Built%20with-MiMo-FF6900?style=for-the-badge&logo=xiaomi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)

## ✨ Features

- **MiMo-Powered Generation** — Leverages Xiaomi MiMo's reasoning engine for intelligent layout, copy, and design decisions
- **Live Preview** — Real-time rendering as MiMo generates your page
- **Code Editor** — Built-in Monaco editor for manual tweaks
- **6 Style Presets** — SaaS, Portfolio, E-commerce, Agency, App, Event
- **Multi-Language** — Generate pages in English, Chinese, or Indonesian
- **One-Click Export** — Download as a single, self-contained HTML file
- **Streaming Output** — Watch your page being built in real-time

## 🏗️ Architecture

```
┌──────────────────────┬──────────────────────────────────┐
│   Controls Panel     │        Live Preview              │
│   ├─ Prompt Input    │        (sandboxed iframe)         │
│   ├─ Style Preset    │                                   │
│   ├─ Language        │                                   │
│   └─ [Generate ✨]   │                                   │
│                      │                                   │
│   Code Editor        │                                   │
│   (Monaco Editor)    │                                   │
└──────────────────────┴──────────────────────────────────┘
```

## 🚀 Quick Start

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Configure API key
cp .env.example .env
# Edit .env with your MiMo API key

# 3. Run
python main.py

# 4. Open http://localhost:7860
```

## ⚙️ Configuration

| Variable | Description | Default |
|---|---|---|
| `MIMO_API_KEY` | Your MiMo API key | Required |
| `MIMO_API_BASE` | MiMo API endpoint | `https://api.xiaomimimo.com/v1` |
| `MIMO_MODEL` | Model to use | `mimo-v2.5-pro` |
| `PORT` | Server port | `7860` |

## 🎨 Style Presets

| Preset | Best For |
|---|---|
| **Modern SaaS** | Software products, tools, platforms |
| **Creative Portfolio** | Personal brands, designers, artists |
| **E-commerce** | Product launches, online stores |
| **Agency** | Professional services, consulting |
| **App Landing** | Mobile & desktop apps |
| **Event** | Conferences, launches, meetups |

## 🤖 Why MiMo?

MiMo's reasoning engine excels at:
- **Structured output** — Generates well-organized, semantic HTML
- **Design reasoning** — Makes intelligent layout and color decisions
- **Copy optimization** — Writes persuasive, conversion-focused text
- **Multi-language fluency** — Native-quality output in 3 languages
- **Context understanding** — Adapts design to your specific product/industry

## 📄 License

MIT

---

*Built for the [Xiaomi MiMo 100T Token Program](https://100T.xiaomimimo.com)*
