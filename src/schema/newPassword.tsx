import * as z from 'zod'

export const newPassword = z.object({
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
});

export type newPasswordType = z.infer<typeof newPassword>;