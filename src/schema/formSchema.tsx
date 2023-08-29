import * as z from 'zod'

export const FormSchema = z
  .object({
    question: z.string(),
    password: z.string(),
  })

export type FormSchemaType = z.infer<typeof FormSchema>;