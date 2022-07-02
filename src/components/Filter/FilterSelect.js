import { useEffect, useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  margin: 10px;
  padding: 10px;
`;

const FilterSelect = (props) => {

  const [selected, setSelected] = useState("");

  useEffect(() => {
    const debounceSelect = setTimeout(() => {
      console.log("Use Effect");
      props.onFilterCities(selected);
    }, 4000);


    return () => {
      clearTimeout(debounceSelect);
      console.log("Use Effect Return")
    }

  }, [selected]);

  const filterCities = (event) => {
    setSelected(event.target.value);
  }

  return (
    <Select onChange={filterCities}>
      <option value="">Tumu</option>
      <option value="Istanbul">Istanbul</option>
      <option value="Mersin">Mersin</option>
      <option value="Bursa">Bursa</option>
      <option value="Antalya">Antalya</option>
    </Select>
  )
}

export default FilterSelect;