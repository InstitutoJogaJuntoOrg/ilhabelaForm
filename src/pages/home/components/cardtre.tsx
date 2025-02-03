import { useState } from "react";
import { CardsProps } from "../../../interface/cards";
import { cardTree } from "../../../utils/cardone";
import {
  ContainerCard,
  Background,
  ImageWrapper,
  OpacityOverlay,
} from "./styles";

export const CardTree = ({
  image,
  alt,
  className,
  titleCard,
}: CardsProps) => {
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
          {cardTree.map((item) => {
            return (
              <div className="Card scroll mtop">
                <span className="titleCard">
                  <strong>{item.title}</strong>
                </span>
                <span>{item.description}</span>
              
              </div>
            );
          })}
        </OpacityOverlay>
      </ContainerCard>
    </Background>
  );
};
