import AsideForm from "@components/AsideForm";
import Caractereristic from "@components/Caracteristic";
import SCharac from "@components/Character/style";
import NavChara from "@components/NavChara";
import Saving from "@components/Saving";

import { useSelector } from "react-redux";

export default function CharacterSheet() {
  const { currentGame } = useSelector((state) => {
    return state.gameReducer;
  });

  return (
    <SCharac>
      <img src={currentGame.nameimg} alt={currentGame.name} />
      <NavChara />
      <section className="array">
        <Caractereristic />
        <Saving />
      </section>
      <AsideForm />
    </SCharac>
  );
}
