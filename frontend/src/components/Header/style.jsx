import styled from "styled-components";
import { media } from "../../mediaQueries";

const SHeader = styled.header`
  height: 3vh;
  background-color: var(--second-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2.5em;
  ${media("pad")`
    height: 10vh;
    width: 67vw;
    justify-content: space-between
    `}

  h1 {
    color: var(--main-color);
    font-size: 3.5em;
    font-weight: bold;
    display: none;

    ${media("pad")`
      display: flex;
      align-items: center;
    `}
  }
`;

export default SHeader;
