import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonByType = async (type, pokemonAmount = 9) => {
  const URL = `https://pokeapi.co/api/v2/type/${type}`;

  const response = await fetch(URL);
  const data = await response.json();

  const promises = data.pokemon
    .filter((item, index) => index + 1 <= pokemonAmount && item)
    .map(async (item) => (await fetchPokemon(item.pokemon.name)).data);

  const pokemonList = Promise.all(promises);

  return pokemonList;
};
