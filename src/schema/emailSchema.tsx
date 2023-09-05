import * as z from 'zod'

export const EmailFormSchema = z.object({
  name: z
    .string({
      errorMap: () => {
        return { message: "Digite um e-mail válido" };
      },
    }),
  email: z.string({
    errorMap: () => {
      return { message: "Digite um e-mail válido" };
    },
  }),
});

export type EmailFormSchemaType = z.infer<typeof EmailFormSchema>;