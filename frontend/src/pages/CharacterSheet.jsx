import Caractereristic from "@components/Caracteristic";
import SCharac from "@components/Character/style";
import Saving from "@components/Saving";

import { useSelector } from "react-redux";

export default function CharacterSheet() {
  const { currentGame } = useSelector((state) => {
    return (
      {
        ...state.gameReducer,
      } || {}
    );
  });
  return (
    <SCharac>
      <img src={currentGame.nameimg} alt={currentGame.name} />
      <section className="array">
        <Caractereristic />
        <Saving />
      </section>
    </SCharac>
  );
}