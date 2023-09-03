import * as z from "zod";

export const FormSchema = z.object({
  name: z.string().min(3, "Campo obrigatório"),
  socialName: z.string().min(1, "Campo obrigatório"),
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
  deficiency: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),
  color: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),
  gender: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),
  guidance: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),
  children: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),

  schooling: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),

  benefit: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),


  display: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),

  connect: z.object({
    name: z
      .string({
        required_error: "messages.required",
      })
      .min(1, { message: "messages.required" }),
  }),



  income: z.string({
    required_error: "messages.required",
  }).min(1, { message: "messages.required" }),

  questionOne: z.string({
    required_error: "messages.required",
  }),

  questionTwo: z.string({
    required_error: "messages.required",
  }),

  questionTree: z.string({
    required_error: "messages.required",
  })

});

export type FormSchemaType = z.infer<typeof FormSchema>;
