import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import "./styles";
import { CardsContainer, StepsContainer } from "./styles";

export default function StepsHome() {
  const items: MenuItem[] = [
    {
      label: "",
    },
    {
      label: "",
    },
    {
      label: "",
    },
  ];

  return (
    <StepsContainer>
       <Steps model={items} />

      <CardsContainer>
        <div>
        <span className="pass">1 Passo</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            doloribus assumenda saepe ut facilis non debitis. Accusantium quidem
            natus ratione quisquam? Tempora, molestiae. Magni id suscipit
            dignissimos possimus quidem distinctio.
          </p>
        </div>
        <div>
        <span className="pass">2 Passo</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            doloribus assumenda saepe ut facilis non debitis. Accusantium quidem
            natus ratione quisquam? Tempora, molestiae. Magni id suscipit
            dignissimos possimus quidem distinctio.
          </p>
        </div>
        <div>
        <span className="pass">3 Passo</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            doloribus assumenda saepe ut facilis non debitis. Accusantium quidem
            natus ratione quisquam? Tempora, molestiae. Magni id suscipit
            dignissimos possimus quidem distinctio.
          </p>
        </div>
      </CardsContainer>
    </StepsContainer>
  );
}
