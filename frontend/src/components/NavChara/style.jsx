import styled from "styled-components";

const SnavChara = styled.nav`
  border: 5px solid #2cabd8;
  border-radius: 15px;
  margin: 2em auto 2em;
  background-color: #201853;
  width: 80%;
  ul {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 2em auto 2em;
  }
  li {
    position: relative;
    color: white;
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
    background-color: #3cefff;
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
