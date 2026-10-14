"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE, NAV, IMG } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ---------- top bar ---------- */}
      <div className="cc-topbar">
        <div className="cc-container cc-topbar__inner">
          <div className="cc-topbar__group">
            <span className="cc-topbar__item">
              <span className="material-symbols-rounded">call</span> Call Us 24/7{" "}
              <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
            </span>
            <span className="cc-topbar__item">
              <span className="material-symbols-rounded">mail</span> Send Us Mail{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </span>
            <span className="cc-topbar__item">
              <span className="material-symbols-rounded">location_on</span> Our Location{" "}
              <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                {SITE.addressShort}
              </a>
            </span>
          </div>
          <div className="cc-topbar__group">
            <span className="cc-topbar__item">
              <span className="material-symbols-rounded">language</span> Language
              <span style={{ fontWeight: 600, color: "#fff" }}>English</span>
            </span>
          </div>
        </div>
      </div>

      {/* ---------- main header ---------- */}
      <header className="cc-header">
        <div className="cc-container cc-header__inner">
          <Link href="/" className="cc-logo" aria-label={`${SITE.name} home`}>
            <Image
              src={IMG.logo}
              alt={`${SITE.name} logo`}
              width={1244}
              height={1244}
              priority
              style={{ height: 42, width: 42, objectFit: "contain" }}
            />
            <span className="cc-logo__text">
              <strong>Cloud Chasers</strong>
              <small>Vape Manufacturing</small>
            </span>
          </Link>

          <nav className={`cc-nav ${open ? "is-open" : ""}`} id="cc-main-nav">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Link href="/get-in-touch" className="cc-btn cc-btn--header">
              GET A QUOTE
            </Link>
            <button
              type="button"
              className="cc-burger"
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="cc-main-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="material-symbols-rounded" style={{ fontSize: 30 }}>
                {open ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
