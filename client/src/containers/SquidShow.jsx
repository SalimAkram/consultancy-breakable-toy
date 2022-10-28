import React, { useState, useEffect } from "react";

import { getSquids } from "../components/services/getSquids";
import Squids from "../components/squids/Squids";

const SquidShow = () => {
  const [squids, setSquids] = useState({});

  useEffect(() => {
    getSquids().then((body) => {
      if (!body) {
        console.log(`there was an error`);
      } else {
        console.log("setting state for the squids coming from the database");
        setSquids(body.data.squids);
      }
    });
  }, []);

  return (
    <div className="squid__show__container">
      <Squids squids={squids} />
    </div>
  );
};

export default SquidShow;
