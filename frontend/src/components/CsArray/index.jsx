import PropTypes from "prop-types";
import ScsArray from "./style";

export default function CsArray({ arrayTitle, children }) {
  return (
    <ScsArray>
      <h2>{arrayTitle}</h2>
      <div className="carac">{children}</div>
    </ScsArray>
  );
}
CsArray.propTypes = {
  arrayTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};
CsArray.defaultProps = {
  arrayTitle: "",
};
