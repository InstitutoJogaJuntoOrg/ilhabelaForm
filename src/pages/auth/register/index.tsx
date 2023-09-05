import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField, Register } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchemaType, RegisterSchema } from "../../../schema/registerSchema";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  function handleSubmitRegister(data: any) {
    console.log(data);
  }
  console.log(errors);

  return (
    <Container>
      <h1>Registro</h1>
      <form
        onSubmit={handleSubmit(handleSubmitRegister)}
        style={{
          width: "30rem",
        }}
      >
        <FormField>
          <label>Email</label>
          <InputText
            id="email"
            {...register('email')}
            aria-describedby="email-help"
            placeholder="Email"
          />
        </FormField>

        <FormField>
          <label>Senha</label>
          <InputText
            id="password"
            {...register('password')}
            aria-describedby="password-help"
            placeholder="Senha"
            type="password"
          />
        </FormField>

        <FormField>
          <label>Repetir Senha</label>
          <InputText
            id="repeatPassword"
            {...register('confirmPassword')}
            aria-describedby="repeatPassword-help"
            placeholder="Repetir Senha"
            type="password"
          />
        </FormField>

        <button
          style={{
            fontSize: "16px",
            borderRadius: "26px",
          }}
          type="submit"
        >
          Registrar
        </button>
        <br />
        <br />
      </form>

      <Register>
        <h3>Já tem uma conta?</h3>
        <span className="register">
            <Link to={"/login"}>Fazer login</Link>
          </span>
      </Register>
    </Container>
  );
};
