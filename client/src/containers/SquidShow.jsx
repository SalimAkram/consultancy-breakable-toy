import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { Squids } from "../components/squids/Squids";
import { Loading } from "../components/ui/Loading";

const SquidShow = () => {
  const queryInfo = useQuery("squids", () => axios.get("api/v1/squids").then((res) => res.data));

  return queryInfo.isLoading ? (
    <div className="squids">
      <Loading />
    </div>
  ) : (
    <div className="squids">
      <Squids squids={queryInfo.data.squids} />
    </div>
  );
};

export { SquidShow };
