import styled from "styled-components";
import { media } from "../../mediaQueries";

const SFooter = styled.footer`
  width: 100vw;
  height: 10vh;
  background: var(--main-color);
  bottom: 0;
  color: white;
  ${media("pad")`
    width: 70vw;
    height: 10vh;
    bottom: 0;
    `}
`;

export default SFooter;
