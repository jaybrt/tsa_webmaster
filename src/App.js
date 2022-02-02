import React from "react";

import { Footer, StemCertificate, TechClasses, Header } from "./containers";

import { Navbar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <TechClasses />
      <StemCertificate />
      <Footer />
    </div>
  );
};

export default App;
