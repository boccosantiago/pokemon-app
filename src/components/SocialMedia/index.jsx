import * as Styled from "./styles";
import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";
import { ReactComponent as TelegramLogo } from "../../assets/logo-telegram.svg";

export const SocialMedia = () => {
  return (
    <Styled.Container>
      <li>
        <Styled.Link href="https://www.linkedin.com/in/santiago-bocco/">
          <LinkedinLogo />
        </Styled.Link>
      </li>
      <li>
        <Styled.Link href="https://github.com/boccosantiago">
          <GithubLogo />
        </Styled.Link>
      </li>
    </Styled.Container>
  );
};
