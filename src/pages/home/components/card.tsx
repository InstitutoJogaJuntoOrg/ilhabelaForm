import { useState } from "react";
import { CardsProps } from "../../../interface/cards";
import { cardOne } from "../../../utils/cardone";
import {
  ContainerCard,
  Background,
  ImageWrapper,
  OpacityOverlay,
} from "./styles";

export const CardOne = ({
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
          {cardOne.map((item) => {
            return (
              <div className="Card mtop">
                <span className="titleCard">
                  <strong>{item.title}</strong>
                </span>
                <span>{item.description}</span>
                <span className="date">
                  <strong>Data de inicio:</strong> {item.startDate}
                </span>
                <span className="date">
                  <strong>Modalidade:</strong> {item.modalidade}
                </span>
                <span className="periods">
                  <strong>Periodos:</strong> {item.periods}
                </span>
                <span className="location">
                  <strong>Local:</strong> {item.location}
                </span>
              </div>
            );
          })}
        </OpacityOverlay>
      </ContainerCard>
    </Background>
  );
};
