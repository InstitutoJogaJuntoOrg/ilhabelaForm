import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import "./styles";
import { CardsContainer, StepsContainer } from "./styles";
import { Link } from "react-router-dom";

export default function StepsHome() {
  const auth = localStorage.getItem("token");

  const items: MenuItem[] = [
    {
      label: "",
    },
    {
      label: "",
    },
    {
      label: "",
    },
    {
      label: "",
    },


  ];

  return (
    <StepsContainer>
      <Steps model={items} />

      <CardsContainer>
        <div>
          <span className="pass">1 Passo</span>
          <Link
            to={auth ? "/inscricao" : "/login"}
            style={{ textDecoration: "none" }}
          >
            <p>Acesse o edital do processo seletivo e leia com atenção, em seguida acesse o link do processo seletivo.</p>
          </Link>
        </div>
        <div>
          <span className="pass">2 Passo</span>
          <p>Preencha o formulário socioeconômico e Realize a prova de conhecimentos específicos;
 <br /> (Etapa seletiva)</p>
        </div>
        <div>
          <span className="pass">3 Passo</span>
          <p>Se você for um dos aprovados no curso, será convocado a comparecer na IETEC portando os documentos comprobatórios, segundo edital.</p>
        </div>
        <div>
          <span className="pass">4 Passo</span>
          <p>Mantenha o seu número de telefone e e-mail atualizados.</p>
        </div>


      </CardsContainer>
    </StepsContainer>
  );
}
