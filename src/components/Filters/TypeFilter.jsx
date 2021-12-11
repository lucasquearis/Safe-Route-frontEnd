import PlaceContext from "../../context/PlaceContext";
import { useContext } from "react";

const TypeFilter = () => {
  const { setTypeFilter } = useContext(PlaceContext);

  return (
    <select onChange={({ target: { value } }) => setTypeFilter(value)}>
      <option value="hospedagem">Hospedagem</option>
      <option value="alimentacao">Alimentação</option>
      <option value="bar">Bar</option>
    </select>
  );
};

export default TypeFilter;
