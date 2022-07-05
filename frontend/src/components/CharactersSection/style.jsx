import styled from "styled-components";
import { media } from "../../mediaQueries";

const SCharactersLists = styled.section`
  .myCharacter {
    display: flex;
    justify-content: flex-end;
    border: 5px solid ${(props) => props.theme.second};
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.textColor2};
    font-size: 1.5em;
    padding: 0.5em;
    margin: 0.5em;
    ${media("pad")`
    width: 60vw;
    margin: 2em auto 1em;`}
    button {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      text-align: center;
      border: 3px solid ${(props) => props.theme.second};
      font-size: large;
      background-color: ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.textColor2};
    }
    h2 {
      margin: auto;
    }
  }

  .section {
    width: 90vw;
    margin: 0.5em auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${(props) => props.theme.primary};
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
  .userOff {
    border: red 5px solid;
  }
  .lvl {
    width: 15%;
  }
  p {
    width: 70%;
  }
`;

export default SCharactersLists;
