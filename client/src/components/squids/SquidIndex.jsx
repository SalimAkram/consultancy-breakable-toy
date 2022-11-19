import React, { useState } from "react";

import axios from "axios";
import { useQuery } from "react-query";
import { Redirect } from "react-router-dom";

import { Pagination } from "../layout/Pagination";
import { getPageCount } from "../services/getPageCount";
import { SquidForm } from "./SquidForm";
import { Squids } from "./Squids";

const SquidIndex = () => {
  const [page, setPage] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [display, setDisplay] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const pageSize = 10;
  const fetchSquids = () =>
    axios
      .get("api/v1/squids", {
        params: {
          pageSize,
          pageOffset: page,
        },
      })
      .then((res) => res.data);

  const { data, isLoading } = useQuery(["squids", { page }], fetchSquids, {
    keepPreviousData: true,
  });

  const pageCount = getPageCount(data?.squids.total, pageSize);
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

  if (isLoading) {
    return <h1>.....</h1>;
  }

  if (redirect) {
    return <Redirect to="/squids" />;
  }

  console.log(data)

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
          <button
            type="button"
            onClick={() => fetchSquids}
            className="form__button form__button--active"
          >
            click to see your new Squid REFRESH NOT WORKING YET!
          </button>
        </div>
      )}
      <div>
        {display && (
          <SquidForm
            setDisplay={setDisplay}
            setFormSuccess={setFormSuccess}
            setRedirect={setRedirect}
          />
        )}
      </div>
      <Squids squids={data?.squids.results} />
      <Pagination page={page} pages={pages} setPage={setPage} />
    </div>
  );
};

export { SquidIndex };
