import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { Squids } from "../components/squids/Squids";
import { Loading } from "../components/ui/Loading";

const SquidShow = () => {
  const { data, isLoading } = useQuery("squids", () =>
    axios.get("api/v1/squids").then((res) => res.data)
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="squids">
      <Squids squids={data.squids} />
    </div>
  );
};

export { SquidShow };
