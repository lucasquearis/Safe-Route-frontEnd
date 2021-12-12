import PlaceContext from "../../context/PlaceContext";
import { useContext } from "react";

const TypeFilter = () => {
  const { setTypeFilter } = useContext(PlaceContext);

  const handleFilter = (value) => {
    if (!value) {
      return setTypeFilter({ type: "type", filter: [] });
    }

    return setTypeFilter({ type: "type", filter: [value] });
    // return setTypeFilter({ type: "type", filter: [...filter, value] }); --> Usar quando for fazer logica de array de filtros acumulativa
  };

  return (
    <div className="input-group mb-1 filter-option">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="type">
          Categorias
        </label>
      </div>

      <select
        className="custom-select"
        id="type"
        onChange={({ target: { value } }) => handleFilter(value)}
      >
        <option selected value="">Todas</option>
        <option value="hospedagem">Hospedagem</option>
        <option value="alimentacao">Alimentação</option>
        <option value="bar">Bar</option>
      </select>
    </div>
  );
};

export default TypeFilter;
