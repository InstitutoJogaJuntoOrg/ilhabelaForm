
import { CardsProps } from "../../../interface/cards";
import { ContainerCard, Background, ImageWrapper, OpacityOverlay } from "./styles";

export const Card = ({ image, alt, className, titleCard }: CardsProps) => {
  return (
    <Background>
      <ContainerCard className={className}>
        <ImageWrapper>
          <img src={image} alt={alt} />
        </ImageWrapper>
        <OpacityOverlay>
          <span className="titleOpacity">{titleCard}</span>
        </OpacityOverlay>
      </ContainerCard>
    </Background>
  );
};
