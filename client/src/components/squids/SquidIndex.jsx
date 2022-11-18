import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { Squids } from "./Squids";

const SquidIndex = () => {
  const { data, isLoading } = useQuery("squids", () =>
    axios.get("api/v1/squids").then((res) => res.data)
  );

  if (isLoading) {
    return <h1>.....</h1>;
  }

  return (
    <div className="squids">
      <Squids squids={data.squids} />
    </div>
  );
};

export { SquidIndex };
