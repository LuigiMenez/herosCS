import styled from "styled-components";
import { media } from "../../mediaQueries";

const SHeader = styled.header`
  box-sizing: border-box;
  height: 3vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2.5em;
  ${media("pad")`
    height: 10vh;
    width: 70vw;
    justify-content: space-between
    `}

  h1 {
    color: ${(props) => props.theme.primary};
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
