import styled from "styled-components";
import { media } from "../mediaQueries";

const SHome = styled.section`
  ${media("pad")`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 70vw;`}
`;

export default SHome;
