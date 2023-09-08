import { Card } from "./components/card";
import StepsHome from "./components/steps";
import {
  About,
  ContainerCardLayout,
  ContainerHome,
  ContainerTitle,
} from "./styles";

export const HomePage = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis molestiae voluptas quod alias delectus unde
              perspiciatis illum officia ratione beatae nihil veniam a cumque
              ipsum facere vel esse, aspernatur ut!
            </span>
            <button>Inscrever-se</button>
          </ContainerTitle>
        </section>
        <ContainerCardLayout>
          <Card
            className="secondImg"
            titleCard="Sobre o curso"
            image="https://cdn.discordapp.com/attachments/566850308702208001/1146214276537786438/Group.png"
            key={2}
            alt="img"
          />
          <Card
            titleCard="Sobre o QA"
            image="https://cdn.discordapp.com/attachments/566850308702208001/1146220725309546546/Rectangle_28.png"
            key={1}
            alt="img"
          />
        </ContainerCardLayout>
        <About>
          <h1>Como se inscrever</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptate. Fuga ut ipsa expedita magnam. Deleniti aliquam porro facilis vitae illo veniam quos voluptas, illum cum explicabo, fuga repudiandae sequi?</p>
           <StepsHome />
        </About>
      </ContainerHome>
    </div>
  );
};
