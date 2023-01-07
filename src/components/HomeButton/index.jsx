import * as C from "./styles";
import { ReactComponent as HomeIcon } from "../../assets/icon-home.svg";
import { fetchPokemonList } from "../../api/fetchPokemonList";

export const HomeButton = (props) => {
  const handleClick = async () => {
    props.setLoading(true);
    props.setDisabledButton(true);
    props.setPokemonList(await fetchPokemonList(1));
    props.setLoading(false);
    props.setDisabledButton(false);
    props.setPage(1);
    props.setShowPagination(true);
  };

  return (
    <C.HomeButton
      className="button"
      onClick={handleClick}
      disabled={props.disabledButton ? true : false}
    >
      <HomeIcon />
      Home
    </C.HomeButton>
  );
};
