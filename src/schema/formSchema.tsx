import * as z from "zod";
import { differenceInYears } from "date-fns";

const guardianSchema = z.object({
  name: z.string().nonempty({ message: "Nome completo é obrigatório." }),
  cpf: z.string().length(11, { message: "CPF deve ter 11 dígitos." }),
  email: z.string().email({ message: "E-mail inválido." }),
  phone: z.string().min(10, { message: "Celular deve ter pelo menos 10 dígitos." }),
});

export const FormSchema = z.object({
  civil_state: z.string().min(3, "Campo obrigatório"),
  socialName: z.string().optional(),
  first_name: z.string().min(1, "Campo obrigatório"),
  last_name: z.string().min(1, "Campo obrigatório"),
  city: z.string().min(1, "Campo obrigatório"),
  adress: z.string().min(1, "Campo obrigatório"),
  country: z.string().min(1, "Campo obrigatório"),
  cpf: z.string({ required_error: "messages.required" }).min(1, "Campo obrigatório"),
  email: z.string().email("Email inválido").min(1, "Campo obrigatório"),
  date: z.string().refine(
    (value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    {
      message: "Data de nascimento inválida",
    }
  ),
  state: z.object({
    name: z.string({ required_error: "messages.required" }).min(1, { message: "messages.required" }),
  }),
  rg: z
  .string({
    required_error: "messages.required",
  }),
  cep: z.string(),
  phone: z
    .string()
    .nonempty({ message: "O campo de telefone é obrigatório" })
    .regex(/^\d{11}$/, {
      message: "O telefone deve conter exatamente 11 dígitos",
    }),
  guardian: guardianSchema.optional(),
}).superRefine((data, ctx: any) => {
  const date = new Date(data.date);
  const age = differenceInYears(new Date(), date);

  if (age < 18 && !data.guardian) {
    ctx.addIssue({
      path: ["guardian"],
      message: "Campos do responsável são obrigatórios para menores de 18 anos.",
    });
  }
});

export type FormSchemaType = z.infer<typeof FormSchema>;
