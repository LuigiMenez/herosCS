import styled from "styled-components";

const SForm = styled.form`
  display: flex;
  padding: 0.5em;
  .form {
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    input {
      width: 150%;
      margin: auto;
    }
    label {
      margin-top: 1em;
      display: flex;
      flex-direction: column;
    }
  }
`;
export default SForm;
