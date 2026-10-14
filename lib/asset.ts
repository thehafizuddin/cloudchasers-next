/**
 * With `output: "export"` + a `basePath`, next/image does not always prefix
 * `src` (notably with the `fill` prop / priority hero images), which breaks
 * assets when the site is served from a sub-path (e.g. GitHub Pages project
 * pages). These helpers make the base path explicit everywhere.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix an absolute public asset path with the deploy base path. */
export function asset(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
