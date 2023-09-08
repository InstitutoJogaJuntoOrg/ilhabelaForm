import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField } from "../register/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EmailFormSchemaType, EmailFormSchema } from "../../../schema/emailSchema";

export const EmailPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormSchemaType>({
    resolver: zodResolver(EmailFormSchema),
  });

  function handleSubmitLogin(data: any) {
    console.log(data);
  }
  console.log(errors);

  return (
    <Container>
      <h1>Qual seu email?</h1>
      <form
        onSubmit={handleSubmit(handleSubmitLogin)}
        style={{
          width: "30rem",
        }}
      >
        <FormField>
          <label>Email</label>
          <InputText
            id="email"
            {...register("email")}
            aria-describedby="email-help"
            placeholder="Email"
          />
        </FormField>

        <button
          style={{
            fontSize: "16px",
            borderRadius: "26px",
          }}
          type="submit"
        >
         Prosseguir
        </button>
        <br />
        <br />
      </form>
    </Container>
  );
};
