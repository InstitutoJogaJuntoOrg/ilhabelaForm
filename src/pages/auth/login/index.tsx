import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField, Register } from "../register/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormInputs, loginFormSchema } from "../../../schema/loginSchema";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Footer } from "../../../components/footer";
export const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [data, setData] = useState();
  const navigate = useNavigate();
  const handleSubmitLogin = handleSubmit(async (data) => {
    try {
      const response = await axios.post(
        "https://back.ilhabelatech.com/users/login/",
        { email: data.email, password: data.password }
      );
      console.log(data.email);
      if (response.status === 200) {
        localStorage.setItem("email", email);
        console.log("logado");
        setData(response.data);
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("username", response.data.user);
        localStorage.setItem("personalForm", response.data.personal_form);
        localStorage.setItem(
          "socioeconomicForm",
          response.data.socioeconomic_form
        );
        localStorage.setItem("quizForm", response.data.quiz_form);
        toast.success("Autenticado com sucesso!");

        setTimeout(() => {
          navigate("/inscricao");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          console.log("Erro de autenticação:", error.response.data.error);
          console.log(data.email);
          console.log(data.password);

          toast.error(error.response.data.error);
        } else {
          console.error("Erro ao fazer login:", error);
        }
      }
    }
  });

  console.log(data);

  return (
    <>
      <Container>
        <ToastContainer />
        <h1>Login</h1>
        <div className="h">
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
              <Register>
                
                <span className="">
                  <span>
                    <Link to={"/reset"} style={{textDecoration: 'none', color: 'white'}}>Esqueci minha senha</Link>
                  </span>
                </span>
               
              </Register>
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
        </div>
      </Container>
      <br />
      <br />
      <Footer />
    </>
  );
};
