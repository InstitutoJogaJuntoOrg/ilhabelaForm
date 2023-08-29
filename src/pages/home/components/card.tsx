import { CardsProps } from "../../../interface/cards";
import { ContainerCard, Background } from "./styles";

export const Card = ({ image, alt, className, titleCard }: CardsProps) => {
  return (
    <Background>
      <ContainerCard>
        <img className={className} src={image} alt={alt} />
      </ContainerCard>
      <div className="opacity">
        <span className="titleOpacity">{titleCard}</span>
      </div>
    </Background>
  );
};
