import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CharactersSection from "@components/CharactersSection";
import CharacterList from "@components/CharactersLists";
import AsideChara from "@components/AsideChara";
import { gameDetails } from "../../redux/games/gameReducer";
import { getCharacter } from "../../redux/games/characterReducer";
import SCharac from "./style";

export default function Character() {
  const { id } = useParams();
  const { user } = useSelector((store) => store.userReducer);
  const { currentGame } = useSelector((state) => {
    return (
      {
        ...state.gameReducer,
      } || {}
    );
  });

  const { character } = useSelector((state) => ({
    ...state.characterReducer,
  }));

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
      {character.map(
        (chara) =>
          currentGame.id === chara.idJdr &&
          user.id === chara.idUser && (
            <CharacterList
              key={chara.id}
              lvl={chara.lvl}
              characterName={chara.nameCharacters}
              race={chara.name}
            />
          )
      )}
      {user.id ? (
        <CharactersSection title="Autres personnages" />
      ) : (
        <CharactersSection title="Personnages disponible" />
      )}
      {character.map(
        (chara) =>
          currentGame.id === chara.idJdr &&
          user.id !== chara.idUser && (
            <CharacterList
              key={chara.id}
              lvl={chara.lvl}
              characterName={chara.nameCharacters}
              race={chara.name}
            />
          )
      )}
      <AsideChara />
    </SCharac>
  );
}
