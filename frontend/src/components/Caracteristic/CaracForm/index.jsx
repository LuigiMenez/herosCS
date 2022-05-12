import { useState } from "react";
import PropTypes from "prop-types";
import SCaracForm from "./style";

export default function CaracForm({ carac }) {
  const [caracValue, setCaracValue] = useState(10);
  const [otherValue, setOtherValue] = useState(0);
  const hchange = (evt) => setCaracValue(evt.target.value);
  const otherChange = (evt) => setOtherValue(evt.target.value);

  const modByValue = () => {
    const parseCarac = parseInt(caracValue, 10);
    const parseOther = parseInt(otherValue, 10);
    return Math.floor((parseCarac + parseOther - 10) / 2);
  };

  return (
    <SCaracForm>
      <h4 className="cara">{carac}</h4>
      <p>{modByValue()}</p>
      <input type="number" value={caracValue} onChange={hchange} />
      <p>0</p>
      <input type="number" value={otherValue} onChange={otherChange} />
    </SCaracForm>
  );
}
CaracForm.propTypes = {
  carac: PropTypes.string,
};
CaracForm.defaultProps = {
  carac: "",
};
