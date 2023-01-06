import { SocialMedia } from "../../SocialMedia";
import * as Styled from "./styles";

export const Footer = () => {
  return (
    <div className="main-container">
      <Styled.Container>
        <Styled.Copy>
          <span>Santiago Bocco, All rights reserved.</span>
          <span>Data obtained from pokeapi.co</span>
        </Styled.Copy>
        <SocialMedia />
      </Styled.Container>
    </div>
  );
};
