import { SocialMedia } from "../../SocialMedia";
import * as Styled from "./styles";

export const Footer = () => {
  return (
    <div className="main-container">
      <Styled.Container>
        <Styled.Copy>
          <span>All rights reserved.</span>
          <span>pokeapi.co</span>
        </Styled.Copy>
        <SocialMedia />
      </Styled.Container>
    </div>
  );
};
