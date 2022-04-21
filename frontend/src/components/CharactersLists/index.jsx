import PropTypes from "prop-types";
import SCharactersLists from "./style";

export default function CharacterList({
  lvl,
  characterName,
  classCharacter,
  race,
}) {
  return (
    <SCharactersLists>
      <div className="section">
        <p className="lvl">{lvl}</p>
        <p className="name">{characterName}</p>
        <p className="class">{classCharacter}</p>
        <p className="race">{race}</p>
      </div>
    </SCharactersLists>
  );
}
CharacterList.propTypes = {
  lvl: PropTypes.number.isRequired,
  characterName: PropTypes.string,
  classCharacter: PropTypes.string,
  race: PropTypes.string,
};
CharacterList.defaultProps = {
  characterName: "",
  classCharacter: "",
  race: "",
};
