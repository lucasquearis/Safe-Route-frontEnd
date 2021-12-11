import Main from './pages/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import PlacesProvider from './context/PlacesProvider';

const App = () => {
  return (
    <PlacesProvider>
      <Header />
      <Main />
      <Footer />
    </PlacesProvider>
  );
}

export default App;
