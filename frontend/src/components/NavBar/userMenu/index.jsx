import { useDispatch } from "react-redux";
import Button from "@components/Button";

export default function UserMenu() {
  const dispatch = useDispatch();

  const hLogout = () => {
    return dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <h2>Mon Profil</h2>
      <Button title="Déconnexion" func={hLogout} />
    </>
  );
}
