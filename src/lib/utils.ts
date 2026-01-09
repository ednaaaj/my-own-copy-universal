/**
 * Converts an appliance name to a URL-safe slug
 * e.g., "Active Retainer" -> "active-retainer"
 * e.g., "Bleaching Tray (Upper)" -> "bleaching-tray-upper"
 */
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, '') // Remove parentheses
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
}

/**
 * Finds an appliance by its slug
 */
export function findApplianceBySlug(
  appliances: Array<{ name: string }>,
  slug: string
): { name: string } | undefined {
  return appliances.find((a) => toSlug(a.name) === slug);
}
