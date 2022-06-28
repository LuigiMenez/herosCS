import tsuna from "@assets/tsunae.jpg";
import SAsideChara from "./style";

export default function AsideChara() {
  return (
    <SAsideChara>
      <h2>Name</h2>
      <div className="type">
        <p>Classe</p>
        <p>Race</p>
        <p>lvl: 2</p>
      </div>
      <img className="charaImg" src={tsuna} alt="" />
      <div className="container">
        <div className="columnLeft">
          <p>Taille: 1.60m</p>
          <p>Poid: 55 kg</p>
          <p>Vitesse: 9 m</p>
          <p>Yeux: Bleu</p>
        </div>
        <div className="columnRight">
          <p>Alignement: CN</p>
          <p>Divinité: Dieu</p>
          <p>Sexe: F or M</p>
          <p>Cheveux: Noir</p>
        </div>
      </div>
      <section>
        <h3>Biographie :</h3>
        <p className="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          deserunt perspiciatis laboriosam quisquam quia necessitatibus totam
          tempora nisi magnam debitis? Earum placeat tempora voluptatem,
          voluptatibus explicabo corporis sunt at velit.
        </p>
      </section>
    </SAsideChara>
  );
}
