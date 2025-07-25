import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Quote from "./pages/Quote";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
