export function maskDecimal(
  value: number | null | undefined
): string {
  if (typeof value === "undefined" || value === null || Number.isNaN(value)) {
    return ""
  }

  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function maskMoney(value: number): string {
  return `R$ ${maskDecimal(value)}`
}
