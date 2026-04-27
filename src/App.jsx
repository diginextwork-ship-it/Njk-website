import React, { useEffect, useState } from "react";

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
    text: "Owner Mr. Hemant Soni and the team help customers choose pieces for bridal, festive, gifting, and daily wear.",
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

const traditionalImage = {
  src: "/traditional.jpeg",
  alt: "Traditional jewellery display from New J.K. Jewellers",
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
];

const trustBadges = [
  { icon: "◆", label: "BIS Hallmarked" },
  { icon: "✦", label: "IGI Certified Stones" },
  { icon: "III", label: "3rd Generation Family Business" },
  { icon: "1962", label: "Since 1962" },
  { icon: "❖", label: "Ethically Sourced" },
];

const timelineMilestones = [
  {
    year: "1962",
    title: "The House Begins",
    text: "New J.K. Jewellers opens its doors with a promise of honest guidance and enduring craftsmanship.",
  },
  {
    year: "1987",
    title: "A Family Name Grows",
    text: "Generations of families begin returning for bridal sets, heirloom gifting, and ceremonial gold.",
  },
  {
    year: "2001",
    title: "Craft And Curation",
    text: "The collection expands with richer bridal, festive, and traditional selections shaped by local taste.",
  },
  {
    year: "2014",
    title: "Trust Across Occasions",
    text: "The showroom becomes a familiar destination for weddings, anniversaries, and milestone purchases.",
  },
  {
    year: "2026",
    title: "Legacy Continues",
    text: "The brand carries its heritage forward with warm personal service and a timeless jewellery eye.",
  },
];

const craftSteps = [
  { icon: "✎", step: "01", label: "Sketch", text: "Design begins with proportion, motif, and occasion in mind." },
  { icon: "◌", step: "02", label: "Mould", text: "Foundations are shaped carefully for strength and precision." },
  { icon: "✦", step: "03", label: "Set", text: "Stones and details are placed with balance and restraint." },
  { icon: "✧", step: "04", label: "Polish", text: "Final finishing brings warmth, lustre, and heirloom presence." },
];

const testimonialItems = [];

const signatureCollections = [
  {
    title: "Kundan",
    text: "Ceremonial brilliance with regal detailing for grand occasions.",
  },
  {
    title: "Temple",
    text: "Heritage-inspired forms rooted in devotional and festive artistry.",
  },
  {
    title: "Bridal",
    text: "Statement sets selected for wedding-day richness and grace.",
  },
];

const pressMentions = [
  "Trusted Local House",
  "Bridal Favourite Since 1962",
  "Family Legacy Recognition",
  "Showroom Heritage Distinction",
  "Generations of Patronage",
];

const address =
  "Panna Naka, in front of Parmar Hospital, beside Jain Chhole Bhature.";
const mapUrl =
  "https://www.google.com/maps/place/New+J.K+Jewellers/@24.8974852,79.5924215,17z/data=!3m1!4b1!4m6!3m5!1s0x398297e87ee859e1:0xb3bdde3c609c6bec!8m2!3d24.8974852!4d79.5924215!16s%2Fg%2F11cmpf117k?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";

function getCurrentPage() {
  return window.location.hash.startsWith("#/about") ? "about" : "home";
}

function navigateTo(target) {
  window.location.hash = target;
}

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

function BrandLogo({ className = "brand-logo", alt = "NJK Jewellers logo" }) {
  return <img className={className} src="/njk_logo.svg" alt={alt} />;
}

function SectionDivider() {
  return (
    <div className="section-divider reveal-on-scroll" aria-hidden="true">
      <span />
      <b>◆</b>
      <span />
    </div>
  );
}

function TrustBadgesRow() {
  return (
    <section className="trust-badges reveal-on-scroll delay-2" aria-label="Trust signals">
      {trustBadges.map((badge, index) => (
        <article
          key={badge.label}
          className="trust-badge-card"
          style={{ "--reveal-delay": `${index * 90}ms` }}
        >
          <span className="trust-badge-icon" aria-hidden="true">
            {badge.icon}
          </span>
          <strong>{badge.label}</strong>
        </article>
      ))}
    </section>
  );
}

