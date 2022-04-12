import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
:root{
  --main-color: #500510;
  --second-color: #d5d5d5;
}
body{
  background: #d5d5d5;
  min-height: 100vh;
}
a{
  text-decoration: none;
}
`;
export default GlobalStyle;
