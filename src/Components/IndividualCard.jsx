import React, { useState } from "react";

const IndividualCard = ({ item, infoPokemon }) => {
    const [pokeback, setPokeBack] = useState([]);
  return (
    <div className="card" onClick={() => infoPokemon(item)}>
      <img src={item.sprites.front_default} alt="" />
      <h3>{item.name}</h3>
    </div>
  );
};

export default IndividualCard;
