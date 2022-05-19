import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import SCharactersSection from "./style";

export default function CharactersSection({ title, buttonOn }) {
  const { id } = useParams();
  return (
    <SCharactersSection>
      <div className="myCharacter">
        <h2>{title}</h2>
        {buttonOn ? (
          <Link className="link" to={`/${id}/newcharacter`}>
            <button type="button"> + </button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="section">
        <p className="lvl">lvl</p>
        <p className="name">Nom</p>
        <p className="class">Classe</p>
        <p className="race">Race</p>
      </div>
    </SCharactersSection>
  );
}
CharactersSection.propTypes = {
  title: PropTypes.string,
  buttonOn: PropTypes.bool,
};
CharactersSection.defaultProps = {
  title: "",
  buttonOn: true,
};
