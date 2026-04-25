import React from "react";

const topStripItems = [
  "Necklaces",
  "Earrings",
  "Bangles",
  "Bridal Sets",
  "Pendants",
  "Chains",
  "Temple Jewellery",
  "Diamond Edit",
];

const bottomStripItems = [
  "Mangalsutras",
  "Rings",
  "Polki Edit",
  "Anklets",
  "Traditional Gold",
  "Wedding Sets",
  "Ear Drops",
  "Statement Pieces",
];

const storyPoints = [
  {
    title: "Established Since 1962",
    text: "A trusted jewellery destination serving families across generations with consistency and care.",
  },
  {
    title: "Personal Guidance",
    text: "Owner Hemant Soni and the team help customers choose pieces for bridal, festive, gifting, and daily wear.",
  },
  {
    title: "Craftsmanship And Trust",
    text: "The showroom focuses on quality presentation, classic designs, and a warm in-store experience.",
  },
];

const highlights = [
  {
    title: "Trusted Local Name",
    text: "Known in the Panna Naka area for dependable service, honest assistance, and timeless jewellery choices.",
  },
  {
    title: "Family-Friendly Experience",
    text: "Customers can explore the collection comfortably with practical guidance for weddings, gifting, and everyday wear.",
  },
  {
    title: "Visit And Discover",
    text: "The website is designed to encourage showroom visits and direct conversations rather than online checkout.",
  },
];

const heroImage = {
  src: "/necklace/neck11.jpeg",
  alt: "Bridal gold necklace set",
};

const showcaseItems = [
  {
    title: "Bridal Grandeur",
    description: "Statement necklace sets for wedding-day styling.",
    src: "/necklace/neck10.jpeg",
    alt: "Bridal grandeur necklace set",
  },
  {
    title: "Festive Gold",
    description: "Rich festive jewellery with warm gold detailing.",
    src: "/necklace/neck8.jpeg",
    alt: "Festive gold jewellery set",
  },
  {
    title: "Diamond Edit",
    description: "Refined sparkle for evening and occasion wear.",
    src: "/necklace/earings2.jpeg",
    alt: "Diamond-style earrings",
  },
  {
    title: "Temple Classics",
    description: "Traditional silhouettes with heirloom character.",
    src: "/necklace/neck5.jpeg",
    alt: "Temple classic necklace design",
  },
];

const storyImages = [
  {
    src: "/necklace/neck_1.jpeg",
    alt: "Detailed necklace close-up",
    label: "Signature Craft",
  },
  {
    src: "/rings/rings.jpeg",
    alt: "Gold ring collection",
    label: "Everyday Gold",
  },
  {
    src: "/rings/rings2.jpeg",
    alt: "Ring display in showroom",
    label: "Fine Finish",
  },
];

const marqueeImages = [
  {
    src: "/necklace/earings1.jpeg",
    alt: "Royal earrings design",
  },
  {
    src: "/necklace/earings4.jpeg",
    alt: "Decorative earring detail",
  },
];

const galleryItems = [
  {
    src: "/necklace/neck2.jpeg",
    alt: "Gold necklace set 1",
    title: "Ceremonial Layers",
    note: "Rich bridal styling with a regal silhouette.",
  },
  {
    src: "/necklace/neck3.jpeg",
    alt: "Gold necklace set 2",
    title: "Soft Heritage",
    note: "Classic detailing chosen for festive dressing.",
  },
  {
    src: "/necklace/neck4.jpeg",
    alt: "Gold necklace set 3",
    title: "Traditional Finish",
    note: "Warm gold textures with timeless appeal.",
  },
  {
    src: "/necklace/neck6.jpeg",
    alt: "Gold necklace set 4",
    title: "Bridal Focus",
    note: "Statement work designed for wedding moments.",
  },
  {
    src: "/necklace/neck7.jpeg",
    alt: "Gold necklace set 5",
    title: "Festive Edit",
    note: "Elegant volume for family occasions and gifting.",
  },
  {
    src: "/necklace/neck9.jpeg",
    alt: "Gold necklace set 6",
    title: "Showroom Selection",
    note: "A glimpse of the richer catalogue available in store.",
  },
  {
    src: "/necklace/earings3.jpeg",
    alt: "Elegant earrings pair",
    title: "Earring Accent",
    note: "Refined sparkle for lighter occasion wear.",
  },
];

