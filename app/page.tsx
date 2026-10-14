import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, IMG, SERVICES, PROJECTS, WHY_US, TESTIMONIAL, SUSTAINABILITY } from "@/lib/site";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ================= HERO ================= */}
        <section className="cc-hero">
          <div className="cc-hero__bg">
            <Image src={IMG.pexelsJiawei} alt="" fill priority style={{ objectFit: "cover" }} />
          </div>
          <div className="cc-container">
            <div className="cc-hero__inner">
              <span className="cc-eyebrow" style={{ color: "#e8a0a6" }}>
                OEM Vape Manufacturing
              </span>
              <h1>Your Expert Solutions for Vape Product Development &amp; Manufacturing</h1>
              <p>
                Our team of dedicated professionals brings expertise in manufacturing, product
                design, testing, and consultation across various Nicotine Replacement Therapy (NRT)
                products. Whether you&apos;re looking to launch a new brand, refine your product
                line, or establish your own factory, we provide end-to-end support.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
                <Link href="/get-in-touch" className="cc-btn">
                  GET A QUOTE
                </Link>
                <Link href="/our-services" className="cc-btn cc-btn--light">
                  OUR SERVICES
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO + MISSION ================= */}
        <section className="cc-section">
          <div className="cc-container">
            <div className="cc-grid cc-grid--2" style={{ alignItems: "center" }}>
              <div>
                <span className="cc-eyebrow">Who We Are</span>
                <h2>We offer high-quality vape manufacturing solutions</h2>
                <p>{SITE.intro}</p>
                <p>
                  Established in 2014 and based in Shah Alam, Malaysia — a leading provider of
                  manufacturing and production solutions specialising in the vape industry and
                  machinery engineering.
                </p>
                <Link href="/about-us" className="cc-btn cc-btn--ghost">
                  LEARN MORE
                </Link>
              </div>
              <div style={{ position: "relative", minHeight: 340 }}>
                <Image
                  src={IMG.img6831}
                  alt="Cloud Chasers production facility"
                  width={570}
                  height={440}
                  style={{ borderRadius: 10, width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= MISSION / VISION / COMMITMENT ================= */}
        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 46 }}>
              <span className="cc-eyebrow">Our Mission</span>
              <h2>Local &amp; Global Expansions</h2>
              <p style={{ maxWidth: 700, margin: "0 auto" }}>{SITE.intro}</p>
            </div>
            <div className="cc-grid cc-grid--3">
              {[
                { t: "Our Mission", img: IMG.ourMission, d: "To deliver dependable, high-volume manufacturing that helps brands scale without compromise on quality." },
                { t: "Our Vision", img: IMG.ourVision, d: "To be the region's most trusted OEM manufacturing partner for NRT and vape products." },
                { t: "Our Commitment", img: IMG.ourCommitment, d: "Advanced systems, ethical practices and skilled professionals behind every product we make." },
              ].map((m) => (
                <div className="cc-card" key={m.t}>
                  <Image src={m.img} alt={m.t} width={600} height={420} style={{ width: "100%", height: 220, objectFit: "cover" }} />
                  <div className="cc-card__body">
                    <h3>{m.t}</h3>
                    <p style={{ margin: 0 }}>{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="cc-section">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 46 }}>
              <span className="cc-eyebrow">What We Do</span>
              <h2>Our Services</h2>
            </div>
            <div className="cc-grid cc-grid--3">
              {SERVICES.map((s) => (
                <Link href={`/service/${s.slug}`} className="cc-card" key={s.slug}>
                  <Image src={s.image} alt={s.title} width={600} height={380} style={{ width: "100%", height: 210, objectFit: "cover" }} />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 20 }}>{s.title}</h3>
                    <p style={{ margin: 0, fontSize: 14 }}>{s.blurb}</p>
                    <span style={{ color: "var(--cc-accent)", fontWeight: 700, fontSize: 13, marginTop: 14, display: "inline-block" }}>
                      READ MORE →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="cc-section cc-section--dark">
          <div className="cc-container">
            <div className="cc-grid cc-grid--2" style={{ alignItems: "center" }}>
              <div>
                <span className="cc-eyebrow" style={{ color: "#e8a0a6" }}>
                  Why Choose Us?
                </span>
                <h2 style={{ color: "#fff" }}>We offer Premium Quality Vape Manufacturing</h2>
                <p style={{ color: "rgba(240,246,252,.8)" }}>
                  Our expertise and innovation drive high-quality vape manufacturing. By investing in
                  advanced systems, ethical practices, and skilled professionals, we ensure
                  excellence, efficiency, and reliability in every product we create.
                </p>
                <Link href="/about-us" className="cc-btn cc-btn--light">
                  LEARN MORE
                </Link>
              </div>
              <div className="cc-grid cc-grid--2" style={{ gap: 18 }}>
                {WHY_US.map((w) => (
                  <div
                    key={w.title}
                    style={{
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.12)",
                      borderRadius: 10,
                      padding: 20,
                    }}
                  >
                    <h4 style={{ color: "#fff", fontSize: 15, marginBottom: 8 }}>{w.title}</h4>
                    <p style={{ margin: 0, fontSize: 13, color: "rgba(240,246,252,.72)" }}>{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATISTICS ================= */}
        <section className="cc-section">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h3>STATISTICS OF GROWTH IN THE PAST 2 YEARS:</h3>
            </div>
            <div className="cc-stats">
              {[
                { n: "12+", l: "Succeeded Projects" },
                { n: "30+", l: "Brands" },
                { n: "5000", l: "Lowest MOQ (bottles)" },
                { n: "30", l: "Days Delivery" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="cc-stat__num">{s.n}</div>
                  <div className="cc-stat__label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIAL ================= */}
        <section className="cc-section cc-section--alt">
          <div className="cc-container" style={{ textAlign: "center" }}>
            <span className="cc-eyebrow">What Our Clients Are Saying</span>
            <h2 style={{ marginBottom: 30 }}>Testimonials</h2>
            <div
              style={{
                maxWidth: 780,
                margin: "0 auto",
                background: "#fff",
                border: "1px solid var(--cc-line)",
                borderRadius: 10,
                padding: 40,
              }}
            >
              <div style={{ color: "#f5a623", fontSize: 20, marginBottom: 14 }}>★★★★★</div>
              <h3 style={{ fontSize: 19 }}>{TESTIMONIAL.author}</h3>
              <h4 style={{ color: "var(--cc-accent)", fontSize: 16 }}>{TESTIMONIAL.headline}</h4>
              <p style={{ fontStyle: "italic", margin: 0 }}>&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
            </div>
          </div>
        </section>

        {/* ================= SUSTAINABILITY ================= */}
        <section className="cc-section">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="cc-eyebrow">Outline Your World In A Whole New Way</span>
              <h2>{SUSTAINABILITY.title}</h2>
            </div>
            <div className="cc-grid cc-grid--3">
              {SUSTAINABILITY.items.map((s) => (
                <div className="cc-card" key={s.title}>
                  <Image src={s.image} alt={s.title} width={600} height={380} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 19 }}>{s.title}</h3>
                    <p style={{ margin: 0, fontSize: 14 }}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LATEST PROJECTS ================= */}
        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="cc-eyebrow">Our Work</span>
              <h2>Our Latest Projects</h2>
              <p style={{ maxWidth: 780, margin: "0 auto" }}>
                All aspects of vape production, including supply chain, product development,
                manufacturing, packaging, compliance, R&amp;D, and innovation, are seamlessly
                integrated to provide a complete, end-to-end vape manufacturing solution.
              </p>
            </div>
            <div className="cc-grid cc-grid--3">
              {PROJECTS.map((p) => (
                <Link href={`/lq-project/${p.slug}`} className="cc-card" key={p.slug}>
                  <Image src={p.image} alt={p.alt} width={600} height={600} style={{ width: "100%", height: 250, objectFit: "cover" }} />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 17, margin: 0 }}>{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link href="/our-latest-projects" className="cc-btn cc-btn--ghost">
                VIEW ALL PROJECTS
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
