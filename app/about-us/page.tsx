import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { QuoteBand } from "@/components/PageHead";
import ContactSection from "@/components/ContactSection";
import { ABOUT, IMG, WHY_US, SITE } from "@/lib/site";

export const metadata = {
  title: "About Cloud Chasers | Your Trusted OEM Vape Manufacturing Partner",
  description:
    "Cloud Chasers, established in 2014 in Shah Alam, Malaysia — a leading OEM vape manufacturing and machinery engineering partner for global brands.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHead title="About Us" bg={IMG.engineering} />

        <section className="cc-section">
          <div className="cc-container">
            <div className="cc-grid cc-grid--2" style={{ alignItems: "center" }}>
              <div>
                <span className="cc-eyebrow">Who We Are</span>
                <h2>Your Trusted Vape Manufacturing Partner</h2>
                <p>{ABOUT.intro}</p>
                <p>{ABOUT.body}</p>
                <Link href="/our-services" className="cc-btn cc-btn--ghost">
                  OUR SERVICES
                </Link>
              </div>
              <div>
                <Image
                  src={IMG.img5753}
                  alt="Cloud Chasers manufacturing floor"
                  width={570}
                  height={440}
                  style={{ borderRadius: 10, width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CEO */}
        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div className="cc-grid cc-grid--2" style={{ alignItems: "center" }}>
              <div>
                <Image
                  src={IMG.ceo}
                  alt={ABOUT.ceoName}
                  width={420}
                  height={520}
                  style={{ borderRadius: 10, width: "100%", maxWidth: 420, height: "auto" }}
                />
              </div>
              <div>
                <span className="cc-eyebrow">Leadership</span>
                <h2>{ABOUT.ceoName}</h2>
                <p style={{ fontWeight: 600, color: "var(--cc-ink)" }}>{ABOUT.ceoRole}</p>
                <p>
                  Under his leadership, Cloud Chasers has grown into a trusted manufacturing partner
                  for renowned global brands — combining precision engineering with dependable,
                  large-scale production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section className="cc-section">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="cc-eyebrow">Capabilities</span>
              <h2>We Offer High-Quality Vape Manufacturing &amp; Engineering Worldwide</h2>
            </div>
            <div className="cc-grid cc-grid--4">
              {WHY_US.map((w) => (
                <div className="cc-card" key={w.title}>
                  <div className="cc-card__body">
                    <span
                      className="material-symbols-rounded"
                      style={{ fontSize: 34, color: "var(--cc-accent)" }}
                    >
                      verified
                    </span>
                    <h3 style={{ fontSize: 16, marginTop: 14 }}>{w.title}</h3>
                    <p style={{ margin: 0, fontSize: 14 }}>{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div className="cc-grid cc-grid--2" style={{ alignItems: "center" }}>
              <div>
                <span className="cc-eyebrow">Our Location</span>
                <h2>HQ Office</h2>
                <p>{SITE.address}</p>
                <ul className="cc-footer__list">
                  <li>
                    <span className="material-symbols-rounded" style={{ color: "var(--cc-accent)" }}>
                      call
                    </span>
                    <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
                  </li>
                  <li>
                    <span className="material-symbols-rounded" style={{ color: "var(--cc-accent)" }}>
                      mail
                    </span>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </li>
                  <li>
                    <span className="material-symbols-rounded" style={{ color: "var(--cc-accent)" }}>
                      public
                    </span>
                    <a href="https://cloud-chasers.cc">{SITE.website}</a>
                  </li>
                </ul>
                <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="cc-btn">
                  VIEW ON MAP
                </a>
              </div>
              <div>
                <Image
                  src={IMG.sidebarMap}
                  alt="Cloud Chasers HQ location map"
                  width={600}
                  height={420}
                  style={{ borderRadius: 10, width: "100%", height: "auto" }}
                />
              </div>
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
