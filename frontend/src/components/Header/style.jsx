import styled from "styled-components";

const SHeader = styled.header`
  height: 10vh;
  background-color: var(--second-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5em;

  h1 {
    color: var(--main-color);
    text-align: center;
    font-size: 3.5em;
    font-weight: bold;
  }

  .auth {
    position: absolute;
    top: 1em;
    right: 0.5em;
    height: 25px;
    border-radius: 15px;
    font-size: 16px;
  }
`;

export default SHeader;
