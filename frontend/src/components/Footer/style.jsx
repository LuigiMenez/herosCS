import styled from "styled-components";
import { media } from "../../mediaQueries";

const SFooter = styled.footer`
  width: 100vw;
  height: 10vh;
  box-sizing: border-box;
  background: var(--main-color);
  color: white;
  ${media("pad")`
    position: absolute;
    bottom: 0;
    width: 70vw;
    height: 10vh;
    `}
`;

export default SFooter;
