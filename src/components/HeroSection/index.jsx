import * as C from "./styles";
import { ReactComponent as BoltIcon } from "../../assets/icon-bolt.svg";
import { ReactComponent as DividerIcon } from "../../assets/divider-electric.svg";
import { Waves } from "../Waves";
import { PokemonType } from "../PokemonType";
import { Header } from "../Layout/Header";
import { fetchPokemon } from "../../api/fetchPokemon";
import imgSrc from "../../assets/img-pikachu-min.png";

export const HeroSection = ({ setModal, setPokemonData }) => {
  const handleClick = async () => {
    const { data } = await fetchPokemon("pikachu");
    setPokemonData(data);
    setModal(true);
  };

  return (
    <C.Container>
      <Header />
      <div className="main-container">
        <C.Content>
          <C.PikachuData>
            <C.PikachuNumber>#025</C.PikachuNumber>
            <C.PikachuTypes>
              <PokemonType type={"electric"} tabIndex={false} />
            </C.PikachuTypes>
            <C.PikachuName>Pikachu</C.PikachuName>
            <C.PikachuDescription>
              Pikachu is a short, chubby rodent Pokémon. It is covered in yellow
              fur with two horizontal brown stripes on its back. It has a small
              mouth, long, pointed ears with black tips, and brown eyes. Each
              cheek is a red circle that contains a pouch for electricity
              storage. It has short forearms with five fingers on each paw, and
              its feet each have three toes. At the base of its lightning
              bolt-shaped tail is a patch of brown fur. A female will have a
              V-shaped notch at the end of its tail, which looks like the top of
              a heart. It is classified as a quadruped, but it has been known to
              stand and walk on its hind legs.
            </C.PikachuDescription>
            <C.MoreDetailsButton onClick={handleClick}>
              <BoltIcon />
              Details
            </C.MoreDetailsButton>
          </C.PikachuData>

          <C.Divider>
            <DividerIcon />
          </C.Divider>

          <C.PikachuImg>
            <img src={imgSrc} width="488" height="528" alt="Pikachu" />
          </C.PikachuImg>
        </C.Content>
      </div>

      <Waves />
    </C.Container>
  );
};
