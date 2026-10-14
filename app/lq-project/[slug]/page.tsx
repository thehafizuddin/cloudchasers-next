import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import ContactSection from "@/components/ContactSection";
import { PROJECTS } from "@/lib/site";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const proj = PROJECTS.find((p) => p.slug === params.slug);
  if (!proj) return {};
  return { title: `${proj.title} - Cloud Chasers` };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const proj = PROJECTS.find((p) => p.slug === params.slug);
  if (!proj) notFound();

  const others = PROJECTS.filter((p) => p.slug !== proj.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <PageHead title={proj.title} crumb="Our Latest Projects" bg={proj.image} />

        <section className="cc-section">
          <div className="cc-container">
            <div className="cc-grid cc-grid--2" style={{ alignItems: "start" }}>
              <div>
                <Image
                  src={proj.image}
                  alt={proj.alt}
                  width={700}
                  height={700}
                  style={{ borderRadius: 10, width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <span className="cc-eyebrow">Project</span>
                <h2>{proj.title}</h2>
                <p>
                  Cloud Chasers delivered full end-to-end manufacturing support for this project —
                  covering supply chain, product development, manufacturing, packaging, compliance
                  and R&amp;D.
                </p>
                <ul className="cc-footer__list">
                  {[
                    "Supply chain integration",
                    "Product development & testing",
                    "Manufacturing & packaging",
                    "Compliance and R&D",
                  ].map((t) => (
                    <li key={t}>
                      <span
                        className="material-symbols-rounded"
                        style={{ color: "var(--cc-accent)", fontSize: 19 }}
                      >
                        check_circle
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/get-in-touch" className="cc-btn" style={{ marginTop: 12 }}>
                  START YOUR PROJECT
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="cc-eyebrow">More Work</span>
              <h2>Other Projects</h2>
            </div>
            <div className="cc-grid cc-grid--3">
              {others.map((o) => (
                <Link href={`/lq-project/${o.slug}`} className="cc-card" key={o.slug}>
                  <Image
                    src={o.image}
                    alt={o.alt}
                    width={600}
                    height={600}
                    style={{ width: "100%", height: 230, objectFit: "cover" }}
                  />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 17, margin: 0 }}>{o.title}</h3>
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
