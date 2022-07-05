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
    border: 2px solid ${(props) => props.theme.primary};
    margin: 0.5em 0 0.5em 0;
    line-height: 1.5em;
  }
  input {
    background-color: var(--second-color);
    padding: 0;
  }

  .cara {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.textColor2};
  }
`;
export default SCaracForm;
