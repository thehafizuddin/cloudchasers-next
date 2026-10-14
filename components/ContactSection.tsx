"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Front-end contact form. On the original WordPress site this posted to
 * Contact Form 7 / Formidable. This is a client-side replica: it validates and
 * gives feedback, but has no backend — wire it to an API route / Formspree /
 * Resend when the site goes live.
 */
export default function ContactSection({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "Inquiry 1",
    message: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend in the static build — show confirmation only.
    setSent(true);
  };

  return (
    <section className={`cc-section ${compact ? "" : "cc-section--alt"}`} id="contact">
      <div className="cc-container">
        <div className="cc-grid cc-grid--2" style={{ alignItems: "start" }}>
          <div>
            <span className="cc-eyebrow">Get In Touch</span>
            <h2>Fill all information details to consult with us</h2>
            <p>Fill all information details to consult with us to get services from us.</p>

            <ul className="cc-footer__list" style={{ marginTop: 26 }}>
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
                  location_on
                </span>
                <span>{SITE.address}</span>
              </li>
              <li>
                <span className="material-symbols-rounded" style={{ color: "var(--cc-accent)" }}>
                  schedule
                </span>
                <span>Mon – Fri: 9:00 – 18:00</span>
              </li>
            </ul>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid var(--cc-line)",
              borderRadius: 10,
              padding: 30,
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "30px 0" }}>
                <span
                  className="material-symbols-rounded"
                  style={{ fontSize: 52, color: "#1a7f37" }}
                >
                  check_circle
                </span>
                <h3 style={{ marginTop: 14 }}>Thank you!</h3>
                <p style={{ margin: 0 }}>
                  Your enquiry has been recorded. We&apos;ll get back to you shortly.
                </p>
                <button
                  type="button"
                  className="cc-btn cc-btn--ghost"
                  style={{ marginTop: 20 }}
                  onClick={() => setSent(false)}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="cc-field">
                  <label className="cc-label" htmlFor="cc-name">
                    YOUR NAME *
                  </label>
                  <input
                    id="cc-name"
                    className="cc-input"
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Full name"
                  />
                </div>

                <div className="cc-grid cc-grid--2" style={{ gap: 16 }}>
                  <div className="cc-field">
                    <label className="cc-label" htmlFor="cc-email">
                      EMAIL *
                    </label>
                    <input
                      id="cc-email"
                      type="email"
                      className="cc-input"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="cc-field">
                    <label className="cc-label" htmlFor="cc-phone">
                      PHONE
                    </label>
                    <input
                      id="cc-phone"
                      className="cc-input"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+60..."
                    />
                  </div>
                </div>

                <div className="cc-field">
                  <label className="cc-label" htmlFor="cc-inquiry">
                    YOUR INQUIRY ABOUT
                  </label>
                  <select
                    id="cc-inquiry"
                    className="cc-select"
                    value={form.inquiry}
                    onChange={set("inquiry")}
                  >
                    <option>Inquiry 1</option>
                    <option>Inquiry 2</option>
                    <option>Inquiry 3</option>
                  </select>
                </div>

                <div className="cc-field">
                  <label className="cc-label" htmlFor="cc-message">
                    MESSAGE *
                  </label>
                  <textarea
                    id="cc-message"
                    className="cc-textarea"
                    required
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your project…"
                  />
                </div>

                <button type="submit" className="cc-btn" style={{ width: "100%", justifyContent: "center" }}>
                  SEND QUESTIONS
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
