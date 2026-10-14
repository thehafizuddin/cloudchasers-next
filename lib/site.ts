// Content extracted faithfully from the live cloud-chasers.cc WordPress site.
// All copy and image paths are the ORIGINAL assets (copied into /public/wp-content/...).

export const SITE = {
  name: "Cloud Chasers",
  tagline: "High-Quality Vape Manufacturing – Innovation, Precision & Excellence",
  phone: "+60173932920",
  phoneDisplay: "60173932920",
  email: "info@cloud-chasers.com",
  address: "37, Jalan Utarid U5/11, Seksyen u5, 40150 Shah Alam, Selangor",
  addressShort: "Shah Alam, Selangor",
  website: "www.cloud-chasers.cc",
  mapUrl: "https://goo.gl/maps/DQ4LPE52wByQV3i29",
  intro:
    "We offer high-quality vape manufacturing solutions straight from our state-of-the-art facility. Partner with us for premium production and trusted expertise in the industry.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/our-services" },
  { label: "Ordering Policy", href: "/ordering-policy" },
  { label: "Get In Touch", href: "/get-in-touch" },
];

// ---------- IMAGE PATHS (verified to exist in /public) ----------
export const IMG = {
  logo: "/wp-content/uploads/2025/02/Frame-7.png",
  logoMark: "/wp-content/uploads/2025/02/Frame-7.png",
  logoAlt: "/wp-content/uploads/2025/01/Logo.png",
  banner: "/wp-content/uploads/2025/01/banner-570x440.png",
  banner460: "/wp-content/uploads/2025/01/banner-460x560.png",
  engineering: "/wp-content/uploads/2025/02/engineering-370x283.jpg",
  pexelsJiawei: "/wp-content/uploads/2025/02/pexels-jiawei-cui-1213899-2310904-370x283.jpg",
  pexelsEngineering: "/wp-content/uploads/2025/02/pexels-thisisengineering-3862623-370x283.jpg",
  pexelsJakub: "/wp-content/uploads/2025/02/pexels-jakubzerdzicki-30658380-370x283.jpg",
  image19: "/wp-content/uploads/2025/02/Image-19-370x283.jpeg",
  manufacturingImg: "/wp-content/uploads/2025/02/manufacturing-img-370x283.jpeg",
  ourMission: "/wp-content/uploads/2025/02/our-mission.jpeg",
  ourVision: "/wp-content/uploads/2025/02/our-vission.jpeg",
  ourCommitment: "/wp-content/uploads/2025/02/our-commitment.jpeg",
  ourVisionThumb: "/wp-content/uploads/2025/02/our-vission-370x283.jpeg",
  ceo: "/wp-content/uploads/2025/02/ceo.png",
  ceoThumb: "/wp-content/uploads/2025/02/ceo-225x300.png",
  clipPath: "/wp-content/uploads/2025/02/Clip-path-group-570x440.png",
  img5753: "/wp-content/uploads/2025/02/IMG_5753-570x440.jpg",
  img6831: "/wp-content/uploads/2025/02/IMG_6831-1-570x440.jpg",
  screenshot: "/wp-content/uploads/2025/02/Screenshot-2025-02-13-at-2.50.06%E2%80%AFPM-570x440.png",
  rectangle: "/wp-content/uploads/2025/02/Rectangle-570x440.png",
  aboutYayang: "/wp-content/uploads/2025/02/about-yayang.jpg",
  sidebarMap: "/wp-content/uploads/2020/12/sidebar_map.png",
  distribution: "/wp-content/uploads/2025/01/Distribution-img-370x283.jpeg",
  packing: "/wp-content/uploads/2025/01/packing-img-370x283.jpeg",
  sustainability: "/wp-content/uploads/2025/01/Sustainability-img-370x283.jpeg",
  branding: "/wp-content/uploads/2025/02/branding-1-scaled-370x283.jpg",
  antoninFels: "/wp-content/uploads/2025/02/antonin-fels-OdqmOsUgNwk-unsplash-370x283.jpg",
  proj1: "/wp-content/uploads/2025/02/image-1.png",
  proj2: "/wp-content/uploads/2025/02/image-2.png",
  proj3: "/wp-content/uploads/2025/02/image-3.png",
  proj4: "/wp-content/uploads/2025/02/image-4.png",
  proj5: "/wp-content/uploads/2025/02/image-5.png",
  proj6: "/wp-content/uploads/2025/02/image-6.png",
  proj7: "/wp-content/uploads/2025/02/image-7.png",
  proj9: "/wp-content/uploads/2025/02/image-9.png",
};

