import * as z from "zod";
export const FormSchema = z.object({
  civil_state: z.string().min(3, "Campo obrigatório"),
  rg: z
  .any(),
  socialName: z.string().min(1, "Campo obrigatório"),
  first_name: z.string().min(1, "Campo obrigatório"),
  last_name: z.string().min(1, "Campo obrigatório"),
  city: z.string().min(1, "Campo obrigatório"),
  cpf: z
  .string({
    required_error: "messages.required",
  }).min(1, "Campo obrigatório"),
  email: z.string().email("Email inválido").min(1, "Campo obrigatório"),
  date: z.string().min(1, "Campo obrigatório"),
  state: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),
  phone: z
    .string({
      required_error: "messages.required",
    })
    .min(1, { message: "messages.required" }),
 
});

export type FormSchemaType = z.infer<typeof FormSchema>;
