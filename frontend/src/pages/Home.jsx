import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "@components/Cards";
import Header from "@components/Header";

export default function Home() {
  const [jdrs, setJdrs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/`).then(({ data }) => {
      setJdrs(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Cards />
    </>
  );
}
