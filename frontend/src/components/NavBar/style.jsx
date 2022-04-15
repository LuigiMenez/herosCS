import styled from "styled-components";
import { media } from "../../mediaQueries";

const SNav = styled.nav`
  height: 10vh;
  display: flex;
  margin-top: 2em;

  ul {
    display: ${(props) => (props.hamburgerOpen ? "inline" : "none")};
    ${media("pad")`
      width: 100%;
      display: flex;
      flex-direction: column;
    `}
  }
  .hamburger {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  button {
    border: none;
    background-color: transparent;
  }
`;

export default SNav;
