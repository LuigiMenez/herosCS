import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cards from "@components/Cards";
import Aside from "@components/Aside/Aside";
import { getGames } from "../redux/games/gameReducer";
import SHome from "./style";

export default function Home() {
  const { games } = useSelector((state) => ({
    ...state.gameReducer,
  }));
  const [gaming, setGaming] = useState([]);

  const dispatch = useDispatch();
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
        >
          <Cards key={game.id} image={game.image} name={game.nameJdr} />
        </Link>
      ))}
      <Aside
        bgImg={gaming.image}
        nameImg={gaming.nameimg}
        nameJdr={gaming.nameJdr}
        description={gaming.descr}
      />
    </SHome>
  );
}
