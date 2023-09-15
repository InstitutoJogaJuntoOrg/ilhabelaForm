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
  ];

  return (
    <StepsContainer>
       <Steps model={items} />

      <CardsContainer>
        <div>
        <span className="pass">1 Passo</span>
        <Link to={auth ? "/inscricao" : "/login"} style={{ textDecoration: 'none'}}>
          <p>
          Realize seu cadastro aqui no site
          </p>
            </Link>
        </div>
        <div>
        <span className="pass">2 Passo</span>
          <p>
          Faça o teste online
          </p>
        </div>
        <div>
        <span className="pass">3 Passo</span>
          <p>
          Foi aprovado? Compareça à IETEC 
          </p>
        </div>

      </CardsContainer>
    </StepsContainer>
  );
}
