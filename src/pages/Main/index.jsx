import dataMock from "../../services/mock/cardMock";
import CardPlace from "../../components/CardPlace";
import Header from "../../components/Header";

const Main = () => {
  return (
    <main>
      <Header />
      <div>Hero</div>
      <div>Filters</div>
      <div>
        {dataMock.map((place) => (
          <CardPlace place={place} />
        ))}
      </div>
    </main>
  );
};

export default Main;
