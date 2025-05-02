import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = (props) => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/> 
    </>
  );
};

export default App;
