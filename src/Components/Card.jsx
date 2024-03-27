import React from "react";
import IndividualCard from "./IndividualCard";

export default function Card({ pokemon, loading, infoPokemon }) {
  console.log(pokemon)
  return (
    <>
      {loading ? (
        <h1>Loading data...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <IndividualCard item={item} infoPokemon={infoPokemon} />
          );
        })
      )}
    </>
  );
}
