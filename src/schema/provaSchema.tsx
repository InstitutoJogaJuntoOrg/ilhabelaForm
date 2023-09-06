import * as z from 'zod';

export const ProvaSchema = z.object({
  questionOne: z.string().min(1, {
    message: "A pergunta 1 é obrigatória",
  }),

  questionTwo: z.string().min(1, {
    message: "A pergunta 2 é obrigatória",
  }),

  questionThree: z.string().min(1, {
    message: "A pergunta 3 é obrigatória",
  }),
});

export type ProvaSchemaType = z.infer<typeof ProvaSchema>;
