import * as z from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string({
      errorMap: () => {
        return { message: "Digite um e-mail válido" };
      },
    })
    .email(),
  password: z.string({
    errorMap: () => {
      return { message: "Senha inválida" };
    },
  }),
});

export type LoginFormInputs = z.infer<typeof loginFormSchema>;