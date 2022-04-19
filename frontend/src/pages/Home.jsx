import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "@components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../redux/games/gameReducer";
import SHome from "./style";

export default function Home() {
  const { games } = useSelector((state) => ({
    ...state.gameReducer,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <SHome>
      {games.map((game) => (
        <Link key={game.id} className="link" to={`/${game.id}`}>
          <Cards key={game.id} image={game.image} name={game.nameJdr} />
        </Link>
      ))}
    </SHome>
  );
}
