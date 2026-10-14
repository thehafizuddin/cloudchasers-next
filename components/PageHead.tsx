import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

/** Reusable inner-page hero (dark banner with breadcrumb). */
export default function PageHead({
  title,
  crumb,
  bg,
}: {
  title: string;
  crumb?: string;
  bg?: string;
}) {
  return (
    <section className="cc-pagehead">
      {bg ? (
        <div className="cc-pagehead__bg">
          <Image src={bg} alt="" fill priority style={{ objectFit: "cover" }} />
        </div>
      ) : null}
      <div className="cc-container cc-pagehead__inner">
        <h1>{title}</h1>
        <div className="cc-crumb">
          <Link href="/">Home</Link>
          <span> / </span>
          <span>{crumb ?? title}</span>
        </div>
      </div>
    </section>
  );
}

export function QuoteBand() {
  return (
    <section className="cc-section cc-section--alt">
      <div className="cc-container" style={{ textAlign: "center" }}>
        <span className="cc-eyebrow">Get In Touch</span>
        <h2>Fill all information details to consult with us</h2>
        <p style={{ maxWidth: 620, margin: "0 auto 26px" }}>
          {SITE.intro}
        </p>
        <Link href="/get-in-touch" className="cc-btn">
          GET A QUOTE
        </Link>
      </div>
    </section>
  );
}
