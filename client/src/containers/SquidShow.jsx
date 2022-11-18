import React, { useState } from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { getPageCount } from "../components/services/getPageCount";
import { Squids } from "../components/squids/Squids";
import { Loading } from "../components/ui/Loading";

const SquidShow = () => {
  const [page, setPage] = useState(0);

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

  const queryInfo = useQuery(["squids", { page }], fetchSquids, {
    keepPreviousData: true,
  });

  const pageCount = getPageCount(queryInfo.data?.squids.total, pageSize);
  const pages = pageCount?.map((pageNumber) => (
    <button
      key={pageNumber}
      className="squids__pages squids__pages--active"
      type="button"
      onClick={() => setPage(pageNumber)}
    >
      {pageNumber + 1}
    </button>
  ));

  console.log(queryInfo);

  return queryInfo.isLoading ? (
    <div className="squids">
      <Loading />
    </div>
  ) : (
    <div className="squids">
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
      <Squids squids={queryInfo.data?.squids.results} />
      <div className="squids__page-count">Page: {page + 1}</div>
      <div>{pages}</div>
    </div>
  );
};

export { SquidShow };
