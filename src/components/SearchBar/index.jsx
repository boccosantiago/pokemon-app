import * as C from "./styles";
import { SearchFilter } from "../SearchFilter";
import { SearchField } from "../SearchField";
import { HomeButton } from "../HomeButton";

export const SearchBar = (props) => {
  return (
    <div className="main-container" ref={props.searchBarRef}>
      <C.Container>
        <HomeButton
          setPokemonList={props.setPokemonList}
          setLoading={props.setLoading}
          setPage={props.setPage}
          setShowPagination={props.setShowPagination}
          disabledButton={props.disabledButton}
          setDisabledButton={props.setDisabledButton}
        />
        <SearchFilter
          setPokemonList={props.setPokemonList}
          pokemonAmount={props.pokemonAmount}
          setPokemonAmount={props.setPokemonAmount}
          setLoading={props.setLoading}
          setShowPagination={props.setShowPagination}
          setDisabledButton={props.setDisabledButton}
        />
        <SearchField
          setPokemonList={props.setPokemonList}
          setError={props.setError}
          setLoading={props.setLoading}
        />
      </C.Container>
    </div>
  );
};
