import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import AllFilm from "./component/AllFilm";
import { useEffect, useState } from "react";
import Loader from "./component/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "../src/component/routing/Account";

function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <header className="mb-5">
          <MyNav />
        </header>
        <h3 className="text-white mb-3 ms-4">Maratona per il Natale</h3>
        <AllFilm searchQuery="harry potter">
          {load ? <Loader /> : <p>Caricamento effettuato</p>}
        </AllFilm>
        <h3 className="text-white mb-3 ms-4">Film scelti per te</h3>
        <AllFilm searchQuery="anime" />
        <h3 className="text-white mb-3 ms-4">Saghe da oscar</h3>
        <AllFilm searchQuery="Lord of the Rings" />
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
