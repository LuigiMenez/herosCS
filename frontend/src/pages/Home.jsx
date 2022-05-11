import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cards from "@components/Cards";
import UserMenu from "@components/NavBar/userMenu";
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
    <>
      <SHome>
        {games.map((game) => (
          <Link key={game.id} className="link" to={`/${game.id}`}>
            <Cards key={game.id} image={game.image} name={game.nameJdr} />
          </Link>
        ))}
      </SHome>
      <UserMenu />
    </>
  );
}
