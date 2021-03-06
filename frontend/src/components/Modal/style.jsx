import styled from "styled-components";

const SModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .modalContent {
    width: 500px;
    background-color: #d3caca;
  }
  header,
  footer {
    padding: 10px;
  }
  .modalTitle {
    margin: 0;
  }
  main {
    padding: 10px;
    border-top: 1px solid ${(props) => props.theme.second};
    border-bottom: 1px solid ${(props) => props.theme.second};
  }
`;

export default SModal;
