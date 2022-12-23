import React, { ReactElement } from "react";

import { SquidTile } from "./SquidTile";

export interface Squid {
  id: string;
  name: string;
  species: string;
  specialPower: String;
  experiencePoints: number;
}

const Squids = ({ squids }): ReactElement=> {
  console.log(squids);
  
  const squidsArray: Squid[] = squids?.map((squid: Squid) => (
    <div className="squids__tile" key={squid.id}>
      <SquidTile squid={squid} />
    </div>
  ));

  return <div className="squids__show">{squidsArray}</div>;
};

export { Squids };
