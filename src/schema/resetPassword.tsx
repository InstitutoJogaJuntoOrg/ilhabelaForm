import * as z from 'zod'

export const EmailFormSchemaPass = z.object({
  email: z
  .string({
    errorMap: () => {
      return { message: "Digite um e-mail válido" };
    },
  })
  .email(),
});

export type EmailFormSchemaPassType = z.infer<typeof EmailFormSchemaPass>;