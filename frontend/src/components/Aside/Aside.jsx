import PropTypes from "prop-types";
import SAside from "./style";

export default function Aside({ bgImg, description, nameImg, nameJdr }) {
  return (
    <SAside img={bgImg}>
      <div className="nameTitle">
        <img src={nameImg} alt={nameJdr} />
      </div>
      {description && <p>{description}</p>}
    </SAside>
  );
}
Aside.propTypes = {
  bgImg: PropTypes.string,
  description: PropTypes.string,
  nameImg: PropTypes.string,
  nameJdr: PropTypes.string,
};
Aside.defaultProps = {
  bgImg: "",
  description: "",
  nameImg: "",
  nameJdr: "",
};
