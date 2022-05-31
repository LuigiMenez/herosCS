import styled from "styled-components";
import { media } from "../../mediaQueries";

const SNav = styled.nav`
  height: 10vh;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  ${media("pad")`
    align-items: flex-end;

    `}
  button {
    border: none;
    background-color: transparent;
  }
  img {
    width: 3.5rem;
  }
`;

export default SNav;
