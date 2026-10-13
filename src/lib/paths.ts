/** Static assets and metadata need the deployment prefix; Next Link adds it itself. */
export function assetPath(path: string) {
  return path.startsWith("/") && !path.startsWith("//")
    ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`
    : path;
}

export function shareImagePath() {
  return assetPath(process.env.GITHUB_PAGES === "true"
    ? "/opengraph-image.png"
    : "/opengraph-image");
}
