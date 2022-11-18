import React from "react";

const Pagination = ({ page, pages, setPage }) => (
  <div>
    <div className="squids__buttons">
      <button
        type="button"
        className="squids__button squids__button--active"
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 0}
      >
        Previous
      </button>
      <button
        type="button"
        className="squids__button squids__button--active"
        onClick={() => setPage((old) => old + 1)}
      >
        Next
      </button>
    </div>
    <div className="squids__page-count">Page: {page + 1}</div>
    <div>{pages}</div>
  </div>
);

export { Pagination };
