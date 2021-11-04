import axios from "axios";
import { useState } from "react";
import Input from "../Input";

const pokemonApiUrl = "https://pokeapi.co/api/v2";

function Pokemon() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    try {
      const result = await axios.get(`${pokemonApiUrl}/pokemon/${pokemonName}`);
      setPokemonAbilities(result.data.abilities);
    } catch (error) {
      setPokemonAbilities([]);
      setError(error);
    }
  };

  return (
    <>
      <div>Procure seu pokemon</div>
      <Input onChange={(e) => setPokemonName(e.target.value)}>
        Pokemon name
      </Input>
      <button onClick={handleFetch}>Fetch pokemons abilities</button>
      {error && <span>Something went wrong</span>}
      <ul>
        {pokemonAbilities.map(({ ability }) => (
          <li key={ability.name}>
            <a href={ability.url}> {ability.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Pokemon;
