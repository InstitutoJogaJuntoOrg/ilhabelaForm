import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField, Register } from "../register/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormInputs, loginFormSchema } from "../../../schema/loginSchema";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  function handleSubmitLogin(data: any) {
    console.log(data);
  }
  console.log(errors);

  return (
    <Container>
      <h1>Login</h1>
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

        <FormField>
          <label>Senha</label>
          <InputText
            id="password"
            {...register("password")}
            aria-describedby="password-help"
            placeholder="Senha"
            type="password"
          />
        </FormField>

        <div
          style={{
            marginTop: "1rem",
            color: "white",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <span>Esqueci minha senha</span>
        </div>

        <button
          style={{
            fontSize: "16px",
            borderRadius: "26px",
          }}
          type="submit"
        >
          Fazer login
        </button>
        <br />
        <br />
      </form>

      <Register>
        <h3>Ainda não tem uma conta?</h3>
        <span className="register">
          <Link to={"/register"}>Clique aqui e registre-se</Link>
        </span>
      </Register>
    </Container>
  );
};