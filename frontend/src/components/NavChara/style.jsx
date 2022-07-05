import styled from "styled-components";

const SnavChara = styled.nav`
  border: 5px solid ${(props) => props.theme.second};
  border-radius: 15px;
  margin: 2em auto 2em;
  background-color: ${(props) => props.theme.primary};
  width: 80%;
  ul {
    display: flex;
    justify-content: space-around;
    margin: 1em 0 1em 0;
  }
  li {
    position: relative;
    color: ${(props) => props.theme.textColor2};
    font-weight: bold;
    font-size: 1.2em;
  }
  li::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${(props) => props.theme.second};
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  li:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
  /* li + li:before {
    content: "/";
    margin-right: 2.5em;
  } */
`;

export default SnavChara;
