import React from "react";

export default function PokemonInfo({ data }) {
  // console.log(data)
  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className="info-container">
          <div className="poke-card">
            <p className="poke-hp">HP - {data.stats[0].base_stat}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt=""
            />
            <h1 className="poke-name">{data.name}</h1>
            <div className="poke-type">
              {data.types.map((poke) => {
                return <h2>{poke.type.name}</h2>;
              })}
            </div>
            <div className="poke-stats">
                <div>
                <h3>{data.stats[1].base_stat}</h3>
              <p>Attack</p>
                </div>
              <div>
              <h3>{data.stats[2].base_stat}</h3>
              <p>Defense</p>
              </div>
              <div>
              <h3>{data.stats[5].base_stat}</h3>
              <p>Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
