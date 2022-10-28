import React, { useState, useEffect } from "react";

import getSquids from "../components/services/getSquids";
import Squids from "../components/squids/Squids";

const SquidShow = () => {
  console.log("rendering squid show page....");
  const [squids, setSquids] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    getSquids().then((body) => {
      if (body.error) {
        console.log(`there was an error`);
      } else {
        console.log("setting state for the squids coming from the database");
        setSquids(body.squids);
      }
    });
  }, []);

  return (
    <div className="squid__show">
      <div className="squid__show__container">
        <Squids squids={squids} />
      </div>
    </div>
  )
};

export default SquidShow;
