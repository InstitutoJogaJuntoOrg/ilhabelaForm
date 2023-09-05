import * as z from 'zod'

export const RegisterSchema = z
  .object({
    email: z
      .string({
        errorMap: () => {
          return { message: "Digite um e-mail válido" };
        },
      })
      .email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;