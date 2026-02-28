"use client"

import React, { useState } from "react"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

interface ConfirmModalProps {
  title: string
  message: string | React.ReactNode
  confirmText: string
  show: boolean
  onClose: () => void
  onConfirm: () => void | Promise<void>
}

export function ConfirmModal({
  show,
  title,
  message,
  confirmText,
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleConfirm() {
    setIsLoading(true)
    await onConfirm()
    setIsLoading(false)
    onClose()
  }

  return (
    <AlertDialog open={show} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="max-h-[calc(95vh-16rem)] overflow-auto">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Voltar</AlertDialogCancel>
          <Button onClick={handleConfirm} disabled={isLoading}>
            {isLoading ? <Spinner className="size-4" /> : confirmText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
