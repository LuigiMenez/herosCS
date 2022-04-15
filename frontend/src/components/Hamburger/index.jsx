import PropTypes from "prop-types";
import Sburger from "./style";

export default function Hamburger({ isOpen }) {
  return (
    <Sburger className="hamburger" open={isOpen}>
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </Sburger>
  );
}
Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
