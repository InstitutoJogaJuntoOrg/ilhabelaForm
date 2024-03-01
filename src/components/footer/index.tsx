import { Container } from "./styles";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <Link to={"/"}>
            <img
              src="https://media.licdn.com/dms/image/C560BAQHqBelcvq8ocw/company-logo_200_200/0/1656708777466?e=2147483647&v=beta&t=0_pf68Bkigp0lmy3Feb6uVPEhkDIgrxDKUP2aSq36-8"
              alt="ilhabela prefeitura"
            />
          </Link>
          <div>
            <a
              href="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/Aviso+de+Privacidade+IlhaBela+Tech+IV.pdf"
              target="blank"
            >
              {" "}
              Política de Privacidade{" "}
            </a>
            <a
              href="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/TERMOS+DE+USO+SITE+ILHABELA+TECH+II.pdf"
              target="blank"
            >
              {" "}
              Termos de uso do site{" "}
            </a>
            <Link to={"/portal-do-titular"}>Portal do titular</Link>
            
          </div>
          <div>
            
            <p>Instituto JogaJunto</p>
            <a href="tel:1238956402">Telefone: (12) 3895-6402</a>
            <p>
              Endereço: Av. Profº Malaquias de O. Freitas, 448 - Barra Velha,
              Ilhabela - SP, 11630-000{" "}
            </p>
          </div>
        </div>
       <a style={{
            textDecoration: 'underline',
            color: '#000'
           }} href="https://wa.me/5511945950731" target={"_blank"}>Ajuda</a>
        <div>
          
          <p>Todos os direitos reservados - Instituto Joga Junto </p>
        </div>
      </Container>
    </footer>
  );
};
