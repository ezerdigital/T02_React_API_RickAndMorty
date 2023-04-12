import React from "react";
import Card from "../../components/Card/Card";

const Characters = ({ loaded }) => {
  return (
    <div className="row mt-3 mx-2">
      {loaded.map((item, index) => (
        <div className="col mb-3" key={index}>
          <Card character={item} />
        </div>
      ))}
    </div>
  );
};

export default React.memo(Characters);
