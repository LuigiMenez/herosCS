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
`;

export default SCharac;
