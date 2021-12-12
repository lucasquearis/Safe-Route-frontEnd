import Main from "./pages/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlacesProvider from "./context/PlacesProvider";
import "./app.css";

const App = () => {
  return (
    <PlacesProvider>
      <Header />
      <div className="main-page">
        <Main />
        <Footer />
      </div>
    </PlacesProvider>
  );
};

export default App;
