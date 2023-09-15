import { useState } from "react";
import { CardsProps } from "../../../interface/cards";
import { cardTwo } from "../../../utils/cardtwo";
import {
  ContainerCard,
  Background,
  ImageWrapper,
  OpacityOverlay,
} from "./styles";

export const CardTwo = ({ image, alt, className, titleCard }: CardsProps) => {
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
            <span className="titleOpacity titletwo">{titleCard}</span>
          </OpacityOverlay>
        </ImageWrapper>
        <OpacityOverlay style={{ display: hovered ? "block" : "none" }}>
          {cardTwo.map((item) => {
            return (
              <div className="Card">
                <span className="titleCard mtoptwo">
                  <strong>{item.Programa}</strong>
                </span>
                {item.Fases.map((fase, index) => (
                  <div key={index}>
                    <span className="phaseTitle tiitlecard">
                      <strong>
                        Fase {index + 1} - {fase.Nome}
                      </strong>
                    </span>
                    <br />
                    {fase.Módulos && (
                      <span className="location">
                        <strong>Módulos:</strong> {fase.Módulos.join(", ")}{" "}
                        <br />
                      </span>
                    )}

                    {fase.Duração && (
                      <span className="date">
                        <strong>Duração:</strong> {fase.Duração} <br />
                      </span>
                    )}

                    {fase.Conteúdo && (
                      <span className="">
                        <strong>Conteúdo:</strong> {fase.Conteúdo} <br />
                      </span>
                    )}

                    {fase.Temas && (
                      <span className="">
                        <strong>Temas:</strong> {fase.Temas.join(", ")} <br />
                      </span>
                    )}

                    {fase.Workshops && (
                      <span className="location">
                        <strong>Workshops:</strong> {fase.Workshops.join(", ")}
                      </span>
                    )}
                    {fase.Descrição && (
                      <span className="desc">
                        <strong>Descrição:</strong> {fase.Descrição}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </OpacityOverlay>
      </ContainerCard>
    </Background>
  );
};
