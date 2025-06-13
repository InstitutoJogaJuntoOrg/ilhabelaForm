import { FormationInfo, ModuleContainer } from "./styles";

interface ModulesProps {
  hours: number;
}

export const Modules = ({ hours }: ModulesProps) => {
  return (
    <div>
      <ModuleContainer>
       
        <div>
          <h1>Hardskills</h1>
          <ul>
            <li>
              <span className="circle">1</span> Gestão de Projetos com Scrum
            </li>
            <li>
              <span className="circle">2</span>
              Testes Manuais
            </li>
            <li>
              <span className="circle">3</span>
              Python
            </li>
            <li>
              <span className="circle">4</span>
              Selenium
            </li>
          </ul>
        
        </div>

   <div>
    
   <h1>Softskills</h1>
          <ul>
            <li>
              <span className="circle">5</span> Autoconhecimento
            </li>
            <li>
              <span className="circle">6</span>
              Trabalho em equipe
            </li>
            <li>
              <span className="circle">7</span>
              Pensamento analítico
            </li>
          </ul>
         
   </div>
     

      </ModuleContainer>
     <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
     }}>
     <FormationInfo>
        <div className="image">
          <img src="/certificado.svg" alt="" />
        </div>
        <div className="content">
          <h2>+ de {hours} horas de formação</h2>
          <p>
            E diversos workshops com especialistas em finanças, recursos
            humanos, projetos, inovação, preparação para o mercado de trabalho e
            muito mais.
          </p>
        </div>
      </FormationInfo>
     </div>
    </div>
  );
};
