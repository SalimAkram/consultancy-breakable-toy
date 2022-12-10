import React, { useState } from "react";

import { Pagination } from "../layout/Pagination";
import { getPageCount } from "../services/getPageCount";
import { useFetchSquids } from "./hooks/useFetchSquids";
import { SquidForm } from "./SquidForm";
import { SquidRefreshButton } from "./squidRefreshButton";
import { Squids } from "./Squids";

const SquidIndex = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [display, setDisplay] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  const pageSize = 10;
  const squids = useFetchSquids({ page, pageSize });
  const pageCount = getPageCount(squids?.squids?.total, pageSize);
  const pages = pageCount?.map((pageNumber) => (
    <button
      key={pageNumber}
      className="pagination__pages pagination__pages--active"
      type="button"
      onClick={() => setPage(pageNumber)}
    >
      {pageNumber + 1}
    </button>
  ));

  if (squids.isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="squids">
      <button
        type="button"
        onClick={() => setDisplay(true)}
        className="form__button form__button--active"
      >
        Add a squid!
      </button>
      {display && (
        <button
          type="button"
          onClick={() => setDisplay(false)}
          className="form__button form__button--active"
        >
          Nevermind
        </button>
      )}
      {formSuccess && (
        <div>
          <p className="squids__success">Squid Post Successful!</p>
          <SquidRefreshButton setFormSuccess={setFormSuccess} />
        </div>
      )}
      <div>{display && <SquidForm setDisplay={setDisplay} setFormSuccess={setFormSuccess} />}</div>
      <Squids squids={squids?.squids.results} />
      <Pagination page={page} pages={pages} setPage={setPage} />
    </div>
  );
};

export { SquidIndex };
