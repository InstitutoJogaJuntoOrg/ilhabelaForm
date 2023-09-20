import * as z from 'zod'

export const deleteFormSchema = z.object({
  password: z.string({
    errorMap: () => {
      return { message: "Senha inválida" };
    },
  }),
});

export type deleteFormSchemaType = z.infer<typeof deleteFormSchema>;