import styled from "styled-components";

const SsavingValue = styled.section`
  display: flex;
  justify-content: space-around;

  p,
  h4,
  input {
    height: 1.5em;
    text-align: center;
    margin: 0.5em 0 0.5em 0;
    line-height: 1.5em;
  }
  h4,
  input {
    border: 2px solid var(--main-color);
    width: 15%;
  }
  input {
    padding: 0;
    background-color: var(--second-color);
    font-size: 16px;
  }
  .dd {
    background: var(--main-color);
    color: white;
  }
`;

export default SsavingValue;
