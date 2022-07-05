import styled from "styled-components";

const ScsArray = styled.section`
  width: 90vw;
  margin: auto;

  .carac {
    border: 2px solid ${(props) => props.theme.primary};
  }
`;

export default ScsArray;
