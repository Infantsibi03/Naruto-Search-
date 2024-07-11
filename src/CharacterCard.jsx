import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="Character">
      <div>
        <p>{character.name}</p>
      </div>
      <div>
        <p>ID: {character.id}</p>
        <p>Jutsu: {character.jutsu}</p>
        <p>Debut: {character.debut.novel}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
