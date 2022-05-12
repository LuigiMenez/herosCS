import CsArray from "@components/CsArray";
import CaracForm from "./CaracForm";
import SCarac from "./style";

export default function Caractereristic() {
  return (
    <SCarac>
      <CsArray arrayTitle="Caractéristiques">
        <div className="dataName">
          <p>Carac</p>
          <p>Mod</p>
          <p>Valeur</p>
          <p>Racial</p>
          <p>Divers</p>
        </div>
        <CaracForm carac="FOR" />
        <CaracForm carac="DEX" />
        <CaracForm carac="CON" />
        <CaracForm carac="INT" />
        <CaracForm carac="SAG" />
        <CaracForm carac="CHA" />
      </CsArray>
    </SCarac>
  );
}
