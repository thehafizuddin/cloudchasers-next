import Link from "next/link";
import Image from "next/image";
import { SITE, NAV, IMG } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="cc-footer">
      <div className="cc-container">
        <div className="cc-footer__grid">
          {/* brand + contact */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <Image
                src={IMG.logo}
                alt={`${SITE.name} logo`}
                width={1244}
                height={1244}
                style={{ height: 46, width: 46, objectFit: "contain" }}
              />
              <span className="cc-footer__brand">
                Cloud Chasers
                <small>Vape Manufacturing</small>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>{SITE.intro}</p>
          </div>

          {/* quick links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="cc-footer__list">
              {NAV.map((item) => (
                <li key={item.href}>
                  <span className="material-symbols-rounded" style={{ fontSize: 15 }}>
                    chevron_right
                  </span>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact company */}
          <div>
            <h4>Contact Company</h4>
            <ul className="cc-footer__list">
              <li>
                <span className="material-symbols-rounded" style={{ fontSize: 17 }}>
                  call
                </span>
                <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
              </li>
              <li>
                <span className="material-symbols-rounded" style={{ fontSize: 17 }}>
                  mail
                </span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <span className="material-symbols-rounded" style={{ fontSize: 17 }}>
                  location_on
                </span>
                <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                  {SITE.address}
                </a>
              </li>
              <li>
                <span className="material-symbols-rounded" style={{ fontSize: 17 }}>
                  public
                </span>
                <a href="https://cloud-chasers.cc" target="_blank" rel="noopener noreferrer">
                  {SITE.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cc-footer__bottom">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Designed by Apehtech Solutions</span>
        </div>
      </div>
    </footer>
  );
}
