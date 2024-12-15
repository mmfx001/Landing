import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Compnients/Navbar";
import "./App.css";
import Main from "./Compnients/Main";
import Footer from "./Compnients/Footer";


const App = () => {
  return (
<div className="container">
<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      
      </Routes>
      <Footer/>
    </Router>
</div>
  );
};

export default App;
