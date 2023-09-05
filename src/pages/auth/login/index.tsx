import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { Register } from "./styles";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const toggleForm = () => {
    setIsLogin(!isLogin); 
  };

  const loginForm = (
    <form
      style={{
        width: "30rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Email</label>
        <InputText
          id="email"
          aria-describedby="email-help"
          placeholder="Email"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Senha</label>
        <InputText
          id="password"
          aria-describedby="password-help"
          placeholder="Senha"
        />
      </div>

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
  );

  const registerForm = (
    <form
      style={{
        width: "30rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Email</label>
        <InputText
          id="email"
          aria-describedby="email-help"
          placeholder="Email"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Senha</label>
        <InputText
          id="password"
          aria-describedby="password-help"
          placeholder="Senha"
          type="password"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Repetir Senha</label>
        <InputText
          id="repeatPassword"
          aria-describedby="repeatPassword-help"
          placeholder="Repetir Senha"
          type="password"
        />
      </div>

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
  );

  return (
    <Container>
      <h1>{isLogin ? "Login" : "Registro"}</h1>
      {isLogin ? loginForm : registerForm}

      <Register>
        <h3>{isLogin ? "Ainda não tem uma conta?" : "Já tem uma conta?"}</h3>
        <span onClick={toggleForm}>
          {isLogin ? "Cadastre-se" : "Fazer login"}
        </span>
      </Register>
    </Container>
  );
};
