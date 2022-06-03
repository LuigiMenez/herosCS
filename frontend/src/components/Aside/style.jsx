import styled from "styled-components";

const SAside = styled.section`
  background: url(${(props) => props.img});
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30vw;
  height: 100vh;
  .nameTitle {
    width: 100%;
  }

  p,
  img {
    background: #ffffff7c;
    border-radius: 15px;
    width: 20vw;
  }
  img {
    margin: 3em 5vw 0;
  }

  p {
    position: absolute;
    bottom: 1em;
    right: 1vw;
    left: 1vw;
    width: 90%;
    padding: 0.5em;
    font-weight: bold;
  }
`;

export default SAside;
