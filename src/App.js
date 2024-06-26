import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ExplorePokeworld from "./components/explorePokeworld/ExplorePokeworld";
import { Header } from "./components/Header";
import Footer from "./components/footer/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Contact from "./components/contact/Contact";

function App() {
  const { getPokemonData } = useContext(AppContext);

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div className="App h-screen">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/explorePokeworld" element={<ExplorePokeworld />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
