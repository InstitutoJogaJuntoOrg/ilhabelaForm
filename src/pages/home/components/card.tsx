import { useState } from "react";
import { CardsProps } from "../../../interface/cards";
import {
  ContainerCard,
  Background,
  ImageWrapper,
  OpacityOverlay,
} from "./styles";

export const Card = ({ image, alt, className, titleCard, description }: CardsProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Background>
      <ContainerCard
        className={className}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageWrapper style={{ opacity: hovered ? 0 : 1 }}>
          <img src={image} alt={alt} />
          <OpacityOverlay style={{ display: hovered ? "none" : "block" }}>
            <span className="titleOpacity">{titleCard}</span>
          </OpacityOverlay>
        </ImageWrapper>
        <OpacityOverlay style={{ display: hovered ? "block" : "none" }}>
          <p>{description}</p>
        </OpacityOverlay>
      </ContainerCard>
    </Background>
  );
};
