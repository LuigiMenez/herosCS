import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cards from "@components/Cards";
import Aside from "@components/Aside/Aside";
import { getGames } from "../redux/games/gameReducer";
import { applyTheme } from "../redux/theme/themeActions";
import SHome from "./style";

export default function Home() {
  const { games } = useSelector((state) => {
    return state.gameReducer;
  });
  const [gaming, setGaming] = useState([]);

  const dispatch = useDispatch();

  const changeTheme = (theme) => {
    dispatch(applyTheme(theme));
  };
  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <SHome>
      {games.map((game) => (
        <Link
          key={game.id}
          className="link"
          to={`/${game.id}`}
          onMouseEnter={() => setGaming(game)}
          onClick={() => changeTheme(game.theme)}
        >
          <Cards image={`./src/assets/jdr/${game.image}`} name={game.nameJdr} />
        </Link>
      ))}
      <Aside
        bgImg={`./src/assets/asideJdr/${gaming.coverImg}`}
        nameImg={gaming.nameimg}
        nameJdr={gaming.nameJdr}
        description={gaming.descr}
      />
    </SHome>
  );
}
