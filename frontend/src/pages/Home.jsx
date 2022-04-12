import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cards from "@components/Cards";

export default function Home() {
  const [jdrs, setJdrs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/jdr`).then(({ data }) => {
      setJdrs(data);
    });
  }, []);

  return (
    <>
      {jdrs.map((jdr) => (
        <Link key={jdr.id} className="link" to={`/${jdr.name}`}>
          <Cards key={jdr.id} image={jdr.image} name={jdr.name} />
        </Link>
      ))}
    </>
  );
}
