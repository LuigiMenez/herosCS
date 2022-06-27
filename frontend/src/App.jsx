import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "@pages/Home";
import Header from "@components/Header";
import Character from "@components/Character";
import CharacterSheet from "@pages/CharacterSheet";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Character />} />
          <Route path="/:id/newcharacter" element={<CharacterSheet />} />
        </Routes>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </>
  );
}

export default App;
