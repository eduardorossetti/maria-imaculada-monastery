import { AlertCircleIcon } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"

interface ErrorAlertProps {
  error: string | undefined | null
  className?: string
}

export function ErrorAlert({ error, className }: ErrorAlertProps) {
  if (!error) return null

  return (
    <Alert variant="destructive" className={className}>
      <AlertCircleIcon />
      <AlertDescription className="break-all">{error}</AlertDescription>
    </Alert>
  )
}
