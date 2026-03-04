import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Campo obrigatório.")
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Campo obrigatório.")
    .email("Informe um e-mail válido."),
  subject: z
    .string()
    .trim()
    .min(1, "Campo obrigatório.")
    .min(3, "O assunto deve ter pelo menos 3 caracteres.")
    .max(100, "O assunto deve ter no máximo 100 caracteres."),
  message: z
    .string()
    .trim()
    .min(1, "Campo obrigatório.")
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(1000, "A mensagem deve ter no máximo 1000 caracteres."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
