import "./style.css";

(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <div class="site-shell">
    <header class="site-header section">
      <div class="container header-row">
        <a class="brand" href="#hero" aria-label="Tango home">
          <img class="brand-logo" src="/Tango_logo.png" alt="Tango logo" />
        </a>
        <nav class="header-nav" aria-label="Main navigation">
          <a href="#hero">Home</a>
          <a href="#selling-points">Technology</a>
          <a href="#technology-overview">Products</a>
          <a href="#product-photos">Photos</a>
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
              <h1>Dry Comfort. Secure Fit. More Confidence.<br />For You and Your Carer.</h1>
              <p class="lead">
                Tango brings together Dry Comfort, Secure Fit, and practical
                product innovation to support a more confident wearing
                experience.
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
            <h2>A Better Night Starts with Lasting Comfort</h2>
          </div>
          <p class="section-intro">
            Tango is designed to support calmer nights, with comfort, fit, and
            absorbency working together for users and carers.
          </p>

          <div class="pain-layout">
            <div class="pain-cards">
              <article class="card pain-card pain-card-result">
                <span class="pain-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M7 4h10l2 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z"></path>
                    <path d="M9 9h6M9 13h4"></path>
                    <path d="M6 8h12"></path>
                  </svg>
                </span>
                <h3>Quick-Dry Comfort</h3>
                <p>Dry Comfort helps draw moisture in quickly and supports a drier-feeling surface for lasting comfort.</p>
              </article>
              <article class="card pain-card">
                <span class="pain-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M6 14c0-4.2 2.7-7 6-7s6 2.8 6 7"></path>
                    <path d="M8 17c1.2-1 2.6-1.5 4-1.5s2.8.5 4 1.5"></path>
                    <path d="M9 10.5h.01M15 10.5h.01"></path>
                  </svg>
                </span>
                <h3>Skin-Friendly Surface</h3>
                <p>Patented Honeycomb Technology helps reduce wet contact points, supporting a softer and fresher feel against the skin.</p>
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
                <h3>Easier Care Routines</h3>
                <p>Secure Fit tapes help the diaper stay closer to the body, supporting simpler changes and greater confidence for carers.</p>
              </article>
              <article class="card pain-card pain-card-result">
                <span class="pain-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M4 12a8 8 0 1 0 16 0"></path>
                    <path d="M8 12l2.5 2.5L16 9"></path>
                  </svg>
                </span>
                <h3>Calmer Nights for Everyone</h3>
                <p>Together, Tango’s design helps support comfortable rest and a more confident overnight routine for users and carers.</p>
              </article>
            </div>
            <figure class="pain-support-image">
              <img
                src="/night-care-support-smile.png"
                alt="Smiling night care support scene"
              />
            </figure>
          </div>
        </div>
      </section>

      <section class="section section-soft" id="selling-points">
        <div class="container tech-highlights">
          <h2>Core Technology Highlights</h2>
          <p class="section-intro">
            Tango’s core technologies are designed to support dry comfort, secure
            fit, and confidence through everyday care.
          </p>

          <figure class="tech-hero-visual">
            <img
              src="/technology-highlights.jpg"
              alt="Tango core technology highlights including Dry Comfort, Secure Fit, and Patented Honeycomb Technology"
            />
          </figure>

          <div class="tech-cards">
            <article class="card tech-card">
              <h3>Dry Comfort</h3>
              <p>
                Helps reduce direct skin contact with wet padding after
                absorption, supporting a drier and more comfortable wearing
                experience.
              </p>
            </article>
            <article class="card tech-card">
              <h3>Secure Fit</h3>
              <p>
                Wide re-fastenable adhesive tapes help maintain a closer body fit
                and support secure coverage during movement.
              </p>
            </article>
            <article class="card tech-card">
              <h3>Patented Honeycomb Technology</h3>
              <p>
                Hexagon honeycomb padding helps reduce wet contact points for a
                softer, more comfortable feel after absorption.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section" id="demo-video">
        <div class="container demo-video">
          <div class="demo-video-copy">
            <h2>Watch the Demonstration Video</h2>
            <p class="product-eyebrow">ADULT DIAPERS</p>
            <p class="section-intro">
              Tango Hygiene Adult Diapers are designed for simple seated
              self-application, helping users stay comfortable and independent at
              home or while out and about.
            </p>
          </div>
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/FjsW54hnbiY"
              title="Tango Hygiene Adult Diapers demonstration video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <section class="product-video-panel" aria-labelledby="product-video-title">
            <div class="product-video-copy">
              <p class="product-eyebrow">ACTIVEPRO PADS</p>
              <h3 id="product-video-title">Absorbency Demonstration</h3>
              <p>
                Watch how ActivePro Pads deliver strong absorption, support a
                quick-dry surface, and lock in moisture securely.
              </p>
            </div>
            <div class="video-frame product-video-frame">
              <iframe
                src="https://www.youtube.com/embed/ygrdFXV4Nfg"
                title="Tango product demonstration video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </section>
        </div>
      </section>

      <section class="section" id="technology-overview">
        <div class="container product-guide">
          <h2>Product Guide</h2>
          <p class="section-intro">
            Explore Tango Hygiene’s continence care range, including ActivePro
            Pads, Adult Diapers, Adult Pants, and Protective Mats.
          </p>

          <div class="product-block">
            <figure class="guide-main-visual guide-main-visual-diaper">
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
                protection during extended wear.
              </p>
              <ul class="format-list">
                <li>Higher absorbency for extended wear</li>
                <li>Secure Fit for confident coverage</li>
                <li>Available in M, L, and XL</li>
              </ul>
              <a class="product-inline-link" href="#inquiry-form">Request Samples →</a>
            </article>
          </div>

          <div class="product-block product-block-reverse">
            <article class="guide-formats">
              <p class="product-eyebrow">DAILY SUPPORT</p>
              <h3>ActivePro Pads</h3>
              <p class="guide-sub-desc">
                A discreet everyday support option designed for lighter
                absorbency needs and daily comfort.
              </p>
              <ul class="format-list">
                <li>Quick-dry surface for daily comfort</li>
                <li>Slim profile for discreet wear</li>
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

      <section class="section section-soft" id="product-photos">
        <div class="container product-photos">
          <div class="product-photos-heading">
            <p class="product-eyebrow">PRODUCT PHOTOS</p>
            <h2>See the Products Up Close</h2>
            <p class="section-intro">
              Product photos are grouped by range so customers can clearly
              compare ActivePro Pads and Adult Diapers.
            </p>
          </div>

          <div class="product-photo-groups">
            <section class="product-photo-group" aria-labelledby="pad-photo-title">
              <div class="product-photo-group-heading">
                <p class="product-eyebrow">ACTIVEPRO PADS</p>
                <h3 id="pad-photo-title">ActivePro Pads</h3>
              </div>
              <div class="product-photo-gallery product-photo-gallery-four">
                <figure class="product-photo-tile">
                  <img src="/pad-pack.png" alt="Tango ActivePro Pads product pack" />
                  <figcaption>Pack Front</figcaption>
                </figure>
                <figure class="product-photo-tile">
                  <img src="/pad-full.png" alt="Tango ActivePro pad full product view" />
                  <figcaption>Full Pad View</figcaption>
                </figure>
                <figure class="product-photo-tile">
                  <img src="/pad-absorbency-clean.png" alt="Tango ActivePro pad super soft surface by MicroFibre fabric close-up" />
                  <figcaption>Super Soft Surface by MicroFibre Fabric</figcaption>
                </figure>
                <figure class="product-photo-tile">
                  <img src="/pad-texture.png" alt="Tango ActivePro pad super soft edge by underwear grade trim design close-up" />
                  <figcaption>Super Soft Edge by Underwear Grade Trim Design</figcaption>
                </figure>
              </div>
            </section>

            <section class="product-photo-group product-photo-group-diapers" aria-labelledby="diaper-photo-title">
              <div class="product-photo-group-heading">
                <p class="product-eyebrow">ADULT DIAPERS</p>
                <h3 id="diaper-photo-title">Adult Diapers</h3>
              </div>
              <div class="product-photo-gallery product-photo-gallery-four">
                <figure class="product-photo-tile">
                  <img src="/diaper-pack-clean-blue.png" alt="Tango adult diapers product pack" />
                  <figcaption>Pack Front</figcaption>
                </figure>
                <figure class="product-photo-tile">
                  <img src="/diaper-full.png" alt="Tango adult diaper full product view" />
                  <figcaption>Full Diaper View</figcaption>
                </figure>
                <figure class="product-photo-tile">
                  <img src="/diaper-side-panel.png" alt="Tango adult diaper patented special Velcro wider side wing close-up" />
                  <figcaption>Patented Special Velcro Wider Side Wing</figcaption>
                </figure>
                <figure class="product-photo-tile">
                  <img src="/diaper-secure-fit.png" alt="Tango adult diaper patented strong re-fasten adhesive tape close-up" />
                  <figcaption>Patented Strong Re-fasten Adhesive Tape</figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section class="section section-soft" id="brand-story">
        <div class="container brand-story">
          <h2>Engineered for Comfort, Inspired by Care</h2>
          <p class="brand-story-intro">
            Across every product format, Tango is designed to support comfort,
            dignity, and everyday confidence.
          </p>
          <div class="brand-story-layout">
            <div class="brand-story-copy">
              <article class="brand-story-card-light">
                <h3>Our Story</h3>
                <p>
                  Tango Hygiene is a family-owned Australian business based in
                  Sydney. Founded in 2025, our family’s experience in the
                  lingerie industry, textile design, and materials goes back more
                  than 40 years.
                </p>
                <p>
                  Our products were first developed for our own mum, with a focus
                  on reliable protection, softness, comfort, and thoughtful
                  everyday care. She used the products for several years and
                  experienced the comfort and support we had hoped to provide.
                </p>
                <p>
                  That personal experience became the foundation of Tango Hygiene.
                </p>
              </article>
              <article>
                <h3>The Inspiration</h3>
                <p>
                  Tango began with something deeply personal. One of our founders’
                  mothers lived with dementia in her later years. As her care
                  needs changed, we wanted to create a product that offered more
                  than reliable protection.
                </p>
                <p>
                  Drawing on our family’s experience in lingerie design, body
                  shape, textiles, and soft materials, we developed products
                  especially for her, products designed to feel comfortable, fit
                  properly, and support her dignity in everyday life.
                </p>
                <p>
                  Seeing how she benefited from using them inspired us to make the
                  same thoughtful care available to other individuals, families,
                  and carers.
                </p>
              </article>
              <article>
                <h3>Our Mission</h3>
                <p>
                  Our mission is to combine generations of lingerie and
                  textile-design experience with genuine family caregiving
                  experience to create personal hygiene products that support
                  protection, comfort, confidence, and dignity.
                </p>
                <p>
                  What began as a product created for our own mum has grown into a
                  desire to give back to the community. We want more people and
                  their families to benefit from products designed with genuine
                  understanding and care.
                </p>
                <p>
                  <strong class="brand-story-note-inline">Built to protect. Designed to care.</strong>
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
            Clear answers about Tango product design, technology, and support.
          </p>
          <div class="faq-list">
            <details>
              <summary>What makes Tango different from conventional adult diapers?</summary>
              <p>
                Tango is designed around practical product innovation that supports
                wearing comfort and fit through Dry Comfort, Secure Fit, and
                Patented Honeycomb Technology.
              </p>
            </details>
            <details>
              <summary>How does Dry Comfort improve wearing comfort?</summary>
              <p>
                Dry Comfort helps reduce skin contact with wet padding after
                absorption, supporting a drier and more comfortable experience.
              </p>
            </details>
            <details>
              <summary>How does Secure Fit support better coverage?</summary>
              <p>
                Wide re-fastenable adhesive tapes help the diaper fit closer to
                the body, supporting secure coverage during movement.
              </p>
            </details>
            <details>
              <summary>Which product should I start with: pants, diapers, pads, or mats?</summary>
              <p>
                Adult Pants are simple for mobile users. Tab-style Adult Diapers
                support a secure fit. Pads and mats add extra protection. Share
                the situation with us and we can recommend a good starting point.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section class="section" id="contact-cta">
        <div class="container contact-cta-layout">
          <div class="contact-cta-copy">
            <h2>Shop with Confidence</h2>
            <p class="section-intro">
              Find Tango Hygiene products at selected local stores.
            </p>
            <div class="local-stores">
              <h3>Available at Local Stores</h3>
              <ul>
                <li>
                  <span class="store-suburb">TURRAMURRA</span>
                  <div class="store-entry">
                    <strong>IGA Chris's Family Grocer</strong>
                    <span>99A Eastern Road, Turramurra NSW 2074</span>
                  </div>
                  <div class="store-entry">
                    <strong>Taylors Pharmacy</strong>
                    <span>33 Rohini Street, near Turramurra Station</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">GORDON</span>
                  <div class="store-entry">
                    <strong>Priceline Pharmacy Gordon</strong>
                    <span>Shop 1, 808 Pacific Highway, Gordon NSW 2072</span>
                  </div>
                  <div class="store-entry">
                    <strong>Blooms The Chemist Gordon</strong>
                    <span>765 Pacific Highway, Gordon NSW 2072</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">LINDFIELD</span>
                  <div class="store-entry">
                    <strong>SuperSave Chemist-Lindfield</strong>
                    <span>19-21 Lindfield Avenue, Lindfield NSW 2070</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">PYMBLE</span>
                  <div class="store-entry">
                    <strong>Pymble Pharmacy</strong>
                    <span>99-101 Grandview Street, Pymble NSW 2073</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">HORNSBY</span>
                  <div class="store-entry">
                    <strong>Priceline Pharmacy Hornsby</strong>
                    <span>Shop 1001, Westfield Hornsby<br />236 Pacific Highway, Hornsby NSW 2077</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">BEROWRA</span>
                  <div class="store-entry">
                    <strong>Berowra Station Pharmacy</strong>
                    <span>Shop 1, 1001 Pacific Highway, Berowra NSW 2081</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">TERREY HILLS</span>
                  <div class="store-entry">
                    <strong>Caremore Pharmacy</strong>
                    <span>Shop 2, 2 Booralie Road, Terrey Hills NSW 2084</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">BELROSE</span>
                  <div class="store-entry">
                    <strong>Cincotta Discount Chemist Belrose</strong>
                    <span>4-6 Niangala Close, Belrose NSW 2085</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">ST IVES</span>
                  <div class="store-entry">
                    <strong>Carter Pharmacy</strong>
                    <span>Shop 8, 351 Mona Vale Road, St Ives NSW 2075</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">BEECROFT</span>
                  <div class="store-entry">
                    <strong>Denny Pharmacy</strong>
                    <span>Shop 6, Beecroft Arcade, 6-8 Hannah Street, Beecroft NSW 2119</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">PENNANT HILLS</span>
                  <div class="store-entry">
                    <strong>Astley Pharmacy and Mobility</strong>
                    <span>368 Pennant Hills Road, Pennant Hills NSW 2120</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">CARLINGFORD</span>
                  <div class="store-entry">
                    <strong>Discount Day &amp; Night Pharmacy</strong>
                    <span>Shop G11, 372 Pennant Hills Road, Carlingford NSW 2118</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">CHERRYBROOK</span>
                  <div class="store-entry">
                    <strong>Best's Pharmacy Cherrybrook</strong>
                    <span>Cherrybrook Village Shopping Centre<br />Shepherds Drive, Cherrybrook NSW 2126</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">DURAL</span>
                  <div class="store-entry">
                    <strong>Friendly Mobility</strong>
                    <span>3/829 Old Northern Road, Dural NSW 2158</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">ST MARYS</span>
                  <div class="store-entry">
                    <strong>Astley Pharmacy St Marys</strong>
                    <span>Astley Centre, Cnr Mamre Rd and 370 Great Western Hwy, St Marys NSW 2760</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">MINCHINBURY</span>
                  <div class="store-entry">
                    <strong>Minchinbury Pharmacy</strong>
                    <span>Shop 5, 36-38 Minchin Dr, Minchinbury NSW 2770</span>
                  </div>
                </li>
                <li>
                  <span class="store-suburb">LONG JETTY</span>
                  <div class="store-entry">
                    <strong>Long Jetty Mobility Centre</strong>
                    <span>397 The Entrance Road, Long Jetty NSW 2261</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="inline-actions">
              <a class="button-primary" href="#contact">Contact Us</a>
              <a class="button-secondary" href="#contact">Send Inquiry</a>
              <a class="button-secondary" href="#contact">Get a Quote</a>
            </div>
          </div>
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
        <p>Tango Hygiene. Designed for comfort and care.</p>
        <p>info@tangohygiene.com.au | +61 423 322 564</p>
      </div>
    </footer>

    <div class="photo-lightbox" id="photo-lightbox" aria-hidden="true">
      <button class="photo-lightbox-backdrop" type="button" data-lightbox-close aria-label="Close enlarged photo"></button>
      <div class="photo-lightbox-dialog" role="dialog" aria-modal="true" aria-labelledby="photo-lightbox-caption">
        <button class="photo-lightbox-close" type="button" data-lightbox-close aria-label="Close enlarged photo">×</button>
        <img id="photo-lightbox-image" alt="" />
        <p id="photo-lightbox-caption"></p>
      </div>
    </div>
  </div>
`;const photoLightbox=document.querySelector(`#photo-lightbox`),photoLightboxImage=document.querySelector(`#photo-lightbox-image`),photoLightboxCaption=document.querySelector(`#photo-lightbox-caption`),photoTiles=document.querySelectorAll(`.product-photo-tile img`);let lastFocusedPhoto=null;function closePhotoLightbox(){photoLightbox&&photoLightboxImage&&photoLightboxCaption&&(photoLightbox.dataset.state=``,photoLightbox.setAttribute(`aria-hidden`,`true`),photoLightboxImage.removeAttribute(`src`),photoLightboxImage.alt=``,photoLightboxCaption.textContent=``),lastFocusedPhoto&&lastFocusedPhoto.focus()}function openPhotoLightbox(e){if(!photoLightbox||!photoLightboxImage||!photoLightboxCaption)return;let t=e.closest(`figure`),n=t?.querySelector(`figcaption`)?.textContent?.trim()||e.alt||`Product photo`;lastFocusedPhoto=e,photoLightboxImage.src=e.currentSrc||e.src,photoLightboxImage.alt=e.alt,photoLightboxCaption.textContent=n,photoLightbox.dataset.state=`open`,photoLightbox.setAttribute(`aria-hidden`,`false`),photoLightbox.querySelector(`[data-lightbox-close]`)?.focus()}photoTiles.forEach(e=>{let t=e.closest(`figure`)?.querySelector(`figcaption`)?.textContent?.trim()||e.alt||`product photo`;e.tabIndex=0,e.setAttribute(`role`,`button`),e.setAttribute(`aria-label`,`Enlarge ${t}`),e.addEventListener(`click`,()=>openPhotoLightbox(e)),e.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),openPhotoLightbox(e))})}),photoLightbox?.addEventListener(`click`,e=>{e.target.closest(`[data-lightbox-close]`)&&closePhotoLightbox()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&photoLightbox?.dataset.state===`open`&&closePhotoLightbox()});var e=document.querySelector(`#inquiry-form`),t=document.querySelector(`#inquiry-status`);e&&t&&e.addEventListener(`submit`,async n=>{n.preventDefault();let r=new FormData(e),i=String(r.get(`access_key`)||``);if(!i||i===`REPLACE_WITH_WEB3FORMS_ACCESS_KEY`){t.textContent=`Please set your Web3Forms access key first.`,t.dataset.state=`error`;return}t.textContent=`Sending...`,t.dataset.state=``;try{(await(await fetch(`https://api.web3forms.com/submit`,{method:`POST`,body:r})).json()).success?(t.textContent=`Thanks. Your inquiry has been sent.`,t.dataset.state=`success`,e.reset()):(t.textContent=`Submit failed. Please try again.`,t.dataset.state=`error`)}catch{t.textContent=`Network issue. Please try again.`,t.dataset.state=`error`}});
