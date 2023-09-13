import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import "./styles";
import { CardsContainer, StepsContainer } from "./styles";

export default function StepsHome() {
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
  ];

  return (
    <StepsContainer>
       <Steps model={items} />

      <CardsContainer>
        <div>
        <span className="pass">1 Passo</span>
          <p>
          Realize seu cadastro no site, preencha as informações pessoais e o questionário socioeconômico
          </p>
        </div>
        <div>
        <span className="pass">2 Passo</span>
          <p>
          Faça a prova online com duração de 6 horas
          </p>
        </div>
        <div>
        <span className="pass">3 Passo</span>
          <p>
          Caso seja aprovado, compareça  à IETEC com seus documentos para efetuar matrícula.
          </p>
        </div>

      </CardsContainer>
    </StepsContainer>
  );
}
