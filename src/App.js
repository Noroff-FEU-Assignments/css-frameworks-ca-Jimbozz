import React from "react";
import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/NavElem";
import Home from "./components/pages/Index";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
