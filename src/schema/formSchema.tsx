import * as z from 'zod'

export const FormSchema = z
  .object({
    name: z.string(),
    socialName: z.string(),
    cpf: z.string(),
    email: z.string().email(),
    date: z.date(),
    state: z.string(),
    deficiency: z.string(),
    color: z.string(),
    gender: z.string(),
    guidance: z.string(),
    children: z.string(),
    schooling: z.string(),
    income: z.number(),
    password: z.string(),
  })

export type FormSchemaType = z.infer<typeof FormSchema>;