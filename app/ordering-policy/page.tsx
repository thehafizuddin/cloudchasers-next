import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import ContactSection from "@/components/ContactSection";
import { IMG } from "@/lib/site";

export const metadata = {
  title: "Ordering Policy | Cloud Chasers OEM Vape Manufacturing",
  description:
    "Cloud Chasers ordering policy — MOQ, lead times, payment terms, customization and delivery process for OEM vape manufacturing.",
};

const POLICIES = [
  {
    icon: "shopping_cart",
    title: "Minimum Order Quantity",
    text: "Our lowest MOQ starts from 5,000 bottles, letting new brands launch with lower risk. Higher volumes unlock better unit pricing.",
  },
  {
    icon: "schedule",
    title: "Lead Time & Delivery",
    text: "Standard lead time is 30 days upon confirmation of order. Timelines are confirmed in writing before production begins.",
  },
  {
    icon: "payments",
    title: "Payment Terms",
    text: "Payment terms are agreed per project. A deposit is required to lock production slots; the balance is due before shipment.",
  },
  {
    icon: "palette",
    title: "Customization",
    text: "Custom merchandise options are available (T&C apply) — flavours, packaging, branding and hardware configuration.",
  },
  {
    icon: "description",
    title: "Quotation & Specs",
    text: "Every order begins with a written quotation covering specifications, quantities, pricing and delivery schedule.",
  },
  {
    icon: "fact_check",
    title: "Quality Control",
    text: "Each batch passes staged QC before packing. Compliance documentation is provided with every shipment.",
  },
  {
    icon: "local_shipping",
    title: "Shipping",
    text: "We ship worldwide through vetted logistics partners, with tracking and secure packaging for every consignment.",
  },
  {
    icon: "support_agent",
    title: "After-Sales Support",
    text: "Dedicated account support covers reorders, formulation adjustments and troubleshooting after delivery.",
  },
];

export default function OrderingPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHead title="Ordering Policy" crumb="Ordering Policy" bg={IMG.packing} />

        <section className="cc-section">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="cc-eyebrow">How We Work</span>
              <h2>Ordering Policy</h2>
              <p style={{ maxWidth: 720, margin: "0 auto" }}>
                Clear, predictable terms so you can plan production with confidence — from first
                quotation through to delivery.
              </p>
            </div>

            <div className="cc-grid cc-grid--2">
              {POLICIES.map((p) => (
                <div
                  key={p.title}
                  style={{
                    display: "flex",
                    gap: 18,
                    padding: 26,
                    background: "#fff",
                    border: "1px solid var(--cc-line)",
                    borderRadius: 10,
                  }}
                >
                  <span
                    className="material-symbols-rounded"
                    style={{ fontSize: 32, color: "var(--cc-accent)", flexShrink: 0 }}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <h3 style={{ fontSize: 18, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ margin: 0, fontSize: 14 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cc-section cc-section--alt">
          <div className="cc-container">
            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <span className="cc-eyebrow">At A Glance</span>
              <h2>Key Terms Summary</h2>
            </div>
            <div style={{ overflowX: "auto", background: "#fff", borderRadius: 10, border: "1px solid var(--cc-line)" }}>
              <table className="cc-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Minimum Order</strong></td><td>From 5,000 bottles</td></tr>
                  <tr><td><strong>Lead Time</strong></td><td>30 days upon confirmation of order</td></tr>
                  <tr><td><strong>Custom Merchandise</strong></td><td>Available (T&amp;C apply)</td></tr>
                  <tr><td><strong>Quotation</strong></td><td>Written, per project specification</td></tr>
                  <tr><td><strong>Quality Control</strong></td><td>Staged QC on every batch</td></tr>
                  <tr><td><strong>Shipping</strong></td><td>Worldwide, tracked and securely packed</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
