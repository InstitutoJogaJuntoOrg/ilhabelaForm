import { Card } from "./components/card";
import { ContainerCards } from "./components/styles";
import { ContainerHome, ContainerTitle } from "./styles";

export const HomePage = () => {
  return (
    <ContainerHome>
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/566850308702208001/1146146822100897905/Rectangle_35.png"
          alt="banner ilhabela IJJ"
        />
      </div>

      <section>
        <ContainerTitle className="InitialMessage">
          <h1>ILHABELA TECH</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            molestiae voluptas quod alias delectus unde perspiciatis illum
            officia ratione beatae nihil veniam a cumque ipsum facere vel esse,
            aspernatur ut!
          </span>
          <button>Inscrever-se</button>
        </ContainerTitle>
      </section>
      <ContainerCards>
        <Card
          titleCard="Sobre o projeto"
          image="https://cdn.discordapp.com/attachments/566850308702208001/1146214276537786438/Group.png"
          alt="image card ilhabela"
        />
        <Card
          titleCard="Sobre o QA"
          className="fullWidth"
          image="https://cdn.discordapp.com/attachments/566850308702208001/1146220725309546546/Rectangle_28.png"
          alt="image card ilhabela"
        />
      </ContainerCards>
    </ContainerHome>
  );
};
