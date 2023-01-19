import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleAnime from "./pages/SingleAnime";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<SingleAnime />} path="/anime/:name" />
        <Route element={<Error />} path="*" />
      </Routes>
    </Router>
  );
}

export default App;
