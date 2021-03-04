import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  /**
   * Component logic goes here
   */

  const [randomValue, setRandomValue] = useState(5);
  const [query, updateQuery] = useState("");
  const [match, setMatch] = useState(0);

  const getRandomValue = () => {
    const newRandomValue = Math.floor(Math.random() * pokemons.length);
    console.log(newRandomValue);
    setRandomValue(newRandomValue);
  };

  useEffect(() => {
    alert("Name matches, play again?");
  }, [match]);

  if (query === pokemons[randomValue]) {
    console.log(query);
    console.log(match);
    setMatch(match + 1);
    getRandomValue();
    console.log(`A${randomValue}`);
    updateQuery("");
    // setMatch(true);
    // setMatch(0);
  }
  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>
          {/** random pokemon name should appear here */ pokemons[randomValue]}
        </strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        value={query}
        type="text"
        placeholder="Enter the Pokémon name"
        onChange={(event) => updateQuery(event.target.value)}
      />
      <p>{query}</p>
    </div>
  );
}
