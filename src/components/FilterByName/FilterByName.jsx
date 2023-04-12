import React from "react";
import speciesFilterIcon from "../../assets/images/speciesFilterIcon.svg";

const FilterByName = ({ nameText, setNameText }) => {
  const handleInputChange = ({ target }) => {
    setNameText(target.value);
  };
  return (
    <div className="col-md-6 mx-auto">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          <img src={speciesFilterIcon} alt="" />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Filter by Name"
          value={nameText}
          onInput={handleInputChange}
        />
      </div>
    </div>
  );
};

export default React.memo(FilterByName);
