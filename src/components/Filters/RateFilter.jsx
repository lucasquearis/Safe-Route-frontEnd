import PlaceContext from "../../context/PlaceContext";
import { useContext } from "react";

const RateFilter = () => {
  const { setRateFilter } = useContext(PlaceContext);

  return (
    <select onChange={({ target: { value } }) => setRateFilter(value)}>
      <option value="">Todas</option>
      <option value="5">5</option>
      <option value="4">4+</option>
      <option value="3">3+</option>
      <option value="2">2+</option>
      <option value="1">1+</option>
    </select>
  );
};

export default RateFilter;
