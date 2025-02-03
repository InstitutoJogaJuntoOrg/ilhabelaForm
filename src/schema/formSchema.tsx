import * as z from "zod";
import { differenceInYears } from "date-fns";

const guardianSchema = z.object({
  name: z.string().optional(),
  cpf: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});

export const FormSchema = z.object({
  civil_state: z.string().min(3, "Campo obrigatório"),
  socialName: z.string().optional(),
  linkedin: z.string().optional(),
  first_name: z.string().min(1, "Campo obrigatório"),
  last_name: z.string().min(1, "Campo obrigatório"),
  city: z.string().min(1, "Campo obrigatório"),
  adress: z.string().min(1, "Campo obrigatório"),
  country: z.string().min(1, "Campo obrigatório"),
  cpf: z.string({ required_error: "messages.required" }).min(1, "Campo obrigatório"),
  email: z.string().email("Email inválido").min(1, "Campo obrigatório"),
  date: z.any(),
  state: z.any(),
  rg: z
  .string({
    required_error: "messages.required",
  }),
  cep: z.any(),
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
