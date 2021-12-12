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
    <select onChange={({ target: { value } }) => hadleFilter(value)}>
      <option value="">Todas</option>
      <option value="curitiba">Curitiba</option>
      <option value="campinas">Campinas</option>
      <option value="ceara">Ceara</option>
    </select>
  );
};

export default CityFilter;
