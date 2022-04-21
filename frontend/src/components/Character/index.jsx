import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
  const { games } = useSelector((state) => ({
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
      <CharactersSection title="Autres personnages" />
      {games.map((character) => {
        return (
          <CharacterList
            lvl={character.lvl}
            characterName={character.nameCharacters}
          />
        );
      })}
    </SCharac>
  );
}
