import PropTypes from "prop-types";
import SAsideChara from "./style";

export default function AsideChara({
  charaName,
  classChara,
  race,
  lvl,
  img,
  size,
  weight,
  speed,
  eyes,
  align,
  deeus,
  sex,
  hair,
  bio,
}) {
  return (
    <SAsideChara>
      <h2>{charaName}</h2>
      <div className="type">
        <p>{classChara}</p>
        <p>{race}</p>
        <p>lvl: {lvl}</p>
      </div>
      <img className="charaImg" src={img} alt={charaName} />
      <div className="container">
        <div className="columnLeft">
          <p>Taille: {size}</p>
          <p>Poid: {weight} kg</p>
          <p>Vitesse: {speed} m</p>
          <p>Yeux: {eyes}</p>
        </div>
        <div className="columnRight">
          <p>Alignement: {align}</p>
          <p>Divinité: {deeus}</p>
          <p>Sexe: {sex}</p>
          <p>Cheveux: {hair}</p>
        </div>
      </div>
      <section>
        <h3>Biographie :</h3>
        <p className="bio">{bio}</p>
      </section>
    </SAsideChara>
  );
}
AsideChara.propTypes = {
  charaName: PropTypes.string,
  classChara: PropTypes.string,
  race: PropTypes.string,
  lvl: PropTypes.number,
  img: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.number,
  speed: PropTypes.number,
  eyes: PropTypes.string,
  align: PropTypes.string,
  deeus: PropTypes.string,
  sex: PropTypes.string,
  hair: PropTypes.string,
  bio: PropTypes.string,
};
AsideChara.defaultProps = {
  charaName: "",
  classChara: "",
  race: "",
  lvl: 1,
  img: "",
  size: 1,
  weight: 1,
  speed: 1,
  eyes: "",
  align: "",
  deeus: "",
  sex: "",
  hair: "",
  bio: "",
};
