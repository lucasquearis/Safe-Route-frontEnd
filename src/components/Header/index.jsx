import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="d-flex justify-content-around">

      <div><img alt="Logo" src=""/></div>
      <SearchBar />
      <div>Sign in</div>

    </header>
  );
};

export default Header;
