import Hamburger from "@components/Hamburger";
import { useState } from "react";
import Button from "../Button";
import SNav from "./style";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <SNav hamburgerOpen={hamburgerOpen}>
      <ul>
        <li>
          <Button title="Log In" />
        </li>
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
