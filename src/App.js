import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ExplorePokeworld from "./components/explorePokeworld/ExplorePokeworld";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Contact from "./components/contact/Contact";
import Log from "./components/signlog/Log";
import Sign from "./components/signlog/Sign";
import { Header } from "./components/Header";
import Footer from "./components/footer/Footer";

function App() {
  const { getPokemonData } = useContext(AppContext);

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div className=" h-screen">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/explorePokeworld" element={<ExplorePokeworld />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logIn" element={<Log />} />
        <Route path="/signUp" element={<Sign />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
