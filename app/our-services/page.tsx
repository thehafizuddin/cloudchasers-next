import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { QuoteBand } from "@/components/PageHead";
import ContactSection from "@/components/ContactSection";
import { SERVICES, PROJECTS, TESTIMONIAL, SUSTAINABILITY, IMG } from "@/lib/site";

export const metadata = {
  title: "Our Services | OEM Vape Manufacturing Solutions by Cloud Chasers",
  description:
    "Custom manufacturing equipment, automation calibration, end-to-end NRT product manufacturing, equipment upgrades and factory setup consultation.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHead title="Our Services" bg={IMG.engineering} />

        <section className="cc-section">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="cc-eyebrow">What We Do</span>
              <h2>End-to-End Vape Manufacturing Solutions</h2>
            </div>
            <div className="cc-grid cc-grid--3">
              {SERVICES.map((s) => (
                <Link href={`/service/${s.slug}`} className="cc-card" key={s.slug}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={600}
                    height={380}
                    style={{ width: "100%", height: 210, objectFit: "cover" }}
                  />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 20 }}>{s.title}</h3>
                    <p style={{ margin: 0, fontSize: 14 }}>{s.blurb}</p>
                    <span
                      style={{
                        color: "var(--cc-accent)",
                        fontWeight: 700,
                        fontSize: 13,
                        marginTop: 14,
                        display: "inline-block",
                      }}
                    >
                      READ MORE →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="cc-eyebrow">Responsible Manufacturing</span>
              <h2>{SUSTAINABILITY.title}</h2>
            </div>
            <div className="cc-grid cc-grid--3">
              {SUSTAINABILITY.items.map((s) => (
                <div className="cc-card" key={s.title}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={600}
                    height={380}
                    style={{ width: "100%", height: 200, objectFit: "cover" }}
                  />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 19 }}>{s.title}</h3>
                    <p style={{ margin: 0, fontSize: 14 }}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest projects */}
        <section className="cc-section">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="cc-eyebrow">Our Work</span>
              <h2>Our Latest Projects</h2>
            </div>
            <div className="cc-grid cc-grid--3">
              {PROJECTS.slice(0, 6).map((p) => (
                <Link href={`/lq-project/${p.slug}`} className="cc-card" key={p.slug}>
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={600}
                    height={600}
                    style={{ width: "100%", height: 250, objectFit: "cover" }}
                  />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 17, margin: 0 }}>{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="cc-section cc-section--alt">
          <div className="cc-container" style={{ textAlign: "center" }}>
            <span className="cc-eyebrow">Testimonials</span>
            <h2 style={{ marginBottom: 30 }}>What Our Clients Are Saying</h2>
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

        <QuoteBand />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
