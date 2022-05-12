import styled from "styled-components";

const SNavigation = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 2em;
  .navigation {
    width: 15vw;
    height: 20vh;
    background-color: var(--second-color);
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      float: right;
      margin: 30px 0;
      padding: 0 25px;
    }
  }
`;

export default SNavigation;
