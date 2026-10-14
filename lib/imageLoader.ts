/**
 * Custom next/image loader.
 *
 * With `output: "export"` served from a sub-path (GitHub Pages project pages),
 * next/image does not reliably prefix `src` with the base path — notably on
 * `fill` and priority images, which then 404.
 *
 * NEXT_PUBLIC_BASE_PATH is inlined by Next at build time and is also read at
 * runtime here, so local assets under /public always resolve correctly whether
 * the site is served from "/" or from "/cloudchasers-next/".
 */
export default function imageLoader({ src }: { src: string }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (/^https?:\/\//i.test(src) || src.startsWith("data:")) return src;

  const path = src.startsWith("/") ? src : `/${src}`;
  // Avoid double-prefixing if Next already applied the base path.
  if (base && path.startsWith(base + "/")) return path;
  return `${base}${path}`;
}
