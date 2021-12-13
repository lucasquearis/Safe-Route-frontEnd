import Main from "./pages/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlacesProvider from "./context/PlacesProvider";
import React from "react";
import "./app.css";
// import Partner from "./pages/Partner";

const App = () => {
  return (
    <PlacesProvider>
      <Header />
      <Main />
      <Footer />
    </PlacesProvider>
  );
};

export default App;
