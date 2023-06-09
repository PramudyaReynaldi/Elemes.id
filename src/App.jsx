import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Trending from "./components/Trending";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <div className="App">
        <div className="background">
          <Header />
          <Hero />
        </div>
        <Category />
        <Trending />
        <Footer />
      </div>
      <br /> <br /> <br />
    </>
  );
}