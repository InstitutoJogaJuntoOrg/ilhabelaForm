import { FormationInfo, ModuleContainer } from "./styles";

export const Modules = ({}) => {
  return (
    <>
      <ModuleContainer>
        <div>
          <h1>FORMAÇÃO BÁSICA</h1>
          <ul>
            <li>
              <span className="circle">1</span> Autoconhecimento
            </li>
            <li>
              <span className="circle">2</span>
              Gestão de Python
            </li>
            <li>
              <span className="circle">3</span>
              Testes Manuais
            </li>
          </ul>
          <footer>
            Certificado <span>QA Básico</span>
          </footer>
        </div>

        <div className="secondCard">
          <h1>FORMAÇÃO BÁSICA</h1>
          <ul>
            <li>
              <span className="circle">4</span> Autoconhecimento
            </li>
            <li>
              <span className="circle">5</span>
              Gestão de Python
            </li>
            <li>
              <span className="circle">6</span>
              Testes Manuais
            </li>
          </ul>
          <footer>
            Certificado <span>QA Avançado</span>
          </footer>
        </div>
      </ModuleContainer>
     <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
     }}>
     <FormationInfo>
        <div className="image">
          <img src="/public/certificado.svg" alt="" />
        </div>
        <div className="content">
          <h2>+ de 140 horas de formação</h2>
          <p>
            E diversos workshops com especialistas em finanças, recursos
            humanos, projetos, inovação, preparação para o mercado de trabalho e
            muito mais.
          </p>
        </div>
      </FormationInfo>
     </div>
    </>
  );
};
