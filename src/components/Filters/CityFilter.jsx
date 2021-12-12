import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const CityFilter = () => {
  const {
    setCityFilter,
    cityFilter: { filter },
  } = useContext(PlaceContext);

  const hadleFilter = (value) => {
    if (!value) {
      return setCityFilter({ type: "city", filter: [] });
    }

    return setCityFilter({ type: "city", filter: [value] });
    // return setCityFilter({ type: "city", filter: [...filter, value] }); --> Usar quando for fazer logica de array de filtros acumulativa
  };

  return (
    <div className="input-group mb-1 filter-option">
      <div className="input-group-prepend">
        <label className="input-group-text" for="cities">
          Cidades
        </label>
      </div>

      <select
        className="custom-select "
        id="cities"
        onChange={({ target: { value } }) => hadleFilter(value)}
      >
        <option selected value="">
          Todas
        </option>
        <option value="curitiba">Curitiba</option>
        <option value="campinas">Campinas</option>
        <option value="ceara">Ceara</option>
      </select>
    </div>
  );
};

export default CityFilter;
