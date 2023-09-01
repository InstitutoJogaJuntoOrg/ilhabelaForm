import * as z from "zod";
const MAX_FILE_SIZE = 50000000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const FormSchema = z.object({
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  name: z.string().min(3, "Campo obrigatório"),
  socialName: z.string().min(1, "Campo obrigatório"),
  cpf: z.string().min(1, "Campo obrigatório"),
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
  income: z.string(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
