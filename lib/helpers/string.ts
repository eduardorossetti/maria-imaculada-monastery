export function capitalize(value: string): string {
  if (!value) return ""

  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

export function truncate(value: string, length: number): string {
  if (!value) return ""
  if (value.length <= length) return value

  return `${value.slice(0, length)}...`
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}
