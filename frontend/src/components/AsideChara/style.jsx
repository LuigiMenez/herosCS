import styled from "styled-components";
import { media } from "../../mediaQueries";

const SAsideChara = styled.section`
  background: ${(props) => props.theme.primary};
  border-left: 5px solid ${(props) => props.theme.second};
  display: none;
  position: absolute;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30vw;
  height: 100vh;
  color: ${(props) => props.theme.textColor2};
  ${media("pad")`
    display: block;
    `} h2 {
    font-size: 2em;
    padding: 0.5em;
    text-align: center;
  }

  h2,
  h3,
  .type {
    color: ${(props) => props.theme.textColor};
    font-weight: bold;
  }

  h3 {
    font-size: 1.5em;
    padding-left: 0.5em;
  }

  .type {
    display: flex;
    justify-content: space-around;
    font-size: 1.2em;
    p {
      padding: 0;
    }
  }

  .container {
    display: flex;
    justify-content: space-around;
    font-size: 1.2em;
    width: 90%;
    margin: auto;
  }

  .charaImg {
    width: 65%;
    aspect-ratio: 1/1.2;
    margin: 1em auto 1em;
    border: 5px solid ${(props) => props.theme.second};
  }

  p {
    padding-top: 0.5em;
  }

  .bio {
    width: 90%;
    margin: auto;
  }
  section {
    position: absolute;
    bottom: 1em;
  }
`;

export default SAsideChara;
