import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Invest from "./pages/Invest";
import GlobalStyles from "./components/styles/GlobalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Invest" element={<Invest />} />
      </Routes>
    </div>
  );
}

export default App;
