import styled from "styled-components";
import { media } from "../../mediaQueries";

const SCard = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 1.5rem auto 1.5rem;
  height: 20vh;
  width: 90vw;
  outline: solid 4px ${(props) => props.theme.primary};
  border-radius: 15px;
  overflow: hidden;
  ${media("pad")`
    width: 20vw;
    `}

  p {
    background-color: #1f1d3578;
    color: ${(props) => props.theme.textColor2};
    text-align: center;
    font-size: 1.8rem;
    width: 100%;
    padding: 0.5rem;
  }
`;

export default SCard;
