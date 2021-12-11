import dataMock from "../../services/mock/cardMock";
import CardPlace from "../../components/CardPlace";

const Main = () => {
  return (
    <main>
      <div>Header</div>
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
