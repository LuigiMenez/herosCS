import styled from "styled-components";

const Sbutton = styled.button`
  background-color: ${(props) => props.theme.second};
  color: ${(props) => props.theme.textColor};
  width: 8em;
  border-radius: 15px;
  margin: 0.5em;
  padding: 0.5em;
  cursor: pointer;
`;

export default Sbutton;
