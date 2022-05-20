import styled from "styled-components";
import { media } from "../../mediaQueries";

const SCharac = styled.main`
  ${media("pad")`
    width: 70vw;`}
  img {
    display: block;
    margin: auto;
    width: 90vw;
    ${media("pad")`
    width: 30vw;`}
  }
  .userOff {
    display: none;
    border: red 5px solid;
  }
`;

export default SCharac;
