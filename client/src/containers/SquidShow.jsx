import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { Squids } from "../components/squids/Squids";

const SquidShow = () => {
  const queryInfo = useQuery("squids", () => axios.get("api/v1/squids").then((res) => res.data));

  return queryInfo.isLoading ? (
    "loading........"
  ) : (
    <div className="squids">
      <Squids squids={queryInfo.data.squids} />
    </div>
  );
};

export { SquidShow };
