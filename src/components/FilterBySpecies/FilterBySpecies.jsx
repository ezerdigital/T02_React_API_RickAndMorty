import React from "react";
import { SPECIES_LIST } from "../../constants/speciesList";

const FilterBySpecies = ({ speciesText, setSpeciesText }) => {
  const handleSelectChange = ({ target }) => {
    setSpeciesText(target.value === "all-species" ? "" : target.value);
  };
  return (
    <div className="col-md-6 mx-auto">
      <div className="input-group flex-nowrap">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleSelectChange}
        >
          {SPECIES_LIST.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default React.memo(FilterBySpecies);
