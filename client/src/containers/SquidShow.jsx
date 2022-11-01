import React, { useState } from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { Squids } from "../components/squids/Squids";

const SquidShow = () => {
  const [page, setPage] = useState(0);
  // refactor this for fns to react state setters

  if (page < 0) {
    setPage(0);
  }

  const queryInfo = useQuery(["squids", { page }], () =>
    axios
      .get("api/v1/squids", {
        params: {
          pageSize: 5,
          pageOffset: page,
        },
      })
      .then((res) => res.data)
  );

  return queryInfo.isLoading ? (
    "loading........"
  ) : (
    <div className="container">
      <Squids squids={queryInfo.data.squids.results} />
      <button type="button" className="button" onClick={() => setPage((old) => old - 1)}>
        Previous
      </button>
      <button type="button" className="button" onClick={() => setPage((old) => old + 1)}>
        Next
      </button>
      <span type="button" className="button">
        Current Page: {page + 1} {queryInfo.isFetching ? "....." : ""}
      </span>
    </div>
  );
};

export { SquidShow };
