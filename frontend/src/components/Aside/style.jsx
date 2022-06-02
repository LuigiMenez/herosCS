import styled from "styled-components";

const SAside = styled.section`
  background: url(${(props) => props.img});
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30vw;
  .nameTitle {
    width: 100%;
  }
  img {
    width: 20vw;
    margin: 3em;
  }
`;

export default SAside;
