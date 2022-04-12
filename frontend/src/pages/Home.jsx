import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "@components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../redux/games/gameReducer";

export default function Home() {
  const { games } = useSelector((state) => ({
    ...state.gameReducer,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <>
      {games.map((game) => (
        <Link key={game.id} className="link" to={`/${game.name}`}>
          <Cards key={game.id} image={game.image} name={game.name} />
        </Link>
      ))}
    </>
  );
}
