import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="site-shell">
    <header class="site-header section">
      <div class="container header-row">
        <a class="brand" href="#hero" aria-label="Tango home">
          <img class="brand-logo" src="/Tango_logo.png" alt="Tango logo" />
        </a>
        <nav class="header-nav" aria-label="Main navigation">
          <a href="#hero">Home</a>
          <a href="#selling-points">Technology</a>
          <a href="#technology-overview">Product</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero section" id="hero">
        <div class="container">
          <div class="hero-kv">
            <img
              class="hero-kv-image"
              src="/homepage-hero-clean.jpeg"
              alt="Tango adult care lifestyle and product key visual"
            />
            <div class="hero-copy">
              <h1>Less leaking. Less rash worry. More comfort.<br />— For you and your carer.</h1>
              <p class="lead">
                Tango is designed to improve wet comfort, fit more securely, and
                deliver a better wearing experience through practical product
                innovation.
              </p>
              <div class="hero-actions">
                <a class="button-primary" href="#contact">Contact Us</a>
                <a class="button-secondary" href="#contact">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="pain-points">
        <div class="container pain-section">
          <div class="pain-title-row">
            <h2>When “doesn’t leak” still turns into a long night…</h2>
          </div>
          <p class="section-intro">
            Even with basic protection, nights can still mean wake-ups, skin
            stress, and extra cleanup.
          </p>

          <div class="pain-layout">
            <div class="pain-cards">
              <article class="card pain-card">
                <span class="pain-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M7 4h10l2 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z"></path>
                    <path d="M9 9h6M9 13h4"></path>
                    <path d="M6 8h12"></path>
                  </svg>
                </span>
                <h3>Overnight Soak</h3>
                <p>Padding may hold fluid, but prolonged wet contact still disturbs rest.</p>
              </article>
              <article class="card pain-card">
                <span class="pain-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M6 14c0-4.2 2.7-7 6-7s6 2.8 6 7"></path>
                    <path d="M8 17c1.2-1 2.6-1.5 4-1.5s2.8.5 4 1.5"></path>
                    <path d="M9 10.5h.01M15 10.5h.01"></path>
                  </svg>
                </span>
                <h3>Rash and Skin Stress</h3>
                <p>Heat, friction, and moisture buildup can leave skin more sensitive by morning.</p>
              </article>
              <article class="card pain-card">
                <span class="pain-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M4 18v-2a3 3 0 0 1 3-3h3"></path>
                    <path d="M20 18v-2a3 3 0 0 0-3-3h-3"></path>
                    <path d="M8.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                    <path d="M15.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                  </svg>
                </span>
                <h3>More Work for Carers</h3>
                <p>Night checks, changes, and bedding cleanup add pressure to every routine.</p>
              </article>
              <article class="card pain-card pain-card-result">
                <span class="pain-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M4 12a8 8 0 1 0 16 0"></path>
                    <path d="M8 12l2.5 2.5L16 9"></path>
                  </svg>
                </span>
                <h3>Fewer Night Disruptions</h3>
                <p>Better overnight comfort means fewer disruptions for both users and carers.</p>
              </article>
            </div>
            <figure class="pain-support-image">
              <img
                src="/night-care-support.jpeg"
                alt="Night care support scene"
              />
            </figure>
          </div>
        </div>
      </section>

      <section class="section section-soft" id="selling-points">
        <div class="container tech-highlights">
          <h2>Core Technology Highlights</h2>
          <p class="section-intro">
            Tango’s core technologies are designed to improve comfort, fit, and
            product differentiation for long-term market value.
          </p>

          <figure class="tech-hero-visual">
            <img
              src="/technology-highlights.jpg"
              alt="Tango core technology highlights including Dry Comfort, Secure Fit, and Honeycomb Technology"
            />
          </figure>

          <div class="tech-cards">
            <article class="card tech-card">
              <h3>Dry Comfort</h3>
              <p>
                Reduces direct skin contact with wet padding after absorption,
                helping improve wearing comfort over time.
              </p>
            </article>
            <article class="card tech-card">
              <h3>Secure Fit</h3>
              <p>
                Big-wing self-adjustable adhesive tapes help maintain closer body
                fit and reduce leakage risk during movement.
              </p>
            </article>
            <article class="card tech-card">
              <h3>Honeycomb Technology</h3>
              <p>
                Hexagon honeycomb padding helps reduce contact points with the
                wetted core for improved wet-stage comfort.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section" id="technology-overview">
        <div class="container product-guide">
          <h2>Product Guide</h2>
          <p class="section-intro">
            Explore Tango’s core product categories for different care needs,
            sourcing plans, and business inquiries.
          </p>

          <div class="guide-top-layout">
            <figure class="guide-main-visual">
              <img
                src="/product-guide-main.jpeg"
                alt="Tango product guide main visual with package and opened diaper"
              />
            </figure>
            <article class="guide-formats">
              <h3>Product Formats</h3>
              <p class="guide-sub-desc">
                Core product formats for daily care, facility needs, and business
                sourcing.
              </p>
              <ul class="format-list">
                <li>
                  <span class="format-name">Adult Diapers</span>
                  <span class="format-note">Higher absorbency and secure fit for extended wear.</span>
                </li>
                <li>
                  <span class="format-name">Pads</span>
                  <span class="format-note">Lighter support for discreet, flexible daily routines.</span>
                </li>
                <li>
                  <span class="format-name">Underpads</span>
                  <span class="format-note">Protects bedding and surfaces in home or facility care.</span>
                </li>
              </ul>
            </article>
          </div>

          <div class="size-section">
            <h3>Available Sizes</h3>
            <div class="size-grid">
              <article class="size-box">
                <p class="size-label">M</p>
                <p>Waist: 75–105 cm</p>
              </article>
              <article class="size-box">
                <p class="size-label">L</p>
                <p>Waist: 95–130 cm</p>
              </article>
              <article class="size-box">
                <p class="size-label">XL</p>
                <p>Waist: 120–150 cm</p>
              </article>
            </div>
            <figure class="size-chart">
              <img
                src="/product-formats-chart.jpg"
                alt="Tango product formats and size chart"
              />
            </figure>
          </div>
        </div>
      </section>

      <section class="section section-soft" id="brand-story">
        <div class="container brand-story">
          <h2>Engineered for Comfort, Inspired by Love</h2>
          <div class="brand-story-layout">
            <div class="brand-story-copy">
              <article>
                <h3>Our Story</h3>
                <p>
                  Tango Hygiene is a family-owned Australian business based in
                  Sydney. Founded in 2025, our roots in textile and materials
                  expertise go back more than 20 years.
                </p>
              </article>
              <article>
                <h3>The Inspiration</h3>
                <p>
                  Tango started with something personal. One of our founders’
                  relatives—once the owner of a high-end lingerie brand in Hong
                  Kong—lived with dementia in her final years. We saw her
                  experience repeated discomfort and skin irritation from standard
                  products. Many options provided protection, but few were truly
                  designed for long-term comfort and sensitive skin.
                </p>
              </article>
              <article>
                <h3>Our Mission</h3>
                <p>
                  So we set out to build something better. By combining decades of
                  textile engineering expertise with real caregiving needs, Tango
                  products are designed to deliver reliable protection, while
                  preserving comfort, dignity, and everyday wellbeing.
                </p>
              </article>
            </div>
            <figure class="brand-story-visual">
              <img src="/support_tango.jpg" alt="Supportive care scene for Tango brand story" />
            </figure>
          </div>
        </div>
      </section>

      <section class="section section-soft" id="faq">
        <div class="container">
          <h2>Frequently Asked Questions</h2>
          <p class="section-intro">
            Here are some common questions about Tango’s product design and
            technology.
          </p>
          <div class="faq-list">
            <details>
              <summary>What makes Tango different from conventional adult diapers?</summary>
              <p>
                Tango is designed around practical product innovation that improves
                wearing comfort and fit through Dry Comfort, Secure Fit, and
                Honeycomb Technology.
              </p>
            </details>
            <details>
              <summary>How does Dry Comfort improve wearing comfort?</summary>
              <p>
                Dry Comfort helps reduce skin contact with wet padding after
                absorption, supporting a more comfortable experience.
              </p>
            </details>
            <details>
              <summary>How does Secure Fit help reduce leakage?</summary>
              <p>
                Big-wing self-adjustable adhesive tapes help the diaper fit more
                securely and may reduce leakage during movement.
              </p>
            </details>
            <details>
              <summary>Do you deliver outside Sydney CBD & North?</summary>
              <p>
                Right now we’re focused on Sydney CBD & North. If you’re outside
                the area, contact us and we’ll tell you what’s possible.
              </p>
            </details>
            <details>
              <summary>What if I buy the wrong size?</summary>
              <p>
                You can return it within 7 days if the pack is unopened.
              </p>
            </details>
            <details>
              <summary>Which product should I start with—pants, diapers, pads, or mats?</summary>
              <p>
                Pants are simpler for mobile users. Tab diapers can help when you
                need a more secure fit. Pads and mats add extra protection. If you
                tell us the situation, we’ll point you to the best start.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section class="section" id="contact-cta">
        <div class="container contact-cta-layout">
          <div class="contact-cta-copy">
            <h2>Shop with confidence</h2>
            <p class="section-intro">
              Any unopened packs can be returned within 7 days. Based in Sydney
              CBD & North, Tango makes it easy to get comfort-first protection
              fast. If you ordered the wrong size, you can return it within one
              week if unopened.
            </p>
            <div class="inline-actions">
              <a class="button-primary" href="#contact">Contact Us</a>
              <a class="button-secondary" href="#contact">Send Inquiry</a>
              <a class="button-secondary" href="#contact">Get a Quote</a>
            </div>
          </div>
          <figure class="contact-cta-visual">
            <img src="/7_day.png" alt="7-day unopened return support" />
          </figure>
        </div>
      </section>

      <section class="section section-soft" id="contact">
        <div class="container">
          <h2>Get in Touch</h2>
          <div class="contact-grid">
            <article class="card contact-info-card">
              <h3>Contact Information</h3>
              <img class="contact-avatar" src="/rex.png" alt="Rex Wong portrait" />
              <div class="contact-meta">
                <p><strong>Rex Wong</strong></p>
                <p>Phone: +61 423 322 564</p>
                <p>Email: rex.wong@tangohygiene.com.au</p>
              </div>
            </article>
            <article class="card">
              <h3>Inquiry Form</h3>
              <form class="contact-form" aria-label="Inquiry form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Suburb" />
                <textarea placeholder="Message"></textarea>
                <button type="button" class="button-primary">Send Inquiry</button>
              </form>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer section">
      <div class="container footer-row">
        <p>Tango. Advanced adult diaper technology for better comfort and fit.</p>
        <p>rex.wong@tangohygiene.com.au | +61 423 322 564</p>
      </div>
    </footer>
  </div>
`;
