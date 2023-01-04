import * as Styled from "./styles";
import { ReactComponent as PokemonLogo } from "../../../assets/logo-pokemon.svg";
import { SocialMedia } from "../../SocialMedia";

export const Header = () => {
  return (
    <div className="main-container">
      <Styled.Container>
        <PokemonLogo />
        <SocialMedia />
      </Styled.Container>
    </div>
  );
};
