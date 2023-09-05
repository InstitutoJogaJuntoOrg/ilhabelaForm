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
    </ContainerHome>
  );
};
