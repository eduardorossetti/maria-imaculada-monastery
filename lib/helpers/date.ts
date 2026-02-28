import { format, isValid, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDate(
  date: string | Date | null | undefined
): string {
  if (!date) return ""

  const parsedDate = typeof date === "string" ? parseISO(date) : date

  if (!isValid(parsedDate)) return ""

  return format(parsedDate, "dd/MM/yyyy", { locale: ptBR })
}

export function formatDateTime(
  date: string | Date | null | undefined
): string {
  if (!date) return ""

  const parsedDate = typeof date === "string" ? parseISO(date) : date

  if (!isValid(parsedDate)) return ""

  return format(parsedDate, "dd/MM/yyyy HH:mm", { locale: ptBR })
}

export function formatTime(
  date: Date | string | undefined | null,
  formatTxt = "HH:mm"
): string {
  if (!date) return ""

  const parsedDate = typeof date === "string" ? parseISO(date) : date

  if (!isValid(parsedDate)) return ""

  return format(parsedDate, formatTxt, { locale: ptBR })
}

export function parseToInput(
  date: Date | string | undefined | null,
  formatTxt = "yyyy-MM-dd"
): string {
  return date
    ? format(
        typeof date === "string" ? parseISO(date) : date,
        formatTxt
      )
    : ""
}
