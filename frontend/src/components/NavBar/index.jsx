import Hamburger from "@components/Hamburger";
import Modal from "@components/Modal/Modal";
import { useState } from "react";
import Button from "../Button";
import SNav from "./style";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <SNav hamburgerOpen={hamburgerOpen}>
      <ul>
        <li>
          <Button title="Log In" func={showModal} />
        </li>
        <Modal close={closeModal} show={show}>
          <p>Ici ma modal</p>
        </Modal>
        <li>
          <Button title="Sign Up" />
        </li>
      </ul>
      <button type="button" className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </button>
    </SNav>
  );
}
