import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField, Register } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  RegisterSchemaType,
  RegisterSchema,
} from "../../../schema/registerSchema";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const notifySuccess = () => toast.success("Usuário cadastrado com sucesso!");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });
  function handleSubmitRegister(data: RegisterSchemaType) {
    const requestData = {
      username: data.name,
      password: data.password,
      email: data.email,
    };

    axios
      .post("https://back.ilhabelatech.com/users/", requestData)
      .then((response) => {
        notifySuccess();
        if (response.status === 201) {
          setTimeout(() => {
            navigate("/auth");
          }, 2000);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          let response = error.response.data.message;
          console.error("Erro ao cadastrar o usuário:", response);
          toast.error(response);
        } else {
          console.error("Erro ao cadastrar o usuário:", error);
        }
      });
  }

  console.log(errors);

  return (
    <Container>
      <ToastContainer />
      <h1>Registro</h1>
      <form
        onSubmit={handleSubmit(handleSubmitRegister)}
        style={{
          width: "30rem",
        }}
      >
        <FormField>
          <label>Nome</label>
          <InputText
            id="name"
            {...register("name")}
            aria-describedby="email-help"
            placeholder="Nome"
          />
        </FormField>

        <FormField>
          <label>Email</label>
          <InputText
            id="email"
            {...register("email")}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="email-help"
            placeholder="Email"
            value={email}
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

        <FormField>
          <label>Repetir Senha</label>
          <InputText
            id="repeatPassword"
            {...register("confirmPassword")}
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
          <Link to={"/auth"}>Fazer login</Link>
        </span>
      </Register>
    </Container>
  );
};
