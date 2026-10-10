/**
 * Resolves static public asset paths with NEXT_PUBLIC_BASE_PATH when needed,
 * supporting both GitHub Pages subpath deployment (/sammyremi) and root domain hosting.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getAssetPath(path: string): string {
  if (!path) return path;

  // External URLs or data URIs remain unchanged
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // If basePath is configured and cleanPath already starts with basePath, return as is
  if (basePath && (cleanPath === basePath || cleanPath.startsWith(`${basePath}/`))) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
