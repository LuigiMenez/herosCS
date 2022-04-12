import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "@components/Cards";
import Header from "@components/Header";

export default function Home() {
  const [jdrs, setJdrs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/jdr`).then(({ data }) => {
      setJdrs(data);
    });
  }, []);

  return (
    <>
      <Header />
      {jdrs.map((jdr) => (
        <Cards key={jdr.id} image={jdr.image} name={jdr.name} />
      ))}
    </>
  );
}
