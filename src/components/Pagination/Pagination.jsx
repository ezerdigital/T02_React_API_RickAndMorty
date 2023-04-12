import React from "react";

const Pagination = ({ info, actualPage, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav className="mx-5">
      <div className="pagination justify-content-center">
        <h5>
          {actualPage}/{info.pages}
        </h5>
      </div>
      <ul className="pagination justify-content-center">
        {info.prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {info.next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default React.memo(Pagination);
