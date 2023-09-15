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
        <div>

        <a href="tel:1238956402">(12) 3895-6402</a>
        <p>
           Av. Profº Malaquias de O. Freitas, 448 - Barra Velha, Ilhabela - SP, 11630-000 </p>
            </div>
        </div>
            <br></br>
        <div>
      <p>Todos os direitos reservados - Instituto Joga Junto </p>
          </div>
        </Container>
    </footer>
  );
};
