import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
