import { InputText } from "primereact/inputtext";
import { Container } from "../../form";

export const LoginPage = () => {
  return (
    <Container>
      <h1>Login</h1>
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
          <label>Usuário</label>
          <InputText
            id="username"
            aria-describedby="username-help"
            placeholder="Nome"
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
            id="username"
            aria-describedby="username-help"
            placeholder="Nome"
          />
        </div>

        <div style={{
            marginTop: '1rem',
            color: 'white',
            width: '100%',
            display: 'flex',
            justifyContent: "flex-end",
            alignItems: "flex-end"
        }}>
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
    </Container>
  );
};
