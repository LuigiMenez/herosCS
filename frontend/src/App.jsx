import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Header from "@components/Header";
import Character from "@components/Character";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
