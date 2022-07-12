import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

body{
  position: relative;
  background: ${(props) => props.theme.bg};
  min-height: 100vh;
}
a{
  text-decoration: none;
  color: black
}
`;
export default GlobalStyle;
