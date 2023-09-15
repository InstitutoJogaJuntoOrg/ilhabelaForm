import { Container } from "./styles";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    
    <footer>
      <Container>
        <div>

      <Link to={"/"}>
          <img
            src="https://cdn.discordapp.com/attachments/566850308702208001/1146230197813788702/Vector_1.png"
            alt="ilhabela prefeitura"
            />
        </Link>
        <a href="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/Aviso+de+Privacidade+IlhaBela+Tech.pdf" target="blank"> Política de Privacidade </a>
            </div>
            <br></br>
        <div>
      <p>Todos os direitos reservados - Instituto Joga Junto </p>
          </div>
        </Container>
    </footer>
  );
};
