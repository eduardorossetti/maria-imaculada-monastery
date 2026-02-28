import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getField<T>(obj: Record<string, unknown>, path: string): T | undefined {
  const parts = path.split(/[,[\].]+/).filter(Boolean)
  let result: unknown = obj
  for (const key of parts) {
    if (result === null || result === undefined) break
    result = (result as Record<string, unknown>)[key]
  }
  return result as T | undefined
}