function MarqueeStrip({ items, reverse = false }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="strip">
      <div className={`strip-track${reverse ? " reverse" : ""}`}>
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar fade-rise">
        <div className="brand-lockup">
          <div className="brand-mark">NJ</div>
          <div>
            <p className="eyebrow">Since 1962</p>
            <h1>New J.K. Jewellers</h1>
          </div>
        </div>
        <nav className="topnav">
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#visit">Visit Us</a>
        </nav>
      </header>

      <main>
        <section className="hero-intro fade-rise delay-1">
          <div className="hero-copy">
            <p className="section-kicker">Timeless Craft, Heirloom Detail</p>
            <h2>Jewellery chosen with trust, tradition, and royal elegance.</h2>
            <p className="lead">
              New J.K. Jewellers has been serving customers since 1962 with
              carefully selected bridal, festive, traditional, and everyday
              jewellery pieces in a welcoming showroom experience led by owner
              Hemant Soni.
            </p>
            <div className="hero-stats">
              <div>
                <strong>1962</strong>
                <span>Years Of Trust</span>
              </div>
              <div>
                <strong>Hemant</strong>
                <span>Owner Guidance</span>
              </div>
              <div>
                <strong>Panna Naka</strong>
                <span>Easy To Visit</span>
              </div>
            </div>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#visit">
                Plan Your Visit
              </a>
              <a className="btn btn-outline" href="#about">
                Our Story
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame hero-frame-main">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="media-image"
              />
              <div className="frame-copy">
                <p className="card-label">Signature Bridal Edit</p>
                <strong>
                  Classic designs presented with warmth and personal attention
                </strong>
              </div>
            </div>
            <div className="hero-frame hero-frame-small floating-card">
              <p className="card-label">Showroom Details</p>
              <p>
                Panna Naka, in front of Parmar Hospital, beside Jain Chhore
                Bhature.
              </p>
            </div>
          </div>
        </section>

        <section
          className="image-showcase fade-rise delay-2"
          aria-label="Jewellery showcase"
        >
          <div className="showcase-heading">
            <p className="section-kicker">Featured Frames</p>
            <h3>Real product photography added from your public folder</h3>
          </div>

          <div className="showcase-grid">
            {showcaseItems.map((item, index) => (
              <article
                key={item.title}
                className={`showcase-tile tile-${index + 1}`}
              >
                <img src={item.src} alt={item.alt} className="media-image" />
                <div className="tile-badge">0{index + 1}</div>
                <div className="tile-copy">
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── ABOUT US ─────────────────────────────────────────────── */}
        <section className="about-section fade-rise delay-3" id="about">
          {/* decorative orb */}
          <div className="about-orb" aria-hidden="true" />

          <div className="about-inner">
            {/* LEFT column */}
            <div className="about-left">
              <div className="about-image-mosaic">
                <div className="mosaic-main story-image">
                  <img
                    src={storyImages[0].src}
                    alt={storyImages[0].alt}
                    className="media-image"
                  />
                  <div className="mosaic-badge">Est. 1962</div>
                </div>
                <div className="mosaic-sub story-image">
                  <img
                    src={storyImages[1].src}
                    alt={storyImages[1].alt}
                    className="media-image"
                  />
                </div>
                <div className="mosaic-accent">
                  <div className="mosaic-accent-inner">
                    <span className="accent-num">60+</span>
                    <span className="accent-label">
                      Years of
                      <br />
                      Trust
                    </span>
                  </div>
                </div>
                <div className="mosaic-third story-image">
                  <img
                    src={storyImages[2].src}
                    alt={storyImages[2].alt}
                    className="media-image"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT column */}
            <div className="about-right">
              <p className="section-kicker">About The House</p>
              <h3 className="about-heading">
                A Legacy Woven
                <br />
                <em>in Gold &amp; Trust</em>
              </h3>

              <div className="about-divider">
                <span />
                <span className="divider-gem">◆</span>
                <span />
              </div>

              <p className="about-lead">
                New J.K. Jewellers is a long-standing jewellery showroom serving
                the local community since <strong>1962</strong>. Under the
                guidance of owner <strong>Hemant Soni</strong>, the showroom is
                known for a dependable approach, respectful service, and
                jewellery curated for everyday elegance and cherished family
                occasions alike.
              </p>
              <p className="about-body">
                Located at <strong>Panna Naka</strong>, in front of Parmar
                Hospital, beside Jain Chhore Bhature — the store is a familiar,
                trusted destination where customers explore necklaces, earrings,
                rings, bridal styles, festive sets, and timeless traditional
                pieces. Our aim is simple: to help every customer find jewellery
                that feels valuable, beautiful, and meaningful for years to
                come.
              </p>

              <div className="about-pillars">
                {storyPoints.map((point, i) => (
                  <div key={point.title} className="pillar-card">
                    <div className="pillar-index">0{i + 1}</div>
                    <strong>{point.title}</strong>
                    <p>{point.text}</p>
                  </div>
                ))}
              </div>

              <div className="about-cta">
                <a className="btn btn-solid" href="#visit">
                  Visit The Showroom
                </a>
                <a className="btn btn-outline" href="tel:+919826237997">
                  Call Hemant Soni
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ──────────────────────────────────────────────── */}
        <section className="gallery-section fade-rise delay-5" id="gallery">
          <div className="gallery-section-header">
            <p className="section-kicker">Catalogue Highlights</p>
            <h3 className="gallery-section-title">
              Signature Pieces from
              <br />
              <em>the Showroom Collection</em>
            </h3>
            <p className="gallery-section-sub">
              A curated mix of bridal sets, festive designs, and elegant accents
              — every photograph shows the full piece, uncropped.
            </p>
          </div>

          <div className="gallery-masonry">
            {galleryItems.map((item, index) => (
              <article
                key={item.src}
                className={`gallery-tile gallery-tile-${(index % 3) + 1}`}
              >
                <div className="gallery-tile-img-wrap">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="gallery-tile-img"
                  />
                </div>
                <div className="gallery-tile-info">
                  <span className="gallery-tile-num">0{index + 1}</span>
                  <div>
                    <strong className="gallery-tile-title">{item.title}</strong>
                    <p className="gallery-tile-note">{item.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="marquee-hero fade-rise delay-4" id="collections">
          <div className="full-bleed-shell">
            <MarqueeStrip items={topStripItems} />

            <div className="section-inner marquee-content">
              <div className="marquee-visual">
                <div className="hero-jewel hero-jewel-main">
                  <img
                    src={marqueeImages[0].src}
                    alt={marqueeImages[0].alt}
                    className="media-image"
                  />
                </div>
                <div className="hero-jewel hero-jewel-fade">
                  <img
                    src={marqueeImages[1].src}
                    alt={marqueeImages[1].alt}
                    className="media-image"
                  />
                </div>
              </div>

              <div className="marquee-copy">
                <p className="section-kicker">Festive Collection 2026</p>
                <h3>
                  Royal
                  <br />
                  Earrings
                </h3>
                <p>
                  A rich display of elegant earrings, necklace sets, and
                  occasion-ready styles that reflect the classic identity of New
                  J.K. Jewellers.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-outline" href="#visit">
                    Book A Visit
                  </a>
                  <a className="btn btn-solid" href="#contact">
                    Make Enquiry
                  </a>
                </div>
              </div>
            </div>

            <MarqueeStrip items={bottomStripItems} reverse />
          </div>
        </section>

        <section className="highlights fade-rise delay-6">
          <div className="highlights-heading">
            <p className="section-kicker">Why People Visit</p>
            <h3>
              A showroom experience with warmth, assurance, and visual richness.
            </h3>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="visit-section fade-rise delay-6" id="visit">
          <div className="visit-copy">
            <p className="section-kicker">Visit The Showroom</p>
            <h3>Come experience the collection in person.</h3>
            <p>
              Visit New J.K. Jewellers at Panna Naka, in front of Parmar
              Hospital, beside Jain Chhore Bhature. We welcome you for bridal
              shopping, festive jewellery, gifting, and classic daily-wear
              selections with personal assistance at every step.
            </p>
          </div>

          <div className="visit-card" id="contact">
            <p>Mon - Sun</p>
            <strong>10:30 AM - 8:30 PM</strong>
            <p>Owner: Hemant Soni</p>
            <p>
              Panna Naka, in front of Parmar Hospital, beside Jain Chhore
              Bhature
            </p>
            <a className="btn btn-solid full-width" href="tel:+919826237997">
              Call For Appointment
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer fade-rise delay-6">
        <div className="full-bleed-shell section-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <p className="section-kicker footer-kicker">New J.K. Jewellers</p>
              <h3>Trusted jewellery heritage since 1962.</h3>
              <p>
                A traditional jewellery destination at Panna Naka, known for
                elegant designs, reliable service, and a personal shopping
                experience guided by Hemant Soni.
              </p>
            </div>

            <div className="footer-contact">
              <h4>Contact</h4>
              <p>Owner: Hemant Soni</p>
              <p>
                Phone: <a href="tel:+919826237997">+91 98262 37997</a>
              </p>
              <p>
                Address: Panna Naka, in front of Parmar Hospital, beside Jain
                Chhore Bhature
              </p>
            </div>

            <div className="footer-map">
              <h4>Find Us</h4>
              <div className="map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.014553576269!2d79.5924215!3d24.897485200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398297e87ee859e1%3A0xb3bdde3c609c6bec!2sNew%20J.K%20Jewellers!5e0!3m2!1sen!2sin!4v1777094668292!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New J.K. Jewellers location map"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>New J.K. Jewellers, Panna Naka</p>
            <p>Royal craftsmanship, trusted service, and timeless jewellery.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
