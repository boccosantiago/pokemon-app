import * as C from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useState } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";

export const SearchField = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    props.setLoading(true);
    const requestPokemon = await fetchPokemon(inputValue.toLowerCase());

    requestPokemon.response.ok
      ? props.setPokemonList([requestPokemon.data])
      : props.setError(requestPokemon.error);

    props.setLoading(false);
    setInputValue("");
  };

  return (
    <C.Container onSubmit={handleSubmit}>
      <C.InputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Pokémon Name"
        required
      />
      <C.SearchButton>
        <SearchIcon />
      </C.SearchButton>
    </C.Container>
  );
};
