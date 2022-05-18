import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CharactersSection from "@components/CharactersSection";
import CharacterList from "@components/CharactersLists";
import { gameDetails } from "../../redux/games/gameReducer";
import { getCharacter } from "../../redux/games/characterReducer";
import SCharac from "./style";

export default function Character() {
  const { id } = useParams();
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
      <CharactersSection title="Mes personnages" />
      <CharacterList />
      <Link className="link" to={`/${id}/newcharacter`}>
        <button type="button"> Create </button>
      </Link>

      <CharactersSection title="Autres personnages" />
      {character.map(
        (chara) =>
          currentGame.id === chara.idJdr && (
            <CharacterList
              key={chara.id}
              lvl={chara.lvl}
              characterName={chara.nameCharacters}
            />
          )
      )}
    </SCharac>
  );
}
