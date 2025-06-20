import React from "react";
import { Hero } from "./hero";
import Navbar from "../navbar";
import About from "./about";
import Skills from "./skills";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