function HeritageTimelineSection() {
  return (
    <section className="heritage-timeline heritage-paper">
      <div className="timeline-heading reveal-on-scroll">
        <p className="section-kicker">Our Journey</p>
        <h3>Built over decades of trust, ceremony, and family milestones.</h3>
      </div>

      <div className="timeline-track" aria-label="Heritage timeline">
        {timelineMilestones.map((item, index) => (
          <article
            key={item.year}
            className={`timeline-node reveal-on-scroll${index % 2 ? " right" : " left"}`}
            style={{ "--reveal-delay": `${index * 120}ms` }}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CraftProcessStrip() {
  return (
    <section className="craft-strip reveal-on-scroll">
      <div className="craft-strip-heading">
        <p className="section-kicker">Craftsmanship</p>
        <h3>From first sketch to final polish.</h3>
      </div>

      <div className="craft-steps">
        {craftSteps.map((step, index) => (
          <React.Fragment key={step.step}>
            <article
              className="craft-step-card reveal-on-scroll"
              style={{ "--reveal-delay": `${index * 110}ms` }}
            >
              <span className="craft-step-icon" aria-hidden="true">
                {step.icon}
              </span>
              <span className="craft-step-number">{step.step}</span>
              <strong>{step.label}</strong>
              <p>{step.text}</p>
            </article>
            {index < craftSteps.length - 1 ? (
              <div className="craft-step-connector" aria-hidden="true" />
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-heading reveal-on-scroll">
        <p className="section-kicker">Words From Our Patrons</p>
        <h3>Trusted by families across generations.</h3>
      </div>

      <div className="testimonials-grid">
        {testimonialItems.map((item, index) => (
          <article
            key={item.name}
            className="testimonial-card reveal-on-scroll"
            style={{ "--reveal-delay": `${index * 110}ms` }}
          >
            <span className="testimonial-mark" aria-hidden="true">
              "
            </span>
            <p>{item.quote}</p>
            <div className="testimonial-stars" aria-label="5 star rating">
              ★★★★★
            </div>
            <strong>{item.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function GoogleReviewsSection() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-heading reveal-on-scroll">
        <p className="section-kicker">Words From Our Patrons</p>
        <h3>Trusted by families across generations.</h3>
      </div>

      <div className="reviews-widget-shell reveal-on-scroll">
        <div
          className="elfsight-app-efebd529-c950-4a90-8230-3591a206ec19"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}

function SignatureCollections() {
  return (
    <div className="signature-collections">
      <div className="signature-collections-heading reveal-on-scroll">
        <p className="section-kicker">Signature Collections</p>
        <h3>House signatures shaped for ceremony, heritage, and occasion.</h3>
      </div>

      <div className="nameplate-grid">
        {signatureCollections.map((item, index) => (
          <article
            key={item.title}
            className="nameplate-card reveal-on-scroll"
            style={{ "--reveal-delay": `${index * 120}ms` }}
          >
            <span className="nameplate-ornament" aria-hidden="true">
              ✦
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function FounderSpotlight() {
  return (
    <section className="founder-spotlight reveal-on-scroll">
      <div className="founder-portrait">
        <div className="founder-monogram">HS</div>
        <p>Family Steward</p>
      </div>

      <div className="founder-copy">
        <p className="section-kicker">Master Craftsman</p>
        <h3>Mr. Hemant Soni</h3>
        <p className="founder-role">Master Goldsmith - 3rd Generation</p>
        <p className="founder-bio">
          Mr. Hemant Soni continues a family legacy rooted in trust, measured taste,
          and personal guidance. His approach is not simply to present jewellery,
          but to help families choose pieces that suit the meaning of the
          occasion. With a close eye for classic silhouettes, bridal richness,
          and lasting value, he has helped preserve the welcoming character that
          defines New J.K. Jewellers.
        </p>
        <div className="founder-signature">Mr. Hemant Soni</div>
      </div>
    </section>
  );
}

function PressMentionsStrip() {
  return (
    <section className="press-strip">
      <div className="press-strip-heading reveal-on-scroll">
        <p className="section-kicker">Trusted Since 1962</p>
        <h3>As recognised by families, traditions, and local reputation.</h3>
      </div>

      <div className="press-grid">
        {pressMentions.map((item, index) => (
          <article
            key={item}
            className="press-card reveal-on-scroll"
            style={{ "--reveal-delay": `${index * 90}ms` }}
          >
            <span aria-hidden="true">🏅</span>
            <strong>{item}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function FloatingLocationButton({ onClick }) {
  return (
    <button
      type="button"
      className="floating-location-btn"
      aria-label="Show showroom details"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.8" />
      </svg>
    </button>
  );
}

function FloatingLocationCard({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="floating-location-card fade-rise" role="dialog" aria-label="Showroom details">
      <button
        type="button"
        className="floating-location-close"
        aria-label="Close showroom details"
        onClick={onClose}
      >
        ×
      </button>
      <p className="section-kicker">Showroom Details</p>
      <p className="floating-location-address">{address}</p>
      <a className="btn btn-solid full-width" href={mapUrl} target="_blank" rel="noreferrer">
        Open Maps
      </a>
    </div>
  );
}

function Header({ page, menuOpen, onMenuToggle, onNavigate }) {
  const collectionsHref = page === "about" ? "#/" : "#collections";
  const visitHref = page === "about" ? "#/" : "#visit";
  const contactHref = page === "about" ? "#/" : "#contact";

  return (
    <header className="topbar fade-rise">
      <div className="brand-lockup">
        <BrandLogo />
        <div>
          <p className="eyebrow">Since 1962</p>
          <h1>New J.K. Jewellers</h1>
        </div>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={onMenuToggle}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`topnav${menuOpen ? " is-open" : ""}`}>
        <a href={collectionsHref} onClick={() => onNavigate("home")}>
          Collections
        </a>
        <a href="#/about" onClick={() => onNavigate("about")}>
          About Us
        </a>
        <a href={visitHref} onClick={() => onNavigate("home")}>
          Visit Us
        </a>
        <a href={contactHref} onClick={() => onNavigate("home")}>
          Contact
        </a>
        {page === "about" ? (
          <a className="nav-pill" href="#/" onClick={() => onNavigate("home")}>
            Back Home
          </a>
        ) : null}
      </nav>
    </header>
  );
}

function LeadModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) {
    return null;
  }

  return (
    <div className="lead-modal-backdrop" role="presentation">
      <div
        className="lead-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
      >
        <button
          type="button"
          className="lead-modal-close"
          aria-label="Close form"
          onClick={onClose}
        >
          x
        </button>

        {submitted ? (
          <div className="lead-confirmation">
            <p className="section-kicker">Thank You</p>
            <h3 id="lead-modal-title">We will reach out shortly.</h3>
            <p>
              Your enquiry has been noted for New J.K. Jewellers. You can also
              call directly at <a href="tel:+919826237997">+91 98262 37997</a>.
            </p>
            <button type="button" className="btn btn-solid" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="section-kicker">Contact Us</p>
            <h3 id="lead-modal-title">Share your name and phone number.</h3>
            <p className="lead-modal-copy">
              We will help you plan your showroom visit or answer your enquiry.
            </p>
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </label>
              <button type="submit" className="btn btn-solid full-width">
                Request A Call
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-section fade-rise delay-6" id="contact">
      <div className="contact-copy">
        <p className="section-kicker">Contact Us</p>
        <h3>Tell us what you are looking for.</h3>
        <p>
          Share your name and phone number and our team will get back to you for
          bridal shopping, festive jewellery, gifting, or a showroom visit.
        </p>
      </div>

      <div className="contact-card">
        {submitted ? (
          <div className="contact-success">
            <strong>Thank you for your enquiry.</strong>
            <p>We have noted your details and will connect with you soon.</p>
          </div>
        ) : (
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                required
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us what kind of jewellery you want to see"
              />
            </label>
            <button type="submit" className="btn btn-solid full-width">
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="about-page-hero fade-rise delay-1">
        <div className="about-page-copy">
          <p className="section-kicker">About Us</p>
          <h2>A legacy of trust, tradition, and personal jewellery guidance.</h2>
          <p className="lead">
            New J.K. Jewellers has served families since 1962 with a showroom
            experience built on dependable service, classic taste, and warm
            personal attention under the guidance of Mr. Hemant Soni.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#visit">
              Visit The Showroom
            </a>
            <a className="btn btn-outline" href="tel:+919826237997">
              Call Now
            </a>
          </div>
        </div>

        <div className="about-page-visual story-image">
          <img
            src={storyImages[0].src}
            alt={storyImages[0].alt}
            className="media-image"
          />
          <div className="frame-copy">
            <p className="card-label">Trusted Since 1962</p>
            <strong>Elegant jewellery with a welcoming local touch</strong>
          </div>
        </div>
      </section>

      <section className="about-section fade-rise delay-2" id="about">
        <div className="about-orb" aria-hidden="true" />

        <div className="about-inner">
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

          <div className="about-right">
            <p className="section-kicker">About The House</p>
            <h3 className="about-heading">
              A Legacy Woven
              <br />
              <em>in Gold and Trust</em>
            </h3>

            <div className="about-divider">
              <span />
              <span className="divider-gem">◆</span>
              <span />
            </div>

            <p className="about-lead">
              New J.K. Jewellers is a long-standing jewellery showroom serving
              the local community since <strong>1962</strong>. Under the
              guidance of owner <strong>Mr. Hemant Soni</strong>, the showroom is
              known for a dependable approach, respectful service, and jewellery
              curated for everyday elegance and cherished family occasions
              alike.
            </p>
            <p className="about-body">
              Located at <strong>Panna Naka</strong>, in front of Parmar
              Hospital, beside Jain Chhole Bhature, the store is a familiar and
              trusted destination where customers explore necklaces, earrings,
              rings, bridal styles, festive sets, and timeless traditional
              pieces.
            </p>
            <div className="about-traditional-card story-image">
              <img
                src={traditionalImage.src}
                alt={traditionalImage.alt}
                className="media-image"
              />
              <div className="about-traditional-copy">
                <p className="card-label">Traditional Collection</p>
                <strong>Classic styles that reflect the store's heritage.</strong>
              </div>
            </div>
            <p className="about-body">
              Our aim is simple: to help every customer find jewellery that
              feels valuable, beautiful, and meaningful for years to come.
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
          </div>
        </div>
      </section>

      <section className="highlights fade-rise delay-3">
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

      <SectionDivider />
      <FounderSpotlight />
      <SectionDivider />
      <PressMentionsStrip />

      <section className="visit-section fade-rise delay-4" id="visit">
        <div className="visit-copy">
          <p className="section-kicker">Showroom Details</p>
          <h3>Come experience the collection in person.</h3>
          <p>
            Visit New J.K. Jewellers at {address} We welcome you for bridal
            shopping, festive jewellery, gifting, and classic daily-wear
            selections with personal assistance at every step.
          </p>
        </div>

        <div className="visit-card">
          <p>Mon - Sun</p>
          <strong>10:30 AM - 8:30 PM</strong>
          <p>Owner: Mr. Hemant Soni</p>
          <p>{address}</p>
          <a className="btn btn-solid full-width" href="tel:+919826237997">
            Call For Appointment
          </a>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero-intro fade-rise delay-1">
        <div className="hero-copy">
          <p className="section-kicker">Timeless Craft, Heirloom Detail</p>
          <h2>Jewellery chosen with trust, tradition, and royal elegance.</h2>
          <p className="lead">
            New J.K. Jewellers has been serving customers since 1962 with
            carefully selected bridal, festive, traditional, and everyday
            jewellery pieces in a welcoming showroom experience led by owner
            Mr. Hemant Soni.
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
            <a className="btn btn-outline" href="#/about">
              About Us
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
        </div>
      </section>

      <TrustBadgesRow />
      <SectionDivider />
      <HeritageTimelineSection />
      <SectionDivider />
      <CraftProcessStrip />
      <SectionDivider />

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
            <article key={item.title} className={`showcase-tile tile-${index + 1}`}>
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

      <SectionDivider />

      <section className="gallery-section fade-rise delay-3" id="gallery">
        <div className="gallery-section-header">
          <p className="section-kicker">Catalogue Highlights</p>
          <h3 className="gallery-section-title">
            Signature Pieces from
            <br />
            <em>the Showroom Collection</em>
          </h3>
          <p className="gallery-section-sub">
            A curated mix of bridal sets, festive designs, and elegant accents
            with a more balanced presentation for every piece.
          </p>
        </div>

        <div className="gallery-masonry">
          {galleryItems.map((item, index) => (
            <article key={item.src} className="gallery-tile">
              <div className="gallery-tile-img-wrap">
                <img src={item.src} alt={item.alt} className="gallery-tile-img" />
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

      <SectionDivider />

      <section className="marquee-hero fade-rise delay-4" id="collections">
        <div className="full-bleed-shell">
          <div className="section-inner">
            <SignatureCollections />
          </div>
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

      <SectionDivider />
      <GoogleReviewsSection />
      <SectionDivider />

      <section className="highlights fade-rise delay-5">
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
            Visit New J.K. Jewellers at {address} We welcome you for bridal
            shopping, festive jewellery, gifting, and classic daily-wear
            selections with personal assistance at every step.
          </p>
        </div>

        <div className="visit-card">
          <p>Mon - Sun</p>
          <strong>10:30 AM - 8:30 PM</strong>
          <p>Owner: Mr. Hemant Soni</p>
          <p>{address}</p>
          <a
            className="btn btn-outline full-width"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Click Here
          </a>
          <a className="btn btn-solid full-width" href="tel:+919826237997">
            Call For Appointment
          </a>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer fade-rise delay-6">
      <div className="full-bleed-shell section-inner">
        <div className="footer-seal-wrap">
          <div className="footer-seal">
            <svg viewBox="0 0 220 220" aria-hidden="true">
              <defs>
                <path
                  id="seal-circle"
                  d="M110,110 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                />
              </defs>
              <circle cx="110" cy="110" r="98" className="seal-outer" />
              <circle cx="110" cy="110" r="78" className="seal-inner" />
              <text className="seal-text">
                <textPath href="#seal-circle" startOffset="50%" textAnchor="middle">
                  NEW J.K. JEWELLERS • HERITAGE HOUSE •
                </textPath>
              </text>
              <text x="110" y="100" textAnchor="middle" className="seal-year">
                1962
              </text>
              <text x="110" y="130" textAnchor="middle" className="seal-word">
                TRUST
              </text>
            </svg>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <BrandLogo className="footer-logo" />
            <p className="section-kicker footer-kicker">New J.K. Jewellers</p>
            <h3>Trusted jewellery heritage since 1962.</h3>
            <p>
              A traditional jewellery destination at Panna Naka, known for
              elegant designs, reliable service, and a personal shopping
              experience guided by Mr. Hemant Soni.
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Owner: Mr. Hemant Soni</p>
            <p>
              Phone: <a href="tel:+919826237997">+91 98262 37997</a>
            </p>
            <p>Address: {address}</p>
          </div>

          <div className="footer-map">
            <h4>Find Us</h4>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps?q=New%20J.K.%20Jewellers%2C%20Panna%20Naka%2C%20Chhatarpur%2C%20Madhya%20Pradesh&z=16&output=embed"
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
  );
}

function App() {
  const [page, setPage] = useState(getCurrentPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(true);
  const [locationCardOpen, setLocationCardOpen] = useState(false);

  useEffect(() => {
    const syncPage = () => {
      setPage(getCurrentPage());
      setMenuOpen(false);
    };

    window.addEventListener("hashchange", syncPage);

    if (!window.location.hash) {
      navigateTo("#/");
    }

    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal-on-scroll");

    if (!nodes.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [page]);

  const handleNavigate = (targetPage) => {
    setMenuOpen(false);
    setLocationCardOpen(false);

    if (targetPage === "about") {
      navigateTo("#/about");
      return;
    }

    if (window.location.hash.startsWith("#/about")) {
      navigateTo("#/");
    }
  };

  const handleLocationClick = () => {
    setLocationCardOpen((current) => !current);
  };

  return (
    <div className="page-shell">
      <Header
        page={page}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
        onNavigate={handleNavigate}
      />

      <LeadModal open={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
      <FloatingLocationButton onClick={handleLocationClick} />
      <FloatingLocationCard
        open={locationCardOpen}
        onClose={() => setLocationCardOpen(false)}
      />

      {page === "about" ? <AboutPage /> : <HomePage />}
      <Footer />
    </div>
  );
}

export default App;
