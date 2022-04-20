import styled from "styled-components";
import { media } from "../../mediaQueries";

const SOtherCharacter = styled.main`
  h2 {
    border: 5px solid #2cabd8;
    background: #201853;
    color: white;
    font-size: 1.5em;
    padding: 0.5em;
    margin: 1em;
    text-align: center;
  }
  table {
    text-align: center;
    width: 90vw;
    margin: 1em auto;
    ${media("pad")`
        width: 65vw;
    `}
  }
  thead {
    text-transform: uppercase;
    border-bottom: 2px solid #201853;
    font-size: 1.25em;
  }
  td {
    text-align: center;
    padding: 0.5em;
    font-size: 1.25em;
  }
  td.race {
    width: 15vw;
    display: none;
    ${media("pad")`
    display: inline;
  `}
  }
  th.classe {
    width: 15vw;
    display: none;
    ${media("pad")`
    display: inline;
  `}
  }
`;

export default SOtherCharacter;
