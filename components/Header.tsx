"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE, NAV, IMG } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close the drawer on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC closes; lock page scroll while the drawer is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ---------- top bar ---------- */}
      <div className="cc-topbar">
        <div className="cc-container cc-topbar__inner">
          <div className="cc-topbar__group">
            <span className="cc-topbar__item">
              <span className="material-symbols-rounded">call</span>
              <span>Call Us 24/7</span>
              <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
            </span>
            <span className="cc-topbar__item">
              <span className="material-symbols-rounded">mail</span>
              <span>Send Us Mail</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </span>
            <span className="cc-topbar__item">
              <span className="material-symbols-rounded">location_on</span>
              <span>Our Location</span>
              <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                {SITE.addressShort}
              </a>
            </span>
          </div>
          <div className="cc-topbar__group">
            <span className="cc-topbar__item">
              <span className="material-symbols-rounded">language</span>
              <span>Language</span>
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

          <nav
            className={`cc-nav ${open ? "is-open" : ""}`}
            id="cc-main-nav"
            aria-label="Main navigation"
          >
            <button
              type="button"
              className="cc-nav__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-rounded">close</span>
            </button>
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

          <div className="cc-header__actions">
            <Link href="/get-in-touch" className="cc-btn cc-btn--header">
              GET A QUOTE
            </Link>
            <button
              type="button"
              className="cc-burger"
              aria-label={open ? "Close menu" : "Open menu"}
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

      {/* tap-outside / dim backdrop — mobile only */}
      <div
        className={`cc-nav-backdrop ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
