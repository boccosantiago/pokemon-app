import UsePagination from "../Pagination";
import { PokemonCard } from "../PokemonCard";
import * as Styled from "./styles";
import { ReactComponent as AddIcon } from "../../assets/icon-add.svg";
import { ReactComponent as UpArrowIcon } from "../../assets/icon-arrow-up.svg";
import { ErrorMessage } from "../helper/ErrorMessage";
import { Loading } from "../helper/Loading";

export const Pokedex = (props) => {
  if (props.error) return <ErrorMessage />;
  else
    return (
      <Styled.Wrapper>
        <div className="main-container">
          {props.loading ? (
            <Loading />
          ) : (
            <Styled.PokemonList>
              {props.pokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  setModal={props.setModal}
                  setPokemonData={props.setPokemonData}
                />
              ))}
            </Styled.PokemonList>
          )}
          {props.pokemonList.length > 1 &&
            props.loading === false &&
            props.showPagination === true && (
              <UsePagination
                setPokemonList={props.setPokemonList}
                setLoading={props.setLoading}
                searchBarRef={props.searchBarRef}
                page={props.page}
                setPage={props.setPage}
              />
            )}
          {props.pokemonList.length > 1 &&
            props.loading === false &&
            props.showPagination === false && (
              <Styled.ButtonContainer>
                {props.pokemonAmount < 54 && (
                  <button
                    className="button"
                    onClick={() =>
                      props.setPokemonAmount(props.pokemonAmount + 9)
                    }
                    disabled={props.disabledButton ? true : false}
                  >
                    <AddIcon />
                    Show more Pokemons
                  </button>
                )}

                <button
                  className="button"
                  onClick={() => {
                    window.scrollTo({
                      top: props.searchBarRef.current.offsetTop - 56,
                    });
                  }}
                >
                  <UpArrowIcon />
                </button>
              </Styled.ButtonContainer>
            )}
        </div>
      </Styled.Wrapper>
    );
};
