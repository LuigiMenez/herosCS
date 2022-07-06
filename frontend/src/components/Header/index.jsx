import SHeader from "@components/Header/style";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

export default function Header() {
  const dispatch = useDispatch();

  const resetTheme = () => {
    return dispatch({ type: "RESET_THEME" });
  };
  return (
    <SHeader>
      <Link to="/" onClick={resetTheme}>
        <h1>HeroesBOX</h1>
      </Link>
      <NavBar />
    </SHeader>
  );
}
