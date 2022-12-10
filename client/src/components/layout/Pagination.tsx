import React, { Dispatch, SetStateAction } from "react";

interface Pagination {
  page: number;
  pages: number[];
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<Pagination> = ({ page, pages, setPage }) => (
  <div>
    <div className="pagination__buttons">
      <button
        type="button"
        className="pagination__button pagination__button--active"
        onClick={() => setPage((currentPageNumber: number) => currentPageNumber - 1)}
        disabled={page === 0}
      >
        Previous
      </button>
      <button
        type="button"
        className="pagination__button pagination__button--active"
        onClick={() => setPage((currentPageNumber: number) => currentPageNumber + 1)}
      >
        Next
      </button>
      <div className="pagination__page-count">Page: {page + 1}</div>
      <div>{pages}</div>
    </div>
  </div>
);

export { Pagination };
