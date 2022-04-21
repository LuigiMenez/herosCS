import styled from "styled-components";
import { media } from "../../mediaQueries";

const SCharactersLists = styled.section`
  .section {
    width: 90vw;
    margin: 0.5em auto;
    display: flex;
    justify-content: space-between;
    font-size: 1.2em;
    padding: 0.5em;
    ${media("pad")`
    width: 60vw;`}
  }
  .class,
  .race {
    display: none;
    ${media("pad")`
    width: 60vw;
    display: flex;
    width: 40%;
    `}
  }
  .lvl {
    width: 15%;
  }
  p {
    width: 70%;
  }
`;

export default SCharactersLists;
