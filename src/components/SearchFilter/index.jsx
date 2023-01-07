import * as C from "./styles";
import { useEffect, useState } from "react";
import { fetchPokemonByType } from "../../api/fetchPokemonByType";
import { Slide } from "../Slide";
import { PokemonType } from "../PokemonType";
import { pokemonTypes } from "../../pokemonTypes";

export const SearchFilter = (props) => {
  const [selectedType, setSelectedType] = useState("");

  const handleClick = async (e) => {
    const typeName = e.currentTarget.value;
    setSelectedType(typeName);
    props.setPokemonAmount(9);
    props.setLoading(true);
    props.setPokemonList(await fetchPokemonByType(typeName));
    props.setLoading(false);
    props.setShowPagination(false);
  };

  useEffect(() => {
    if (selectedType) {
      (async () => {
        props.setDisabledButton(true);
        props.setPokemonList(
          await fetchPokemonByType(selectedType, props.pokemonAmount)
        );
        props.setDisabledButton(false);
      })();
    }
  }, [props.pokemonAmount]);

  return (
    <C.Container>
      <C.Title>Search By Type</C.Title>
      <Slide>
        {pokemonTypes.map(({ name }) => (
          <PokemonType
            key={name}
            type={name}
            tabIndex={true}
            handleClick={handleClick}
          />
        ))}
      </Slide>
    </C.Container>
  );
};
