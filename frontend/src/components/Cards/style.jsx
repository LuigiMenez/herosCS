import styled from "styled-components";

const SCard = styled.div`
  background: url(${(props) => props.img});
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: auto;
  height: 20vh;
  width: 90vw;
  outline: solid 4px var(--main-color);
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  p {
    background-color: #1f1d3578;
    color: var(--second-color);
    text-align: center;
    font-size: 1.8rem;
    width: 100%;
    padding: 0.5rem;
  }
`;

export default SCard;
