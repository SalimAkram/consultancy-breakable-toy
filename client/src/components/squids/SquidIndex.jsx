import React, { useState } from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { Pagination } from "../layout/Pagination";
import { getPageCount } from "../services/getPageCount";
import { Squids } from "./Squids";

const SquidIndex = () => {
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

  const { data, isLoading } = useQuery(["squids", { page }], fetchSquids, {
    keepPreviousData: true,
  });

  const pageCount = getPageCount(data?.squids.total, pageSize);
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

  if (isLoading) {
    return <h1>.....</h1>;
  }

  return (
    <div className="squids">
      <Squids squids={data?.squids.results} />
      <Pagination page={page} pages={pages} setPage={setPage} />
    </div>
  );
};

export { SquidIndex };
