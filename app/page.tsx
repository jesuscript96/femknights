import Target from "./components/Target";
import Reveal from "./components/Reveal";
import DianaMenu from "./components/DianaMenu";

const HERO_FEATURES = [
  {
    title: "We are visual strategists at heart",
    body: "Your mission, vision and positioning are the foundation on which we build. Together we work on a logical translation of purpose, from content, into a powerful visual statement. A conceptual visual core that can drive change.",
    tag: "Strategy",
  },
  {
    title: "Get empowered by design",
    body: "Strategy becomes tangible through design. Recognisable, distinctive and meaningful, it stands the test of time. We work from personal involvement, the most important ingredient in collaborating successfully. Connecting your vision with our creativity in a way that we have developed based on 30 years of experience.",
    tag: "Visual Identity",
  },
];

const SERVICES = [
  {
    name: "online",
    rings: 1,
    filledCenter: false,
    body: "We work online first, mobile first and motion first. We ensure a cohesive brand experience that pops out of all screens, platforms and media.",
    tags: [
      "Digital Design (UX/UI)",
      "Web Development",
      "Motion Design",
      "Social Media Graphics",
      "Digital Advertising",
      "Tracking & Analytics",
    ],
  },
  {
    name: "offline",
    rings: 2,
    filledCenter: true,
    body: "You want print to add attention value. We have a special antenna for posters, books, merchandise and all those tangible projects.",
    tags: [
      "Posters & Print",
      "Book & Editorial Design",
      "Packaging Design",
      "Merchandise & Apparel Design",
      "Outdoor Advertising",
    ],
  },
  {
    name: "on-site",
    rings: 3,
    filledCenter: true,
    body: "Transform your physical space into an extension of your brand's story. We specialise in supergraphics, immersive installations, architectural designs and wayfinding.",
    tags: [
      "Environmental & Spatial Design",
      "Supergraphics",
      "Exhibition Design",
      "Wayfinding",
      "Signage",
    ],
  },
];

const CLIENTS = [
  "Centraal Museum",
  "Socialist Party",
  "Hyundai Card",
  "Frans Hals Museum",
  "Amsterdam Sinfonietta",
  "Droog Design",
  "Het Nieuwe Instituut",
  "Dutch Design Week",
];

const STEPS = [
  {
    num: "01",
    title: "Listen",
    body: "We dive into your mission, vision and positioning to uncover the conceptual core of your brand.",
  },
  {
    num: "02",
    title: "Concept",
    body: "We translate purpose into a powerful, deceptively simple visual idea that can drive change.",
  },
  {
    num: "03",
    title: "Design",
    body: "We craft a recognisable, distinctive and meaningful system built to stand the test of time.",
  },
  {
    num: "04",
    title: "Activate",
    body: "We roll it out across online, offline and on-site — one coherent voice, everywhere.",
  },
];

function TargetBadge() {
  return (
    <div className="target-divider" aria-hidden="true">
      <div className="target-badge">
        <Target rings={3} size={44} filledCenter strokeRatio={0.55} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <header className="site-header">
        <div className="container">
          <a className="logo" href="#top">
            thonik <span className="dim">about</span>
          </a>
          <nav className="nav">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#studio">Studio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="section container hero">
          <Reveal as="h1" className="hero-title">
            Strategy, design, impact
          </Reveal>

          <div className="feature-list">
            {HERO_FEATURES.map((f, i) => (
              <Reveal key={f.title} className="feature" delay={i * 90}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <div className="chips">
                  <span className="chip">{f.tag}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Expression ---------- */}
        <section className="section container expression">
          <Reveal className="lead-block">
            <h2>Recognised by the power of expression</h2>
            <p>
              Our designs are deceptively simple and therefore extremely
              versatile. They translate well into corporate identity expressions
              and have everything it takes to carry a campaign. The campaigns we
              develop for you are based on smart tactical choices and brought to
              life by the power of expression.
            </p>
            <div className="chips">
              <span className="chip">Campaigns</span>
            </div>
          </Reveal>

          <Reveal className="image-grid">
            <figure className="media">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80"
                alt="Studio library full of design books"
                loading="lazy"
              />
            </figure>
            <figure className="media">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                alt="Designer at work in the studio"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </section>

        <TargetBadge />

        {/* ---------- Quote ---------- */}
        <section className="section container quote">
          <Reveal as="blockquote">
            “From politics to culture to business, Dutch studio Thonik strikes a
            balance between adventurous concepts and pragmatic resolutions.”
          </Reveal>
          <Reveal as="cite" delay={120}>
            Eye Magazine
          </Reveal>
        </section>

        <TargetBadge />

        {/* ---------- Services ---------- */}
        <section id="services" className="services container">
          {SERVICES.map((s) => (
            <div key={s.name} className="service-row">
              <Reveal className="service-visual">
                <Target
                  rings={s.rings}
                  filledCenter={s.filledCenter}
                  size={360}
                  strokeRatio={0.5}
                />
              </Reveal>
              <Reveal className="service-content" delay={90}>
                <h2>{s.name}</h2>
                <p>{s.body}</p>
                <div className="chips">
                  {s.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </section>

        <TargetBadge />

        {/* ---------- Location / Studio ---------- */}
        <section id="studio" className="section container location">
          <Reveal as="h2">Based in Amsterdam, working worldwide</Reveal>
          <Reveal className="image-grid">
            <figure className="media">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Modern architecture in Amsterdam"
                loading="lazy"
              />
            </figure>
            <figure className="media">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                alt="Design studio team at work"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </section>

        {/* ---------- Clients (nueva sección) ---------- */}
        <section id="work" className="section container clients">
          <Reveal as="h2">
            Trusted by cultural, political and business icons
          </Reveal>
          <Reveal className="client-grid">
            {CLIENTS.map((c) => (
              <div className="client-cell" key={c}>
                {c}
              </div>
            ))}
          </Reveal>
        </section>

        <TargetBadge />

        {/* ---------- Process (nueva sección) ---------- */}
        <section className="section container process">
          <Reveal as="h2">How we turn purpose into impact</Reveal>
          <Reveal className="steps">
            {STEPS.map((step) => (
              <div className="step" key={step.num}>
                <div className="num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ---------- Contact / Footer (nueva sección) ---------- */}
        <footer id="contact" className="contact">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Get in touch</p>
              <h2>Let&rsquo;s make impact together.</h2>
              <a className="contact-mail" href="mailto:hello@thonik.nl">
                hello@thonik.nl
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Reveal>

            <div className="footer-bottom">
              <span>© {2026} thonik — Weesperzijde 79, Amsterdam</span>
              <div className="footer-links">
                <a href="#top">Instagram</a>
                <a href="#top">LinkedIn</a>
                <a href="#top">Behance</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Menú diana sticky flotante */}
      <DianaMenu />
    </>
  );
}
