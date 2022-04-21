import PropTypes from "prop-types";
import SCharactersSection from "./style";

export default function CharactersSection({ title }) {
  return (
    <SCharactersSection>
      <>
        <h2>{title}</h2>
        <div className="section">
          <p className="lvl">lvl</p>
          <p className="name">Nom</p>
          <p className="class">Classe</p>
          <p className="race">Race</p>
        </div>
      </>
    </SCharactersSection>
  );
}
CharactersSection.propTypes = {
  title: PropTypes.string,
};
CharactersSection.defaultProps = {
  title: "",
};
