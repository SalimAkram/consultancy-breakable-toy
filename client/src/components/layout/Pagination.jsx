import React from "react";

const Pagination = ({ page, pages, setPage }) => (
  <div>
    <div className="pagination__buttons">
      <button
        type="button"
        className="pagination__button pagination__button--active"
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 0}
      >
        Previous
      </button>
      <button
        type="button"
        className="pagination__button pagination__button--active"
        onClick={() => setPage((old) => old + 1)}
      >
        Next
      </button>
      <div className="pagination__page-count">Page: {page + 1}</div>
      <div>{pages}</div>
    </div>
  </div>
);

export { Pagination };
