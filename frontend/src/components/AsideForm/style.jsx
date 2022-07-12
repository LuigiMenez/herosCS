import styled from "styled-components";
import { media } from "../../mediaQueries";

const SAsideForm = styled.form`
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

  h3,
  .name {
    width: 90%;
    margin: 1em 5%;
    color: ${(props) => props.theme.textColor};
    font-weight: bold;
    font-size: 1.5em;
  }
  .container {
    display: flex;
    justify-content: space-around;
    font-size: 1.2em;
    width: 90%;
    margin: auto;
  }

  .img {
    margin: 2em;
  }

  section {
    width: 100%;
    position: absolute;
    bottom: 1em;
  }
  textarea {
    width: 90%;
    height: 10vh;
    margin: 0 5%;
  }
`;

export default SAsideForm;
