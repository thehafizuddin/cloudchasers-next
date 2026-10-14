import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import ContactSection from "@/components/ContactSection";
import { PROJECTS, IMG } from "@/lib/site";

export const metadata = {
  title: "Our Latest Projects | Innovative OEM Vape Manufacturing",
  description:
    "Explore Cloud Chasers' latest OEM vape manufacturing projects — SMISS, CBD Farm, Zgar NEO13000, Zgar IB8000 and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHead title="Our Latest Projects" crumb="Our Latest Projects" bg={IMG.img6831} />

        <section className="cc-section">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="cc-eyebrow">Our Work</span>
              <h2>Projects</h2>
              <p style={{ maxWidth: 780, margin: "0 auto" }}>
                All aspects of vape production, including supply chain, product development,
                manufacturing, packaging, compliance, R&amp;D, and innovation, are seamlessly
                integrated to provide a complete, end-to-end vape manufacturing solution.
              </p>
            </div>
            <div className="cc-grid cc-grid--3">
              {PROJECTS.map((p) => (
                <Link href={`/lq-project/${p.slug}`} className="cc-card" key={p.slug}>
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={600}
                    height={600}
                    style={{ width: "100%", height: 260, objectFit: "cover" }}
                  />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 17, margin: 0 }}>{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
