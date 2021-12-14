import Main from "./pages/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PlacesProvider from "./context/PlacesProvider";
import React from "react";
import "./style/app.css";

const App = () => {
  return (
    <PlacesProvider>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </PlacesProvider>
  );
};

export default App;
