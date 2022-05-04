import FormAuth from "@components/FormAuth";
import Modal from "@components/Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import SNav from "./style";
import iconProfil from "../../assets/iconProfil.svg";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const { user } = useSelector((store) => store.userReducer);
  // const {user.user} = user

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <SNav>
      {user.user.id ? (
        <button type="button" className="hamburger" onClick={showModal}>
          <img src={user.user.avatar} alt={user.user.login} />
        </button>
      ) : (
        <button type="button" className="hamburger" onClick={showModal}>
          <img src={iconProfil} alt="Authentification" />
        </button>
      )}
      <Modal close={closeModal} show={show}>
        <FormAuth />
      </Modal>
    </SNav>
  );
}
