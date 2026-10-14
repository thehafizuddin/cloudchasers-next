import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import ContactSection from "@/components/ContactSection";
import { SERVICES } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const svc = SERVICES.find((s) => s.slug === params.slug);
  if (!svc) return {};
  return {
    title: `${svc.title} - Cloud Chasers`,
    description: svc.blurb,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const svc = SERVICES.find((s) => s.slug === params.slug);
  if (!svc) notFound();

  const others = SERVICES.filter((s) => s.slug !== svc.slug);

  return (
    <>
      <Header />
      <main>
        <PageHead title={svc.title} crumb="Our Services" bg={svc.image} />

        <section className="cc-section">
          <div className="cc-container">
            <div className="cc-grid cc-grid--2" style={{ alignItems: "start" }}>
              <div>
                <span className="cc-eyebrow">Our Services</span>
                <h2>{svc.title}</h2>
                <p>{svc.blurb}</p>
                <p>
                  Our team of dedicated professionals brings expertise in manufacturing, product
                  design, testing, and consultation across various Nicotine Replacement Therapy
                  (NRT) products. Whether you&apos;re looking to launch a new brand, refine your
                  product line, or establish your own factory, our services are built to support
                  every stage of the process.
                </p>
                <ul className="cc-footer__list" style={{ marginTop: 20 }}>
                  {[
                    "End-to-end project support",
                    "30 days delivery upon confirmation of order",
                    "Lowest MOQ — from 5,000 bottles",
                    "Custom merchandise options (T&C apply)",
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
                  GET A QUOTE
                </Link>
              </div>
              <div>
                <Image
                  src={svc.image}
                  alt={svc.title}
                  width={600}
                  height={420}
                  style={{ borderRadius: 10, width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="cc-eyebrow">Explore</span>
              <h2>Other Services</h2>
            </div>
            <div className="cc-grid cc-grid--4">
              {others.map((o) => (
                <Link href={`/service/${o.slug}`} className="cc-card" key={o.slug}>
                  <Image
                    src={o.image}
                    alt={o.title}
                    width={600}
                    height={380}
                    style={{ width: "100%", height: 160, objectFit: "cover" }}
                  />
                  <div className="cc-card__body">
                    <h3 style={{ fontSize: 16, margin: 0 }}>{o.title}</h3>
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
