import PropTypes from "prop-types";
import { useState } from "react";
import SsavingValue from "./style";

export default function SavingValue({ ddValue }) {
  const [otherSave, setOtherSave] = useState(0);

  const hChange = (evt) => setOtherSave(evt.target.value);
  return (
    <SsavingValue>
      <h4 className="dd">{ddValue}</h4>
      <h4>0</h4>
      <p>=</p>
      <h4>0</h4>
      <p>+</p>
      <h4>0</h4>
      <p>+</p>
      <input type="number" value={otherSave} onChange={hChange} />
    </SsavingValue>
  );
}
SavingValue.propTypes = {
  ddValue: PropTypes.string,
};
SavingValue.defaultProps = {
  ddValue: "",
};
