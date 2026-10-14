import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Chasers | Leading OEM Manufacturer for Vape & E-Cigarette Products",
  description:
    "Cloud Chasers is a trusted OEM manufacturer specializing in large-scale production of premium vape and e-cigarette products. Discover innovative solutions for your brand today.",
  keywords: [
    "OEM vape manufacturer",
    "e-cigarette manufacturing",
    "NRT products",
    "vape production Malaysia",
    "Cloud Chasers",
  ],
  openGraph: {
    title: "Cloud Chasers | Leading OEM Manufacturer for Vape & E-Cigarette Products",
    description:
      "Trusted OEM manufacturer specializing in large-scale production of premium vape and e-cigarette products.",
    url: "https://cloud-chasers.cc/",
    siteName: "Cloud Chasers",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
.material-symbols-rounded {
  font-family: 'Material Symbols Rounded';
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  vertical-align: -3px;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
