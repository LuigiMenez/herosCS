import styled from "styled-components";

const SCaracForm = styled.form`
  display: flex;
  justify-content: space-around;
  input {
    font-size: 16px;
  }

  h4,
  p,
  input {
    height: 1.5em;
    width: 15%;
    text-align: center;
    border: 2px solid var(--main-color);
    margin: 0.5em 0 0.5em 0;
    line-height: 1.5em;
  }
  input {
    background-color: var(--second-color);
    padding: 0;
  }

  .cara {
    background: var(--main-color);
    color: white;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* Chrome */
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Opéra*/
  input::-o-inner-spin-button,
  input::-o-outer-spin-button {
    -o-appearance: none;
    margin: 0;
  }
`;
export default SCaracForm;
