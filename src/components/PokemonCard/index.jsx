import { PokemonType } from "../PokemonType";
import * as C from "./styles";
import { ReactComponent as PokeballIcon } from "../../assets/icon-pokeball.svg";
import { pokemonTypes } from "../../pokemonTypes";
import { fetchPokemon } from "../../api/fetchPokemon";
import { SkeletonLoading } from "../helper/SkeletonLoading";

export const PokemonCard = (props) => {
  console.log(props.pokemon.id);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  const handleClick = async () => {
    const requestPokemon = await fetchPokemon(props.pokemon.name);
    props.setPokemonData(requestPokemon.data);
    props.setModal(true);
  };

  const formatPokemonId = (id) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  return (
    <C.Container>
      <C.CardOverlay color={color} />
      <C.PokemonImg>
        <SkeletonLoading src={imgUrl} alt={props.pokemon.name} />
      </C.PokemonImg>
      <C.PokemonNumber>{formatPokemonId(props.pokemon.id)}</C.PokemonNumber>
      <C.PokemonName>{props.pokemon.name}</C.PokemonName>
      <C.PokemonType>
        {props.pokemon.types.map(({ type }) => (
          <PokemonType key={type.name} type={type.name} tabIndex={false} />
        ))}
      </C.PokemonType>
      <C.PokemonFeatures>
        <C.PokemonWeight>
          <span>Weight</span>
          <div>
            <span>{`${props.pokemon.weight / 10}`} kg</span>
          </div>
        </C.PokemonWeight>
        <C.PokemonHeight>
          <span>Height</span>
          <div>
            <span>{`${props.pokemon.height / 10}`} m</span>
          </div>
        </C.PokemonHeight>
      </C.PokemonFeatures>
      <C.MoreDetailsButton color={color} onClick={handleClick}>
        <PokeballIcon />
        Details
      </C.MoreDetailsButton>
    </C.Container>
  );
};
