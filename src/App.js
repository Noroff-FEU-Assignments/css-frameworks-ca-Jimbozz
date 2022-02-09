import React from "react";
import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/NavElem";
import Footer from "./components/Footer";
import Home from "./components/pages/Index";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
