import React from "react";
import Status from "../../components/Status/Status";
import {
  CardContainer,
  CardTitle,
  CardSeparator,
  CardSubtitle,
  CardPara,
} from "./StyleCard";

const Card = ({ character }) => {
  return (
    <CardContainer className="card h-100">
      <img src={character.image} alt="" />
      <CardTitle className="card-title">{character.name}</CardTitle>
      <CardSeparator />
      <CardPara>
        <CardSubtitle>Species: </CardSubtitle>
        {character.species}
      </CardPara>
      <CardPara>
        <CardSubtitle>Gender: </CardSubtitle>
        {character.gender}
      </CardPara>
      <CardPara>
        <CardSubtitle>Location: </CardSubtitle>
        {character.location.name}
      </CardPara>
      <Status status={character.status} />
    </CardContainer>
  );
};

export default React.memo(Card);