// ---------- SERVICES (5) ----------
export const SERVICES = [
  {
    slug: "custom-manufacturing-equipment-development",
    title: "Custom Manufacturing Equipment Development",
    blurb:
      "Expert engineering and fabrication of bespoke production machinery, built to your product specification and output targets.",
    image: IMG.pexelsJiawei,
  },
  {
    slug: "automation-system-calibration",
    title: "Automation System Calibration",
    blurb:
      "Precision calibration and tuning of automated production lines for consistent output, reduced waste and higher yield.",
    image: IMG.engineering,
  },
  {
    slug: "end-to-end-nrt-product-manufacturing",
    title: "End-to-End NRT Product Manufacturing",
    blurb:
      "Complete NRT product manufacturing — from formulation and design through to filling, packaging and compliance.",
    image: IMG.image19,
  },
  {
    slug: "manufacturing-equipment-upgrade",
    title: "Manufacturing Equipment Upgrade",
    blurb:
      "Expert machinery sourcing, upgrading, and optimization for maximum efficiency.",
    image: IMG.pexelsEngineering,
  },
  {
    slug: "factory-setup-production-consultation",
    title: "Factory Setup & Production Consultation",
    blurb:
      "Full factory setup and production consultation — layout, machinery selection, staffing and process rollout.",
    image: IMG.pexelsJakub,
  },
];

// ---------- PROJECTS (6) ----------
export const PROJECTS = [
  { slug: "smiss", title: "SMISS", image: IMG.proj1, alt: "SMISS manufacturing project" },
  { slug: "cbd-farm", title: "CBD Farm", image: IMG.proj2, alt: "CBD Farm project" },
  {
    slug: "huge-demand-in-local-market-malaysia",
    title: "Huge demand in local market Malaysia",
    image: IMG.proj3,
    alt: "Huge demand in local market Malaysia",
  },
  {
    slug: "appointed-contracted-manufacturer-of-nasty-products",
    title: "Appointed contracted manufacturer of Nasty products",
    image: IMG.proj4,
    alt: "Appointed contracted manufacturer of Nasty products",
  },
  { slug: "zgar-neo13000", title: "Zgar - NEO13000", image: IMG.proj5, alt: "Zgar NEO13000" },
  { slug: "zgar-ib8000", title: "Zgar - IB8000", image: IMG.proj6, alt: "Zgar IB8000" },
];

// ---------- WHY CHOOSE US ----------
export const WHY_US = [
  { title: "NO HASSLE", text: "We provide end-to-end solution/service" },
  { title: "FAST & SECURE DELIVERY", text: "30 days delivery upon confirmation order" },
  { title: "LOWEST MOQ", text: "As low as 5000 bottles – lower risks, start now!" },
  { title: "CUSTOM MERCHANDISE OPTIONS", text: "You can custom merchandise options (T&C)" },
];

export const TESTIMONIAL = {
  author: "NASTY",
  headline: "Reliable Manufacturing Partner!",
  quote:
    "Working with Cloud Chasers has been a game-changer for us. Their expertise in vape manufacturing, quality control, and innovation has helped us scale our brand to new heights. A trusted partner we highly recommend!",
};

// ---------- SUSTAINABILITY ----------
export const SUSTAINABILITY = {
  title: "SUSTAINABILITY GOALS",
  items: [
    {
      title: "Distribution",
      text: "Responsible, efficient distribution channels that reduce transit emissions and packaging waste.",
      image: IMG.distribution,
    },
    {
      title: "Packing",
      text: "Sustainable packaging materials and processes designed to cut single-use plastic across every line.",
      image: IMG.packing,
    },
    {
      title: "Sustainability",
      text: "Long-term investment in cleaner production, energy efficiency and ethical manufacturing practice.",
      image: IMG.sustainability,
    },
  ],
};

// ---------- ABOUT ----------
export const ABOUT = {
  intro:
    "Cloud Chasers, established in 2014 and based in Shah Alam, Malaysia, is a leading provider of manufacturing and production solutions, specializing in the vape industry and machinery engineering.",
  body: "Over the years, we have collaborated with renowned global brands, establishing ourselves as a trusted industry partner. At Cloud Chasers, we are committed to helping our clients expand their product lines with precision manufacturing and dependable delivery.",
  ceoName: "SYAMIL HANAFIAH",
  ceoRole: "CEO of Cloud Chasers / CEO of NHR Aviation Engineering",
};
