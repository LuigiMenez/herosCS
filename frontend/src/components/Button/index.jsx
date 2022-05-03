import PropTypes from "prop-types";
import Sbutton from "@components/Button/style";

export default function Button({ title, func }) {
  return (
    <Sbutton type="button" onClick={func}>
      {title}
    </Sbutton>
  );
}
Button.propTypes = {
  title: PropTypes.string,
  func: PropTypes.func,
};
Button.defaultProps = {
  title: "",
  func: () => {},
};
