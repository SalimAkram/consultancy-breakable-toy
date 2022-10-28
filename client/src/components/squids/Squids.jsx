/* eslint-disable react/jsx-filename-extension */

import React from "react";

import SquidTile from "./SquidTile";

const Squids = (props) => {
  let squidsArray;
  
  if(props.squids.length > 0) {
    squidsArray = props.squids.map((squid) => (
      <div className="squid" key={squid.id}>
        <SquidTile
          name={squid.name}
          species={squid.species}
          specialPower={squid.specialPower}
          experiencePoints={squid.experiencePoints}
        />
      </div>
    ));
  }

  return <div>{squidsArray}</div>;
};

export default Squids;
