import PlaceContext from "../../context/PlaceContext";
import { useContext } from "react";

const TypeFilter = () => {
  const { setTypeFilter } = useContext(PlaceContext);

  const hadleFilter = (value) => {
    if (!value) {
      return setTypeFilter({ type: "type", filter: [] });
    }

    return setTypeFilter({ type: "type", filter: [value] });
    // return setTypeFilter({ type: "type", filter: [...filter, value] }); --> Usar quando for fazer logica de array de filtros acumulativa
  
  };

  return (
    <select onChange={({ target: { value } }) => hadleFilter(value)}>
      <option value="">Todas</option>
      <option value="hospedagem">Hospedagem</option>
      <option value="alimentacao">Alimentação</option>
      <option value="bar">Bar</option>
    </select>
  );
};

export default TypeFilter;
