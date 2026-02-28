"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { ErrorMessage } from "@/components/form/ErrorMessage";
import { Button } from "@/components/ui/button";
import { ErrorAlert } from "@/components/ui/error-alert";
import { Spinner } from "@/components/ui/spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema as never),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { handleSubmit, formState: { errors, isSubmitting } } = form

  function onSubmit(data: ContactFormData) {
    toast.success("Mensagem enviada!", {
      description: `Obrigado, ${data.name}. Entraremos em contato em breve.`,
    });
    form.reset();
  }

  return (
    <FormProvider {...form}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Contate-nos</CardTitle>
          <CardDescription>
            Envie sua mensagem e entraremos em contato em breve.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <ErrorAlert className="mb-6" error={errors.root?.message as string | undefined} />
            <FieldGroup>
              <Field className="mb-6">
                <FieldLabel htmlFor="contact-name">Nome</FieldLabel>
                <Input
                  {...form.register("name")}
                  id="contact-name"
                  placeholder="Seu nome"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                />
                <ErrorMessage field="name" />
              </Field>

              <Field className="mb-6">
                <FieldLabel htmlFor="contact-email">E-mail</FieldLabel>
                <Input
                  {...form.register("email")}
                  id="contact-email"
                  type="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
                <ErrorMessage field="email" />
              </Field>

              <Field className="mb-6">
                <FieldLabel htmlFor="contact-subject">Assunto</FieldLabel>
                <Input
                  {...form.register("subject")}
                  id="contact-subject"
                  placeholder="Assunto da mensagem"
                  autoComplete="off"
                  aria-invalid={!!errors.subject}
                />
                <ErrorMessage field="subject" />
              </Field>

              <Field className="mb-6">
                <FieldLabel htmlFor="contact-message">Mensagem</FieldLabel>
                <Textarea
                  {...form.register("message")}
                  id="contact-message"
                  placeholder="Sua mensagem..."
                  rows={5}
                  className="resize-none"
                  aria-invalid={!!errors.message}
                />
                <ErrorMessage field="message" />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Limpar
            </Button>
            <Button type="submit" form="contact-form" disabled={isSubmitting}>
              {isSubmitting ? <Spinner className="size-5" /> : "Enviar"}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </FormProvider>
  );
}
