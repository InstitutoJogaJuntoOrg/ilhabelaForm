import * as z from "zod";

export const SocioeconomicoSchema = z.object({
    deficiency: z.object({
        name: z
          .string({
            required_error: "messages.required",
          })
          .min(1, { message: "messages.required" }),
      }),
      color:  z
      .string({
        required_error: "messages.required",
      }),
      gender: z
      .string({
        required_error: "messages.required",
      }),
      guidance: z
      .string({
        required_error: "messages.required",
      }),
      family:z.object({
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
    
      schooling: z
      .string({
        required_error: "messages.required",
      }),

      employment_status: z
      .string({
        required_error: "messages.required",
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
    
      connect: z
      .string({
        required_error: "messages.required",
      }),
    
    
    
      income: z.string({
        required_error: "messages.required",
      }).min(1, { message: "messages.required" }),
    
});

export type SocioeconomicoSchemaType = z.infer<typeof SocioeconomicoSchema>;

