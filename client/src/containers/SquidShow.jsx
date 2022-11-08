import React, { useState } from "react";

import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { getPageCount } from "../components/services/getPageCount";
import { Squids } from "../components/squids/Squids";
import { Loading } from "../components/ui/Loading";

const SquidShow = () => {
  const [page, setPage] = useState(0);

  if (page < 0) {
    setPage(0);
  }

  const pageSize = 10;
  const queryInfo = useQuery(["squids", { page }], () =>
    axios
      .get("api/v1/squids", {
        params: {
          pageSize,
          pageOffset: page,
        },
      })
      .then((res) => res.data)
  );

  const pageCount = getPageCount(queryInfo.data?.squids.total, pageSize);
  const pages = pageCount?.map((pageNumber) => (
    <button type="button" onClick={() => setPage(pageNumber)}>
      {pageNumber + 1}
    </button>
  ));

  return queryInfo.isLoading ? (
    <div className="squids">
      <Loading />
    </div>
  ) : (
    <div className="squids">
      <Squids squids={queryInfo.data.squids.results} />
      <div className="squids__buttons">
        <button type="button" className="squids__button" onClick={() => setPage((old) => old - 1)}>
          Previous
        </button>
        <button type="button" className="squids__button" onClick={() => setPage((old) => old + 1)}>
          Next
        </button>
      </div>
      <div className="squids__page-count">Page: {page + 1}</div>
      <div className="squids__pages">{pages}</div>
    </div>
  );
};

export { SquidShow };
