import React from "react";

import { Footer, StemCertificate, TechClasses, Header, Tsa } from "./containers";

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
      <Tsa />
      <Footer />
    </div>
  );
};

export default App;
