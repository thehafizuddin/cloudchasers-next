import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import ContactSection from "@/components/ContactSection";
import { SITE, IMG } from "@/lib/site";

export const metadata = {
  title: "Contact Cloud Chasers | OEM Vape Manufacturing Experts",
  description:
    "Get in touch with Cloud Chasers — Shah Alam, Selangor. OEM vape manufacturing, NRT product development and factory setup consultation.",
};

export default function GetInTouchPage() {
  return (
    <>
      <Header />
      <main>
        <PageHead title="Get In Touch" crumb="Get In Touch" bg={IMG.branding} />

        <ContactSection compact />

        {/* Locations */}
        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="cc-eyebrow">Our Locations</span>
              <h2>Visit Our HQ Office</h2>
            </div>
            <div className="cc-grid cc-grid--2" style={{ alignItems: "center" }}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--cc-line)",
                  borderRadius: 10,
                  padding: 30,
                }}
              >
                <h3 style={{ fontSize: 19 }}>HQ Office</h3>
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
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cc-btn"
                  style={{ marginTop: 10 }}
                >
                  OPEN IN GOOGLE MAPS
                </a>
              </div>
              <div>
                <Image
                  src={IMG.sidebarMap}
                  alt="Cloud Chasers HQ map"
                  width={600}
                  height={420}
                  style={{ borderRadius: 10, width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
