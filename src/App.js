import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ExplorePokeworld from "./components/explorePokeworld/ExplorePokeworld";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Contact from "./components/contact/Contact";
import Log from "./components/signlog/Log";
import Sign from "./components/signlog/Sign";

function App() {
  const { getPokemonData } = useContext(AppContext);

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/explorePokeworld" element={<ExplorePokeworld />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logIn" element={<Log />} />
      <Route path="/signUp" element={<Sign />} />
    </Routes>
  );
}

export default App;
