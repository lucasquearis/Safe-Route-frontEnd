import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const RateFilter = () => {
  const { setRateFilter } = useContext(PlaceContext);

  return (
    <select
      onChange={({ target: { value } }) =>
        setRateFilter({ type: "rate", filter: value })
      }
    >
      <option value="all">Todas</option>
      <option value="4">Notas entre 4 e 5</option>
      <option value="3">Notas entre 3 e 4</option>
      <option value="2">Notas entre 2 e 3</option>
      <option value="1">Notas entre 1 e 2</option>
      <option value="0">Notas entre 0 e 1</option>
    </select>
  );
};

export default RateFilter;
