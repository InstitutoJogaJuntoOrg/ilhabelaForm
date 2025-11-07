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
          <span style={{ textDecoration: "none" }}>
            <p>
              Acesse o edital disponível nessa página e leia tudo com atenção.
              Em seguida, clique no botão "QUERO SER UXPERTS" para fazer a sua
              inscrição.
            </p>
          </span>
        </div>
        <div>
          <span className="pass">2 Passo</span>
          <p>
            Após ler o edital, preencha seus dados pessoais e socioeconômicos na
            sessão “Meu Perfil”. Feito isso, acesse o processo seletivo do
            UXperts, clique em “Inscreva-se” e depois em “Realizar prova” para
            seguir com o questionário de conhecimentos gerais. Essa etapa é
            fundamental para o processo  seletivo.
          </p>
        </div>
        <div>
          <span className="pass">3 Passo</span>
          <p>
            Se você for um dos aprovados no curso, será convocado a comparecer
            na IETEC portando os documentos comprobatórios, segundo edital.
          </p>
        </div>
        <div>
          <span className="pass">4 Passo</span>
          <p>Mantenha o seu número de telefone e e-mail atualizados.</p>
        </div>
      </CardsContainer>
    </StepsContainer>
  );
}
