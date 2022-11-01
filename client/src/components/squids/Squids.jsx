import React from "react";

import { SquidTile } from "./SquidTile";

const Squids = ({ squids }) => {
  const squidsArray = squids.map((squid) => (
    <div className="squid__tile" key={squid.id}>
      <SquidTile
        name={squid.name}
        species={squid.species}
        specialPower={squid.specialPower}
        experiencePoints={squid.experiencePoints}
      />
    </div>
  ));

  return <div className="squid__show">{squidsArray}</div>;
};

export { Squids };
