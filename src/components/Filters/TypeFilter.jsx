import React from "react";
import PlaceContext from "../../context/PlaceContext";
import { useContext } from "react";

const TypeFilter = () => {
  const { setTypeFilter, typeFilter } = useContext(PlaceContext);

  const handleFilter = ({ target: { value } }) => {
    setTypeFilter(value);
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
        value={typeFilter}
        data-testid="type-select"
        onChange={handleFilter}
      >
        <option value="all">Todas</option>
        <option value="hospedagem">Hospedagem</option>
        <option value="alimentacao">Alimentação</option>
        <option value="bar">Bar</option>
      </select>
    </div>
  );
};

export default TypeFilter;
