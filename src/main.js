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
            Explore Tango product options designed for different care needs, with
            clear guidance for sourcing and business inquiries.
          </p>

          <div class="product-block">
            <figure class="guide-main-visual">
              <img
                src="/product-guide-main.jpeg"
                alt="Adult diapers package and opened diaper"
              />
            </figure>
            <article class="guide-formats">
              <p class="product-eyebrow">CORE CARE</p>
              <h3>Adult Diapers</h3>
              <p class="guide-sub-desc">
                Designed for higher absorbency, secure fit, and dependable
                protection in extended wear situations.
              </p>
              <ul class="format-list">
                <li>Higher absorbency for extended wear</li>
                <li>Secure fit with leakage control</li>
                <li>Available sizes: M / L / XL</li>
              </ul>
              <a class="product-inline-link" href="#inquiry-form">Request Samples →</a>
            </article>
          </div>

          <div class="product-block product-block-reverse">
            <article class="guide-formats">
              <p class="product-eyebrow">DAILY SUPPORT</p>
              <h3>ActivePro Pads</h3>
              <p class="guide-sub-desc">
                A discreet, everyday support option designed for lighter bladder
                leak care and daily comfort.
              </p>
              <ul class="format-list">
                <li>Soft surface for daily wear</li>
                <li>Slim profile for discreet support</li>
                <li>Dimensions: 410 × 140 mm</li>
              </ul>
              <a class="product-inline-link" href="#inquiry-form">Request Samples →</a>
            </article>
            <figure class="guide-main-visual">
              <img
                src="/activepro-pads.jpeg"
                alt="ActivePro Pads product image"
              />
            </figure>
          </div>

        </div>
      </section>

      <section class="section section-soft" id="brand-story">
        <div class="container brand-story">
          <h2>Engineered for Comfort, Inspired by Love</h2>
          <p class="brand-story-intro">
            No matter the format, comfort and dignity should never be compromised.
          </p>
          <div class="brand-story-layout">
            <div class="brand-story-copy">
              <article class="brand-story-card-light">
                <h3>Our Story</h3>
                <p>
                  Tango Hygiene is a family-owned Australian business based in
                  Sydney. Founded in 2025, our roots in textile and materials
                  expertise go back more than 20 years. We built Tango to bring
                  together reliable protection, softer comfort, and a more
                  thoughtful everyday care experience.
                </p>
              </article>
              <article>
                <h3>The Inspiration</h3>
                <p>
                  Tango began with something personal. One of our founders’
                  relatives lived with dementia in her final years, and we saw how
                  standard products often protected, but failed to provide long-term
                  comfort and skin-friendly care. Many products offered protection,
                  but few truly supported long-term dignity and skin comfort.
                </p>
              </article>
              <article>
                <h3>Our Mission</h3>
                <p>
                  We set out to build something better by combining textile
                  engineering expertise with real caregiving needs—creating products
                  that support protection, comfort, dignity, and everyday
                  wellbeing. <span class="brand-story-note-inline">Built to protect, designed to care.</span>
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
                <p>Email: info@tangohygiene.com.au</p>
              </div>
            </article>
            <article class="card">
              <h3>Inquiry Form</h3>
              <form
                id="inquiry-form"
                class="contact-form"
                aria-label="Inquiry form"
                action="https://api.web3forms.com/submit"
                method="post"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="fcae5b5a-18ee-40e7-bd6e-f8e16fa79959"
                />
                <input type="hidden" name="subject" value="Tango Website Inquiry" />
                <input type="hidden" name="from_name" value="Tango Website Form" />
                <input type="checkbox" name="botcheck" class="form-botcheck" tabindex="-1" autocomplete="off" />
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="company" placeholder="Company" />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="suburb" placeholder="Suburb" />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit" class="button-primary">Send Inquiry</button>
                <p id="inquiry-status" class="form-status" aria-live="polite"></p>
              </form>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer section">
      <div class="container footer-row">
        <p>Tango. Advanced adult diaper technology for better comfort and fit.</p>
        <p>info@tangohygiene.com.au | +61 423 322 564</p>
      </div>
    </footer>
  </div>
`;

const inquiryForm = document.querySelector("#inquiry-form");
const inquiryStatus = document.querySelector("#inquiry-status");

if (inquiryForm && inquiryStatus) {
  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const accessKey = String(formData.get("access_key") || "");

    if (!accessKey || accessKey === "REPLACE_WITH_WEB3FORMS_ACCESS_KEY") {
      inquiryStatus.textContent = "Please set your Web3Forms access key first.";
      inquiryStatus.dataset.state = "error";
      return;
    }

    inquiryStatus.textContent = "Sending...";
    inquiryStatus.dataset.state = "";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        inquiryStatus.textContent = "Thanks. Your inquiry has been sent.";
        inquiryStatus.dataset.state = "success";
        inquiryForm.reset();
      } else {
        inquiryStatus.textContent = "Submit failed. Please try again.";
        inquiryStatus.dataset.state = "error";
      }
    } catch (error) {
      inquiryStatus.textContent = "Network issue. Please try again.";
      inquiryStatus.dataset.state = "error";
    }
  });
}
