import CsArray from "@components/CsArray";
import SavingValue from "./SavingValue";
import SSaving from "./style";

export default function Saving() {
  return (
    <SSaving>
      <CsArray arrayTitle="Sauvegarde">
        <div className="save">
          <h4 className="head">total</h4>
          <h4 className="head">JDS de base</h4>
          <h4 className="head">Mod</h4>
          <h4 className="head">Mod divers</h4>
        </div>
        <SavingValue ddValue="Vigueur" />
        <SavingValue ddValue="Réflexe" />
        <SavingValue ddValue="Volonté" />
      </CsArray>
    </SSaving>
  );
}
