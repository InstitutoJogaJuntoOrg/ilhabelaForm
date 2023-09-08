import { Steps } from "primereact/steps";
import { useState } from "react";
import { Card } from "./components/card";
import { ContainerCard } from "./components/styles";
import {
  About,
  ContainerCardLayout,
  ContainerHome,
  ContainerTitle,
  StepsCustom,
} from "./styles";

export const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      label: "Dados",
    },
    {
      label: "Social",
    },
    {
      label: "Prova",
    },
  ];

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
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            omnis architecto magnam dignissimos iusto possimus ducimus nihil
            minus perferendis, fugiat, tempore nam aliquid vel itaque quibusdam
            laborum, et consequatur libero.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            omnis architecto magnam dignissimos iusto possimus ducimus nihil
            minus perferendis, fugiat, tempore nam aliquid vel itaque quibusdam
            laborum, et consequatur libero.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            omnis architecto magnam dignissimos iusto possimus ducimus nihil
            minus perferendis, fugiat, tempore nam aliquid vel itaque quibusdam
            laborum, et consequatur libero.
          </span>
          <StepsCustom>
            <div>
              <h1>1</h1>
            </div>
            <div>
              <h1>2</h1>
            </div>
            <div>
              <h1>3</h1>
            </div>
          </StepsCustom>
        </About>
      </ContainerHome>
    </div>
  );
};
