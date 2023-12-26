import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { Header } from "./components/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App h-screen">
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
