"use client";

import { useFormState } from "react-hook-form";

import { FieldError } from "@/components/ui/field";
import { getField } from "@/lib/utils";

interface ErrorMessageProps {
  field: string;
}

export function ErrorMessage({ field }: ErrorMessageProps) {
  const { errors } = useFormState();
  const fieldError = getField<{ message?: string }>(
    errors as Record<string, unknown>,
    field
  );

  if (!fieldError?.message) {
    return null;
  }

  return <FieldError errors={[fieldError]} className="mt-1" />;
}
