import styled from "styled-components";
import { media } from "../../mediaQueries";

const SCharactersLists = styled.section`
  h2 {
    border: 5px solid #2cabd8;
    background: #201853;
    color: white;
    font-size: 1.5em;
    padding: 0.5em;
    margin: 0.5em;
    text-align: center;
    ${media("pad")`
    width: 60vw;
    margin: 2em auto 1em;`}
  }
  .section {
    width: 90vw;
    margin: 0.5em auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #201853;
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
