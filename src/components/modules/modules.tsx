import { FormationInfo, ModuleContainer } from "./styles";

export const Modules = ({}) => {
  return (
    <div>
      <ModuleContainer>
       
        <div>
          <h1>Hardskills</h1>
          <ul>
            <li>
              <span className="circle">1</span> SQL
            </li>
            <li>
              <span className="circle">2</span>
              Metabase
            </li>
            <li>
              <span className="circle">3</span>
              Redshift
            </li>
            <li>
              <span className="circle">4</span>
              Estatística
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
          <h2>+ de 170 horas de formação</h2>
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
