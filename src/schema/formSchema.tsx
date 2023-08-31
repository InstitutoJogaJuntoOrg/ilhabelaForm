import * as z from "zod";


export const FormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  socialName: z.string().min(1, "Campo obrigatório"),
  cpf: z.string().min(1, "Campo obrigatório"),
  email: z.string().email("Email inválido").min(1, "Campo obrigatório"),
  date: z.string().min(1, "Campo obrigatório"),
  state: z.any(),
  deficiency: z.any(),
  color: z.any(),
  gender: z.any(),
  guidance: z.any(),
  children: z.any(),
  schooling: z.any(),
  income: z.string(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
