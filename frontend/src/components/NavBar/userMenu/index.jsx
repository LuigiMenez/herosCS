import { useDispatch } from "react-redux";
import Button from "@components/Button";
import SNavigation from "./style";

export default function UserMenu() {
  const dispatch = useDispatch();

  const hLogout = () => {
    return dispatch({ type: "LOGOUT" });
  };

  return (
    <SNavigation>
      <div className="navigation">
        <ul>
          <li>Mon Profil</li>
          <li>
            <Button title="Déconnexion" func={hLogout} />
          </li>
        </ul>
      </div>
    </SNavigation>
  );
}
