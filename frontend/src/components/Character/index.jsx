import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CharactersSection from "@components/CharactersSection";
import CharacterList from "@components/CharactersLists";
import AsideChara from "@components/AsideChara";
import { gameDetails } from "../../redux/games/gameReducer";
import { getCharacter } from "../../redux/games/characterReducer";
import SCharac from "./style";

export default function Character() {
  const { id } = useParams();
  const { user } = useSelector((store) => store.userReducer);
  const [currentChara, setCurrentChara] = useState([]);
  const { currentGame } = useSelector((state) => {
    return (
      {
        ...state.gameReducer,
      } || {}
    );
  });

  const { characters } = useSelector((state) => state.characterReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameDetails(id));
  }, []);
  useEffect(() => {
    dispatch(getCharacter(id));
  }, []);

  return (
    <SCharac>
      <img src={currentGame.nameimg} alt={currentGame.name} />
      {user.id && <CharactersSection title="Mes personnages" buttonOn />}
      {characters.map(
        (chara) =>
          currentGame.id === chara.idJdr &&
          user.id === chara.idUser && (
            <Link
              to="/"
              key={chara.id}
              onMouseEnter={() => setCurrentChara(chara)}
            >
              <CharacterList
                lvl={chara.lvl}
                characterName={chara.nameCharacters}
                race={chara.name}
              />
            </Link>
          )
      )}
      {user.id ? (
        <CharactersSection title="Autres personnages" />
      ) : (
        <CharactersSection title="Personnages disponible" />
      )}
      {characters.map(
        (chara) =>
          currentGame.id === chara.idJdr &&
          user.id !== chara.idUser && (
            <Link
              to="/"
              key={chara.id}
              onMouseEnter={() => setCurrentChara(chara)}
            >
              <CharacterList
                lvl={chara.lvl}
                characterName={chara.nameCharacters}
                race={chara.name}
              />
            </Link>
          )
      )}
      <AsideChara
        charaName={currentChara.nameCharacters}
        classChara=""
        race={currentChara.name}
        lvl={currentChara.lvl}
        img={`./src/assets/${currentChara.img}`}
        size={currentChara.size}
        weight={currentChara.weight}
        speed={currentChara.speed}
        eyes={currentChara.eyes}
        align="CN"
        deeus={currentChara.deeus}
        sex={currentChara.sexe}
        hair={currentChara.hair}
        bio="iDonec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
      />
    </SCharac>
  );
}
