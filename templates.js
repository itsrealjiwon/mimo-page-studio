     1|     1|const TEMPLATES = {
     2|     2|  "modern-saas": function(title,desc){return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title><style>
     3|     3|*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a2e;overflow-x:hidden}
     4|     4|.nav{position:fixed;top:0;width:100%;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);z-index:100;border-bottom:1px solid #eee}
     5|     5|.nav-logo{font-weight:800;font-size:20px;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
     6|     6|.nav-links{display:flex;gap:24px}.nav-links a{color:#555;text-decoration:none;font-size:14px;font-weight:500}.nav-links a:hover{color:#667eea}
     7|     7|.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:120px 20px 80px}
     8|     8|.hero h1{font-size:clamp(2.5rem,6vw,4.5rem);font-weight:800;line-height:1.1;margin-bottom:20px;letter-spacing:-.02em}
     9|     9|.hero p{font-size:clamp(1rem,2vw,1.25rem);opacity:.9;max-width:600px;margin:0 auto 32px;line-height:1.6}
    10|    10|.btn{display:inline-block;padding:14px 36px;background:white;color:#667eea;border-radius:50px;font-weight:700;font-size:16px;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 15px rgba(0,0,0,.15)}
    11|    11|.btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,.2)}
    12|    12|.section{padding:100px 20px;max-width:1100px;margin:0 auto}
    13|    13|.section-title{text-align:center;font-size:clamp(1.8rem,4vw,2.5rem);font-weight:800;margin-bottom:12px;color:#1a1a2e}
    14|    14|.section-sub{text-align:center;color:#666;font-size:18px;margin-bottom:60px;max-width:600px;margin-left:auto;margin-right:auto}
    15|    15|.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px}
    16|    16|.feature-card{background:white;border:1px solid #eee;border-radius:16px;padding:36px;transition:transform .2s,box-shadow .2s}
    17|    17|.feature-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.08)}
    18|    18|.feature-icon{font-size:40px;margin-bottom:16px}
    19|    19|.feature-card h3{font-size:20px;font-weight:700;margin-bottom:8px}
    20|    20|.feature-card p{color:#666;line-height:1.6}
    21|    21|.pricing{background:#f8f9ff}
    22|    22|.pricing .section{padding:100px 20px}
    23|    23|.pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;max-width:1000px;margin:0 auto}
    24|    24|.price-card{background:white;border:1px solid #eee;border-radius:16px;padding:36px;text-align:center;position:relative;transition:transform .2s}
    25|    25|.price-card:hover{transform:translateY(-4px)}
    26|    26|.price-card.popular{border:2px solid #667eea;box-shadow:0 12px 40px rgba(102,126,234,.15)}
    27|    27|.badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:4px 16px;border-radius:20px;font-size:12px;font-weight:700}
    28|    28|.price-amount{font-size:48px;font-weight:800;color:#1a1a2e;margin:16px 0}.price-amount span{font-size:16px;color:#666;font-weight:400}
    29|    29|.price-features{list-style:none;text-align:left;margin:24px 0}.price-features li{padding:8px 0;color:#555;font-size:15px}.price-features li::before{content:"✓ ";color:#667eea;font-weight:700}
    30|    30|.testimonials{background:white}
    31|    31|.test-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}
    32|    32|.test-card{background:#f8f9ff;border-radius:16px;padding:32px}
    33|    33|.test-card p{color:#555;line-height:1.7;font-style:italic;margin-bottom:16px}
    34|    34|.test-author{font-weight:700;font-size:14px}
    35|    35|.test-role{color:#888;font-size:13px}
    36|    36|.cta-section{background:linear-gradient(135deg,#667eea,#764ba2);color:white;text-align:center;padding:100px 20px}
    37|    37|.cta-section h2{font-size:clamp(2rem,4vw,3rem);font-weight:800;margin-bottom:16px}
    38|    38|.cta-section p{opacity:.9;font-size:18px;margin-bottom:32px}
    39|    39|.btn-white{display:inline-block;padding:14px 36px;background:white;color:#667eea;border-radius:50px;font-weight:700;font-size:16px;text-decoration:none;transition:transform .2s}
    40|    40|.btn-white:hover{transform:translateY(-2px)}
    41|    41|footer{text-align:center;padding:40px 20px;color:#888;font-size:13px;border-top:1px solid #eee}
    42|    42|footer .mimo{color:#667eea;font-weight:600}
    43|    43|@media(max-width:768px){.nav-links{display:none}.features,.pricing-grid,.test-grid{grid-template-columns:1fr}}
    44|    44|</style></head><body>
    45|    45|<nav class="nav"><div class="nav-logo">${title}</div><div class="nav-links"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#testimonials">Reviews</a></div></nav>
    46|    46|<section class="hero"><div><h1>${title}</h1><p>${desc}</p><a href="#features" class="btn">Get Started Free →</a></div></section>
    47|    47|<section class="section" id="features"><h2 class="section-title">Powerful Features</h2><p class="section-sub">Everything you need to succeed, built with cutting-edge technology</p>
    48|    48|<div class="features">
    49|    49|<div class="feature-card"><div class="feature-icon">⚡</div><h3>Lightning Fast</h3><p>Optimized performance that loads in milliseconds. Your users will love the speed.</p></div>
    50|    50|<div class="feature-card"><div class="feature-icon">🔒</div><h3>Enterprise Security</h3><p>Bank-grade encryption and security protocols to keep your data safe and compliant.</p></div>
    51|    51|<div class="feature-card"><div class="feature-icon">📊</div><h3>Advanced Analytics</h3><p>Real-time insights and dashboards to track every metric that matters to your business.</p></div>
    52|    52|<div class="feature-card"><div class="feature-icon">🤖</div><h3>AI-Powered</h3><p>Intelligent automation powered by MiMo reasoning engine for smarter workflows.</p></div>
    53|    53|<div class="feature-card"><div class="feature-icon">🔗</div><h3>Easy Integrations</h3><p>Connect with 200+ tools you already use. Setup takes minutes, not days.</p></div>
    54|    54|<div class="feature-card"><div class="feature-icon">💬</div><h3>24/7 Support</h3><p>Our dedicated team is always here to help you succeed, around the clock.</p></div>
    55|    55|</div></section>
    56|    56|<section class="pricing" id="pricing"><div class="section"><h2 class="section-title">Simple Pricing</h2><p class="section-sub">Start free, scale as you grow</p>
    57|    57|<div class="pricing-grid">
    58|    58|<div class="price-card"><h3>Starter</h3><div class="price-amount">$0<span>/mo</span></div><ul class="price-features"><li>Up to 1,000 users</li><li>Basic analytics</li><li>Email support</li><li>5 integrations</li></ul><a href="#" class="btn" style="color:#667eea">Start Free</a></div>
    59|    59|<div class="price-card popular"><span class="badge">Most Popular</span><h3>Pro</h3><div class="price-amount">$29<span>/mo</span></div><ul class="price-features"><li>Unlimited users</li><li>Advanced analytics</li><li>Priority support</li><li>All integrations</li></ul><a href="#" class="btn" style="color:#667eea">Start Trial</a></div>
    60|    60|<div class="price-card"><h3>Enterprise</h3><div class="price-amount">$99<span>/mo</span></div><ul class="price-features"><li>Everything in Pro</li><li>Custom SLA</li><li>Dedicated manager</li><li>SSO & SAML</li></ul><a href="#" class="btn" style="color:#667eea">Contact Sales</a></div>
    61|    61|</div></div></section>
    62|    62|<section class="testimonials"><div class="section"><h2 class="section-title">Loved by Teams</h2><p class="section-sub">See what our customers have to say</p>
    63|    63|<div class="test-grid">
    64|    64|<div class="test-card"><p>"This tool completely transformed our workflow. We saved 40 hours per month on average."</p><div class="test-author">Sarah Chen</div><div class="test-role">CTO at TechFlow</div></div>
    65|    65|<div class="test-card"><p>"The best investment we made this year. ROI was visible within the first week."</p><div class="test-author">Marcus Rodriguez</div><div class="test-role">VP Engineering, ScaleUp</div></div>
    66|    66|<div class="test-card"><p>"Incredible product and even better support team. They truly care about our success."</p><div class="test-author">Aisha Patel</div><div class="test-role">Founder, DataSync</div></div>
    67|    67|</div></div></section>
    68|    68|<section class="cta-section"><h2>Ready to Get Started?</h2><p>Join 10,000+ teams already using ${title}</p><a href="#" class="btn-white">Start Free Trial →</a></section>
    69|    69|<footer><p>Built with ❤️ by <span class="mimo">Powered by MiMo</span></p></footer>
    70|    70|</body></html>`},
    71|    71|  "creative-portfolio": function(title,desc){return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title><style>
    72|    72|*{margin:0;padding:0;box-sizing:border-box}body{background:#0a0a0a;color:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
    73|    73|.nav{position:fixed;top:0;width:100%;padding:20px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;background:rgba(10,10,10,.9);backdrop-filter:blur(10px)}
    74|    74|.nav a{color:#888;text-decoration:none;font-size:14px;transition:color .2s}.nav a:hover{color:#fff}
    75|    75|.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:0 40px}
    76|    76|.hero h1{font-size:clamp(3rem,8vw,7rem);font-weight:900;line-height:.95;letter-spacing:-.04em;margin-bottom:24px}
    77|    77|.hero h1 span{background:linear-gradient(135deg,#ff6b6b,#ffd93d);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    78|    78|.hero p{font-size:clamp(1rem,2vw,1.3rem);color:#666;max-width:500px;line-height:1.7;font-family:'Courier New',monospace}
    79|    79|.projects{padding:100px 40px}
    80|    80|.section-label{font-size:12px;text-transform:uppercase;letter-spacing:.2em;color:#ff6b6b;margin-bottom:40px;font-family:monospace}
    81|    81|.project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:24px}
    82|    82|.project{position:relative;border-radius:16px;overflow:hidden;background:#111;aspect-ratio:16/10;cursor:pointer;transition:transform .3s}
    83|    83|.project:hover{transform:scale(1.02)}
    84|    84|.project-bg{width:100%;height:100%;background:linear-gradient(135deg,var(--c1),var(--c2));opacity:.6;transition:opacity .3s}
    85|    85|.project:hover .project-bg{opacity:.8}
    86|    86|.project-info{position:absolute;bottom:0;left:0;right:0;padding:32px;background:linear-gradient(transparent,rgba(0,0,0,.8))}
    87|    87|.project-info h3{font-size:24px;font-weight:700;margin-bottom:4px}
    88|    88|.project-info p{color:#aaa;font-size:14px}
    89|    89|.about{padding:100px 40px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;max-width:1200px;margin:0 auto}
    90|    90|.about h2{font-size:clamp(2rem,4vw,3.5rem);font-weight:800;margin-bottom:24px}
    91|    91|.about p{color:#888;line-height:1.8;margin-bottom:32px}
    92|    92|.skills{list-style:none}.skills li{padding:12px 0;border-bottom:1px solid #1a1a1a;display:flex;justify-content:space-between;color:#aaa}
    93|    93|.skills li span:last-child{color:#ff6b6b;font-family:monospace}
    94|    94|.contact{padding:100px 40px;text-align:center}
    95|    95|.contact h2{font-size:clamp(2rem,5vw,4rem);font-weight:900;margin-bottom:32px}
    96|    96|.contact a{color:#ff6b6b;text-decoration:none;font-size:20px;border:2px solid #ff6b6b;padding:14px 40px;border-radius:50px;display:inline-block;transition:all .2s;font-family:monospace}
    97|    97|.contact a:hover{background:#ff6b6b;color:#0a0a0a}
    98|    98|footer{text-align:center;padding:40px;color:#333;font-size:12px;font-family:monospace}
    99|    99|footer .mimo{color:#ff6b6b}
   100|   100|@media(max-width:768px){.about{grid-template-columns:1fr;gap:40px}.project-grid{grid-template-columns:1fr}.hero{padding:0 20px}}
   101|   101|</style></head><body>
   102|   102|<nav class="nav"><span style="font-weight:800;font-size:18px">${title}</span><div style="display:flex;gap:24px"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>
   103|   103|<section class="hero"><h1>${title}<br><span>Creative Studio</span></h1><p>${desc}</p></section>
   104|   104|<section class="projects" id="work"><div class="section-label">// Selected Works</div>
   105|   105|<div class="project-grid">
   106|   106|<div class="project"><div class="project-bg" style="--c1:#ff6b6b;--c2:#ee5a24"></div><div class="project-info"><h3>Brand Identity</h3><p>Visual Design · 2024</p></div></div>
   107|   107|<div class="project"><div class="project-bg" style="--c1:#a29bfe;--c2:#6c5ce7"></div><div class="project-info"><h3>Web Platform</h3><p>UI/UX Design · 2024</p></div></div>
   108|   108|<div class="project"><div class="project-bg" style="--c1:#ffd93d;--c2:#ff6b6b"></div><div class="project-info"><h3>Mobile App</h3><p>Product Design · 2024</p></div></div>
   109|   109|<div class="project"><div class="project-bg" style="--c1:#00b894;--c2:#00cec9"></div><div class="project-info"><h3>Dashboard</h3><p>Data Visualization · 2024</p></div></div>
   110|   110|</div></section>
   111|   111|<section class="about" id="about"><div><h2>About Me</h2><p>A passionate creative designer with 8+ years of experience crafting digital experiences. I blend art with technology to create memorable interactions.</p></div>
   112|   112|<div><ul class="skills"><li><span>UI/UX Design</span><span>95%</span></li><li><span>Brand Identity</span><span>90%</span></li><li><span>Motion Design</span><span>85%</span></li><li><span>Typography</span><span>92%</span></li><li><span>Illustration</span><span>80%</span></li></ul></div></section>
   113|   113|<section class="contact" id="contact"><h2>Let's Create<br>Something Amazing</h2><a href="mailto:hello@example.com">Get In Touch →</a></section>
   114|   114|<footer><p>Built with ❤️ <span class="mimo">Powered by MiMo</span></p></footer>
   115|   115|</body></html>`}
   116|   116|};
   117|   117|,
   118|  "ecommerce": function(title,desc){return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title><style>
   119|*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a2e;background:#fff}
   120|.nav{position:fixed;top:0;width:100%;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;background:#fff;z-index:100;box-shadow:0 1px 0 #eee}
   121|.nav-logo{font-weight:800;font-size:20px}
   122|.nav-links{display:flex;gap:24px;align-items:center}.nav-links a{color:#555;text-decoration:none;font-size:14px}.cart{background:#1a1a2e;color:#fff;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600}
   123|.hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding:120px 60px 80px;gap:60px;max-width:1200px;margin:0 auto}
   124|.hero-content h1{font-size:clamp(2.5rem,5vw,3.5rem);font-weight:800;line-height:1.1;margin-bottom:20px}
   125|.hero-content p{color:#666;font-size:18px;line-height:1.7;margin-bottom:32px}
   126|.hero-img{background:linear-gradient(135deg,#f0f0f0,#e8e8e8);border-radius:24px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:80px}
   127|.btn{display:inline-block;padding:14px 32px;background:#1a1a2e;color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:transform .2s;margin-right:12px}
   128|.btn:hover{transform:translateY(-2px)}
   129|.btn-outline{display:inline-block;padding:14px 32px;border:2px solid #ddd;color:#1a1a2e;border-radius:12px;font-weight:700;text-decoration:none;transition:all .2s}
   130|.btn-outline:hover{border-color:#1a1a2e}
   131|.features{padding:100px 60px;max-width:1200px;margin:0 auto}
   132|.section-title{font-size:2rem;font-weight:800;text-align:center;margin-bottom:12px}
   133|.section-sub{text-align:center;color:#666;margin-bottom:60px}
   134|.feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:32px}
   135|.feat{text-align:center;padding:32px}.feat-icon{font-size:36px;margin-bottom:16px}.feat h3{font-size:18px;font-weight:700;margin-bottom:8px}.feat p{color:#666;font-size:15px;line-height:1.6}
   136|.specs{background:#f8f8f8;padding:100px 60px}
   137|.specs-inner{max-width:800px;margin:0 auto}
   138|.spec-table{width:100%;border-collapse:collapse;margin-top:40px}
   139|.spec-table td{padding:16px 0;border-bottom:1px solid #eee;font-size:15px}
   140|.spec-table td:first-child{font-weight:600;color:#333}
   141|.spec-table td:last-child{color:#666;text-align:right}
   142|.reviews{padding:100px 60px;max-width:1200px;margin:0 auto}
   143|.rev-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}
   144|.rev{background:#fafafa;border-radius:16px;padding:32px}
   145|.stars{color:#f59e0b;margin-bottom:12px;font-size:18px}
   146|.rev p{color:#555;line-height:1.7;margin-bottom:16px;font-style:italic}
   147|.rev-author{font-weight:700;font-size:14px}
   148|.cta{background:#1a1a2e;color:#fff;text-align:center;padding:100px 20px}
   149|.cta h2{font-size:2.5rem;font-weight:800;margin-bottom:16px}
   150|.cta p{opacity:.7;font-size:18px;margin-bottom:32px}
   151|.btn-white{display:inline-block;padding:14px 32px;background:#fff;color:#1a1a2e;border-radius:12px;font-weight:700;text-decoration:none}
   152|footer{text-align:center;padding:40px;color:#888;font-size:13px}
   153|footer .mimo{color:#1a1a2e;font-weight:600}
   154|@media(max-width:768px){.hero{grid-template-columns:1fr;padding:100px 20px 60px}.hero-img{display:none}}
   155|</style></head><body>
   156|<nav class="nav"><div class="nav-logo">${title}</div><div class="nav-links"><a href="#">Shop</a><a href="#">About</a><a href="#" class="cart">🛒 Cart (0)</a></div></nav>
   157|<section class="hero"><div class="hero-content"><h1>${title}</h1><p>${desc}</p><a href="#" class="btn">Shop Now</a><a href="#" class="btn-outline">Learn More</a></div><div class="hero-img">🛍️</div></section>
   158|<section class="features"><h2 class="section-title">Why Choose Us</h2><p class="section-sub">Quality you can trust, delivered with care</p>
   159|<div class="feat-grid"><div class="feat"><div class="feat-icon">🌿</div><h3>Eco-Friendly</h3><p>Sustainable materials and ethical manufacturing processes</p></div>
   160|<div class="feat"><div class="feat-icon">🚚</div><h3>Free Shipping</h3><p>Free worldwide shipping on all orders over $50</p></div>
   161|<div class="feat"><div class="feat-icon">↩️</div><h3>Easy Returns</h3><p>30-day hassle-free return policy on all items</p></div>
   162|<div class="feat"><div class="feat-icon">⭐</div><h3>Premium Quality</h3><p>Crafted with the finest materials for lasting quality</p></div></div></section>
   163|<section class="specs"><div class="specs-inner"><h2 class="section-title">Product Details</h2><table class="spec-table"><tr><td>Material</td><td>Premium Grade A</td></tr><tr><td>Dimensions</td><td>Standard Fit</td></tr><tr><td>Weight</td><td>Lightweight</td></tr><tr><td>Warranty</td><td>2 Years</td></tr><tr><td>Origin</td><td>Artisan Crafted</td></tr></table></div></section>
   164|<section class="reviews"><h2 class="section-title">Customer Reviews</h2><p class="section-sub">★★★★★ 4.9 average from 2,400+ reviews</p>
   165|<div class="rev-grid"><div class="rev"><div class="stars">★★★★★</div><p>"Absolutely love this product! The quality exceeded my expectations."</p><div class="rev-author">— Emily R.</div></div>
   166|<div class="rev"><div class="stars">★★★★★</div><p>"Best purchase I've made this year. Highly recommend to everyone."</p><div class="rev-author">— James K.</div></div>
   167|<div class="rev"><div class="stars">★★★★★</div><p>"Fast shipping and beautiful packaging. Will definitely order again!"</p><div class="rev-author">— Sofia M.</div></div></div></section>
   168|<section class="cta"><h2>Ready to Experience ${title}?</h2><p>Join thousands of happy customers today</p><a href="#" class="btn-white">Shop Now →</a></section>
   169|<footer><p>Built with ❤️ <span class="mimo">Powered by MiMo</span></p></footer>
   170|</body></html>`},
   171|  "agency": function(title,desc){return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title><style>
   172|*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#fff;background:#1a1a2e}
   173|.nav{position:fixed;top:0;width:100%;padding:20px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;background:rgba(26,26,46,.95);backdrop-filter:blur(10px)}
   174|.nav-logo{font-weight:800;font-size:20px;color:#e2b04a}
   175|.nav-links{display:flex;gap:24px}.nav-links a{color:#888;text-decoration:none;font-size:14px;transition:color .2s}.nav-links a:hover{color:#e2b04a}
   176|.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 20px 80px}
   177|.hero h1{font-size:clamp(2.5rem,6vw,4.5rem);font-weight:800;line-height:1.1;margin-bottom:20px}
   178|.hero h1 span{color:#e2b04a}
   179|.hero p{color:#888;font-size:clamp(1rem,2vw,1.25rem);max-width:600px;margin:0 auto 32px;line-height:1.7}
   180|.btn{display:inline-block;padding:14px 36px;background:#e2b04a;color:#1a1a2e;border-radius:8px;font-weight:700;font-size:16px;text-decoration:none;transition:transform .2s}
   181|.btn:hover{transform:translateY(-2px)}
   182|.services{padding:100px 40px;max-width:1100px;margin:0 auto}
   183|.section-title{text-align:center;font-size:2.5rem;font-weight:800;margin-bottom:12px}
   184|.section-title span{color:#e2b04a}
   185|.section-sub{text-align:center;color:#666;font-size:18px;margin-bottom:60px}
   186|.serv-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px}
   187|.serv{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:36px;transition:all .3s}
   188|.serv:hover{border-color:#e2b04a;transform:translateY(-4px)}
   189|.serv-icon{font-size:36px;margin-bottom:16px}
   190|.serv h3{font-size:20px;font-weight:700;margin-bottom:8px;color:#e2b04a}
   191|.serv p{color:#888;line-height:1.6}
   192|.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:0;text-align:center;padding:80px 40px;max-width:1100px;margin:0 auto;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)}
   193|.stat-num{font-size:3.5rem;font-weight:800;color:#e2b04a;margin-bottom:4px}
   194|.stat-label{color:#666;font-size:14px}
   195|.team{padding:100px 40px;max-width:1100px;margin:0 auto}
   196|.team-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px;text-align:center}
   197|.team-member{padding:24px}
   198|.team-avatar{width:100px;height:100px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:40px}
   199|.team-member h4{font-size:18px;margin-bottom:4px}
   200|.team-member p{color:#666;font-size:14px}
   201|.contact{padding:100px 40px;text-align:center}
   202|.contact h2{font-size:2.5rem;font-weight:800;margin-bottom:16px}
   203|.contact p{color:#888;margin-bottom:32px;font-size:18px}
   204|footer{text-align:center;padding:40px;color:#444;font-size:13px}
   205|footer .mimo{color:#e2b04a}
   206|@media(max-width:768px){.stats{grid-template-columns:1fr 1fr;gap:40px}.nav-links{display:none}}
   207|</style></head><body>
   208|<nav class="nav"><div class="nav-logo">${title}</div><div class="nav-links"><a href="#services">Services</a><a href="#team">Team</a><a href="#contact">Contact</a></div></nav>
   209|<section class="hero"><div><h1>We Build <span>Digital<br>Experiences</span></h1><p>${desc}</p><a href="#contact" class="btn">Start a Project</a></div></section>
   210|<section class="services" id="services"><h2 class="section-title">Our <span>Services</span></h2><p class="section-sub">End-to-end digital solutions for modern businesses</p>
   211|<div class="serv-grid"><div class="serv"><div class="serv-icon">🎨</div><h3>Brand Strategy</h3><p>Craft compelling brand identities that resonate with your audience.</p></div>
   212|<div class="serv"><div class="serv-icon">💻</div><h3>Web Development</h3><p>Custom web applications built with cutting-edge technology.</p></div>
   213|<div class="serv"><div class="serv-icon">📱</div><h3>Mobile Apps</h3><p>Native and cross-platform mobile applications that users love.</p></div>
   214|<div class="serv"><div class="serv-icon">📈</div><h3>Growth Marketing</h3><p>Data-driven strategies to scale your business and maximize ROI.</p></div></div></section>
   215|<div class="stats"><div><div class="stat-num">150+</div><div class="stat-label">Projects Delivered</div></div><div><div class="stat-num">98%</div><div class="stat-label">Client Satisfaction</div></div><div><div class="stat-num">12+</div><div class="stat-label">Years Experience</div></div><div><div class="stat-num">45</div><div class="stat-label">Team Members</div></div></div>
   216|<section class="team" id="team"><h2 class="section-title">Meet the <span>Team</span></h2><p class="section-sub">The people behind the magic</p>
   217|<div class="team-grid"><div class="team-member"><div class="team-avatar" style="background:#2d2d4a">👨‍💻</div><h4>Alex Rivera</h4><p>Creative Director</p></div>
   218|<div class="team-member"><div class="team-avatar" style="background:#2d2d4a">👩‍🎨</div><h4>Maria Kim</h4><p>Lead Designer</p></div>
   219|<div class="team-member"><div class="team-avatar" style="background:#2d2d4a">👨‍🔧</div><h4>David Chen</h4><p>Tech Lead</p></div>
   220|<div class="team-member"><div class="team-avatar" style="background:#2d2d4a">👩‍💼</div><h4>Sarah Johnson</h4><p>Strategy Lead</p></div></div></section>
   221|<section class="contact" id="contact"><h2>Let's Work Together</h2><p>Ready to bring your vision to life?</p><a href="mailto:hello@agency.com" class="btn">Get In Touch →</a></section>
   222|<footer><p>Built with ❤️ <span class="mimo">Powered by MiMo</span></p></footer>
   223|</body></html>`}
   224|};
   225|,
  "app-landing": function(title,desc){return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#fff;background:#0f0c29}
.nav{position:fixed;top:0;width:100%;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;background:rgba(15,12,41,.9);backdrop-filter:blur(10px)}
.nav-logo{font-weight:800;font-size:20px;background:linear-gradient(135deg,#a78bfa,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:24px;align-items:center}.nav-links a{color:#888;text-decoration:none;font-size:14px}.nav-links a:hover{color:#fff}
.btn-small{padding:8px 20px;background:linear-gradient(135deg,#a78bfa,#818cf8);color:#fff;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 20px;background:linear-gradient(135deg,#0f0c29,#302b63,#24243e)}
.hero h1{font-size:clamp(2.5rem,6vw,4rem);font-weight:800;line-height:1.1;margin-bottom:20px}
.hero p{color:#888;font-size:18px;max-width:550px;margin:0 auto 32px;line-height:1.7}
.btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:12px;font-weight:700;font-size:15px;text-decoration:none;transition:transform .2s}
.btn:hover{transform:translateY(-2px)}
.btn-primary{background:linear-gradient(135deg,#a78bfa,#818cf8);color:#fff}
.btn-dark{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.1)}
.phone-mockup{margin-top:60px;width:280px;height:560px;background:linear-gradient(180deg,#1e1b4b,#312e81);border-radius:36px;border:3px solid #4338ca;margin-left:auto;margin-right:auto;display:flex;align-items:center;justify-content:center;font-size:60px;box-shadow:0 20px 60px rgba(0,0,0,.5)}
.steps{padding:100px 40px;max-width:1000px;margin:0 auto}
.section-title{text-align:center;font-size:2.5rem;font-weight:800;margin-bottom:12px}
.section-sub{text-align:center;color:#666;font-size:18px;margin-bottom:60px}
.step-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px}
.step{padding:32px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;text-align:center}
.step-num{width:48px;height:48px;background:linear-gradient(135deg,#a78bfa,#818cf8);border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:20px;margin:0 auto 20px}
.step h3{font-size:20px;margin-bottom:8px}
.step p{color:#888;line-height:1.6}
.gallery{padding:100px 40px;overflow-x:auto}
.gallery-track{display:flex;gap:24px;max-width:1200px;margin:0 auto;justify-content:center;flex-wrap:wrap}
.screen{width:220px;height:400px;background:linear-gradient(135deg,var(--c1),var(--c2));border-radius:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:32px;border:2px solid rgba(255,255,255,.1)}
.faq{padding:100px 40px;max-width:700px;margin:0 auto}
.faq-item{border-bottom:1px solid rgba(255,255,255,.06);padding:24px 0}
.faq-q{font-weight:700;font-size:18px;cursor:pointer;display:flex;justify-content:space-between}
.faq-q::after{content:"+"}.faq-item:hover .faq-q{color:#a78bfa}
.faq-a{color:#888;line-height:1.7;margin-top:12px;font-size:15px}
.newsletter{padding:100px 40px;text-align:center;background:linear-gradient(135deg,#1e1b4b,#312e81)}
.newsletter h2{font-size:2.5rem;font-weight:800;margin-bottom:12px}
.newsletter p{color:#888;margin-bottom:32px}
.input-group{display:flex;max-width:400px;margin:0 auto;gap:8px}
.input-group input{flex:1;padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:#fff;font-size:15px;outline:none}
.input-group button{padding:14px 24px;background:linear-gradient(135deg,#a78bfa,#818cf8);border:none;border-radius:12px;color:#fff;font-weight:700;cursor:pointer}
footer{text-align:center;padding:40px;color:#444;font-size:13px}
footer .mimo{color:#a78bfa}
@media(max-width:768px){.nav-links{display:none}.input-group{flex-direction:column}}
</style></head><body>
<nav class="nav"><div class="nav-logo">${title}</div><div class="nav-links"><a href="#features">Features</a><a href="#faq">FAQ</a><a href="#" class="btn-small">Download</a></div></nav>
<section class="hero"><div><h1>${title}</h1><p>${desc}</p>
<div class="btns"><a href="#" class="btn btn-primary">🍎 App Store</a><a href="#" class="btn btn-dark">▶ Google Play</a></div>
<div class="phone-mockup">📱</div></div></section>
<section class="steps" id="features"><h2 class="section-title">How It Works</h2><p class="section-sub">Get started in 3 simple steps</p>
<div class="step-grid"><div class="step"><div class="step-num">1</div><h3>Download</h3><p>Get the app from App Store or Google Play. It's free!</p></div>
<div class="step"><div class="step-num">2</div><h3>Set Up</h3><p>Create your account and personalize your experience.</p></div>
<div class="step"><div class="step-num">3</div><h3>Enjoy</h3><p>Start using all features and transform your workflow.</p></div></div></section>
<section class="gallery"><h2 class="section-title" style="margin-bottom:40px">App Screenshots</h2>
<div class="gallery-track"><div class="screen" style="--c1:#4338ca;--c2:#7c3aed">📊</div><div class="screen" style="--c1:#7c3aed;--c2:#a78bfa">⚙️</div><div class="screen" style="--c1:#a78bfa;--c2:#c4b5fd">📈</div><div class="screen" style="--c1:#818cf8;--c2:#6366f1">🎯</div></div></section>
<section class="faq" id="faq"><h2 class="section-title">FAQ</h2>
<div class="faq-item"><div class="faq-q">Is the app free to use?</div><div class="faq-a">Yes! The core features are completely free. Premium features available via subscription.</div></div>
<div class="faq-item"><div class="faq-q">Which platforms are supported?</div><div class="faq-a">Available on iOS 15+ and Android 12+. Web version coming soon.</div></div>
<div class="faq-item"><div class="faq-q">Is my data secure?</div><div class="faq-a">Absolutely. We use end-to-end encryption and never sell your data to third parties.</div></div></section>
<section class="newsletter"><h2>Stay Updated</h2><p>Get the latest news and updates delivered to your inbox</p>
<div class="input-group"><input type="email" placeholder="your@email.com"><button>Subscribe</button></div></section>
<footer><p>Built with ❤️ <span class="mimo">Powered by MiMo</span></p></footer>
</body></html>`},
  "event": function(title,desc){return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a2e;background:#fff}
.nav{position:fixed;top:0;width:100%;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);border-bottom:1px solid #eee}
.nav-logo{font-weight:800;font-size:20px;color:#ff6b6b}
.nav-links{display:flex;gap:24px}.nav-links a{color:#555;text-decoration:none;font-size:14px}
.btn{display:inline-block;padding:12px 28px;background:#ff6b6b;color:#fff;border-radius:8px;font-weight:700;text-decoration:none;transition:transform .2s;font-size:14px}
.btn:hover{transform:translateY(-2px)}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 20px 80px;background:linear-gradient(135deg,#ff6b6b 0%,#4ecdc4 100%);color:#fff}
.hero-date{font-size:14px;text-transform:uppercase;letter-spacing:.2em;opacity:.8;margin-bottom:20px}
.hero h1{font-size:clamp(3rem,8vw,5rem);font-weight:900;line-height:1;margin-bottom:20px}
.hero p{font-size:20px;opacity:.9;max-width:500px;margin:0 auto 40px;line-height:1.6}
.countdown{display:flex;gap:16px;justify-content:center;margin-bottom:40px}
.cd-box{background:rgba(255,255,255,.2);backdrop-filter:blur(10px);border-radius:12px;padding:16px 24px;min-width:80px}
.cd-num{font-size:36px;font-weight:800;display:block}
.cd-label{font-size:11px;text-transform:uppercase;letter-spacing:.1em;opacity:.8}
.speakers{padding:100px 40px;max-width:1100px;margin:0 auto}
.section-title{text-align:center;font-size:2.5rem;font-weight:800;margin-bottom:12px}
.section-sub{text-align:center;color:#666;font-size:18px;margin-bottom:60px}
.speaker-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px}
.speaker{text-align:center;padding:24px}
.speaker-avatar{width:120px;height:120px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:48px;background:linear-gradient(135deg,#ffe0e0,#e0f7f5)}
.speaker h4{font-size:18px;margin-bottom:4px}
.speaker p{color:#888;font-size:14px}
.schedule{padding:100px 40px;background:#f8f8f8}
.schedule-inner{max-width:700px;margin:0 auto}
.timeline{position:relative;padding-left:40px}
.timeline::before{content:'';position:absolute;left:15px;top:0;bottom:0;width:2px;background:linear-gradient(#ff6b6b,#4ecdc4)}
.tl-item{position:relative;padding:20px 0 20px 30px}
.tl-item::before{content:'';position:absolute;left:-33px;top:26px;width:12px;height:12px;border-radius:50%;background:#ff6b6b;border:3px solid #fff}
.tl-time{font-size:13px;color:#ff6b6b;font-weight:700;margin-bottom:4px}
.tl-item h4{font-size:18px;margin-bottom:4px}
.tl-item p{color:#666;font-size:15px}
.tickets{padding:100px 40px;max-width:1000px;margin:0 auto}
.ticket-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
.ticket{border:2px solid #eee;border-radius:16px;padding:36px;text-align:center;transition:all .3s}
.ticket:hover{border-color:#ff6b6b;transform:translateY(-4px)}
.ticket.featured{border-color:#ff6b6b;box-shadow:0 12px 40px rgba(255,107,107,.15)}
.ticket-price{font-size:48px;font-weight:800;margin:16px 0}.ticket-price span{font-size:16px;color:#888;font-weight:400}
.ticket-features{list-style:none;margin:24px 0}.ticket-features li{padding:8px 0;color:#555;border-bottom:1px solid #f0f0f0}
.sponsors{padding:80px 40px;text-align:center;background:#f8f8f8}
.sponsor-logos{display:flex;justify-content:center;gap:40px;flex-wrap:wrap;margin-top:40px;align-items:center}
.sponsor{width:120px;height:60px;background:#e8e8e8;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#999;font-weight:700;font-size:13px}
footer{text-align:center;padding:40px;color:#888;font-size:13px}
footer .mimo{color:#ff6b6b;font-weight:600}
@media(max-width:768px){.countdown{flex-wrap:wrap}.nav-links{display:none}}
</style></head><body>
<nav class="nav"><div class="nav-logo">${title}</div><div class="nav-links"><a href="#speakers">Speakers</a><a href="#schedule">Schedule</a><a href="#tickets" class="btn">Get Tickets</a></div></nav>
<section class="hero"><div><div class="hero-date">📅 June 15-17, 2026 · San Francisco</div>
<h1>${title}</h1><p>${desc}</p>
<div class="countdown"><div class="cd-box"><span class="cd-num">42</span><span class="cd-label">Days</span></div><div class="cd-box"><span class="cd-num">08</span><span class="cd-label">Hours</span></div><div class="cd-box"><span class="cd-num">23</span><span class="cd-label">Min</span></div><div class="cd-box"><span class="cd-num">47</span><span class="cd-label">Sec</span></div></div>
<a href="#tickets" class="btn" style="background:#fff;color:#ff6b6b;font-size:16px;padding:16px 40px">Get Your Ticket →</a></div></section>
<section class="speakers" id="speakers"><h2 class="section-title">Featured Speakers</h2><p class="section-sub">Learn from industry leaders and innovators</p>
<div class="speaker-grid"><div class="speaker"><div class="speaker-avatar">👩‍💻</div><h4>Dr. Lisa Wang</h4><p>AI Research Lead, MiMo</p></div>
<div class="speaker"><div class="speaker-avatar">👨‍💼</div><h4>Raj Patel</h4><p>CEO, TechVentures</p></div>
<div class="speaker"><div class="speaker-avatar">👩‍🔬</div><h4>Emma Torres</h4><p>VP Engineering, CloudScale</p></div>
<div class="speaker"><div class="speaker-avatar">👨‍🎨</div><h4>Marco Rossi</h4><p>Design Director, Pixel</p></div></div></section>
<section class="schedule" id="schedule"><div class="schedule-inner"><h2 class="section-title">Schedule</h2><p class="section-sub">Three days of inspiration and learning</p>
<div class="timeline"><div class="tl-item"><div class="tl-time">9:00 AM</div><h4>Opening Keynote</h4><p>Welcome and vision for the future</p></div>
<div class="tl-item"><div class="tl-time">10:30 AM</div><h4>AI in Production</h4><p>Real-world applications of AI at scale</p></div>
<div class="tl-item"><div class="tl-time">1:00 PM</div><h4>Workshop: Building with MiMo</h4><p>Hands-on session with MiMo API</p></div>
<div class="tl-item"><div class="tl-time">3:30 PM</div><h4>Panel: Future of Tech</h4><p>Industry leaders discuss what's next</p></div>
<div class="tl-item"><div class="tl-time">6:00 PM</div><h4>Networking Reception</h4><p>Connect with speakers and attendees</p></div></div></div></section>
<section class="tickets" id="tickets"><h2 class="section-title">Get Your Ticket</h2><p class="section-sub">Early bird pricing — limited availability</p>
<div class="ticket-grid"><div class="ticket"><h3>Standard</h3><div class="ticket-price">$199<span>/ticket</span></div><ul class="ticket-features"><li>All keynotes</li><li>Workshop access</li><li>Lunch included</li><li>Event swag bag</li></ul><a href="#" class="btn" style="background:#1a1a2e">Buy Ticket</a></div>
<div class="ticket featured"><h3>⭐ VIP</h3><div class="ticket-price">$499<span>/ticket</span></div><ul class="ticket-features"><li>Everything in Standard</li><li>Front-row seating</li><li>Speaker dinner access</li><li>1-on-1 mentoring session</li></ul><a href="#" class="btn">Buy VIP Ticket</a></div>
<div class="ticket"><h3>Student</h3><div class="ticket-price">$49<span>/ticket</span></div><ul class="ticket-features"><li>All keynotes</li><li>Workshop access</li><li>Lunch included</li><li>Valid student ID required</li></ul><a href="#" class="btn" style="background:#1a1a2e">Buy Ticket</a></div></div></section>
<section class="sponsors"><h2 class="section-title">Our Sponsors</h2>
<div class="sponsor-logos"><div class="sponsor">MiMo</div><div class="sponsor">TechCorp</div><div class="sponsor">CloudAI</div><div class="sponsor">DataFlow</div><div class="sponsor">Neural</div></div></section>
<footer><p>Built with ❤️ <span class="mimo">Powered by MiMo</span></p></footer>
</body></html>`}
};
