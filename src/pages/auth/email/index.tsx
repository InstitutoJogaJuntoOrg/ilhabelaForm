import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField } from "../register/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  EmailFormSchemaType,
  EmailFormSchema,
} from "../../../schema/emailSchema";
import axios from "axios";

export const EmailPage = () => {
  const { handleSubmit, register } = useForm<EmailFormSchemaType>({
    resolver: zodResolver(EmailFormSchema),
  });
  const navigate = useNavigate()
  const handleSubmitLogin = handleSubmit(async (data) => {
    try {
      const response = await axios.post(
        "http://back.ilhabelatech.com:8000/users/email_check/",
        { email: data.email }
      );

      if (response.status === 200) {
        console.log("OK");
        localStorage.setItem("email", data.email);
        navigate('/auth')
      }
    } catch (error) {
      console.log(data.email)
      console.error("Erro");
    }
  });

  return (
    <Container>
      <h1>Qual seu email?</h1>
      <form
        onSubmit={handleSubmitLogin}
        style={{
          width: "30rem",
        }}
      >
        <FormField>
          <label>Email</label>
          <InputText
            id="email"
            {...register("email")}
            required
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
