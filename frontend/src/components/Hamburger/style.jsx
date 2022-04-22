import styled from "styled-components";
import { media } from "../../mediaQueries";

const Sburger = styled.div`
  .hamburger {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 10;
  }

  .burger {
    width: 2rem;
    height: 0.25rem;
    margin: 0.25rem;
    border-radius: 10px;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.3s linear;
    ${media("pad")`
      display: none;
    `}
  }

  .burger1 {
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
  }
  .burger2 {
    transform: ${(props) =>
      props.Open ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  .burger3 {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export default Sburger;
