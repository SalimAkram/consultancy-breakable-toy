import React  from "react";
import { Squid } from "./Squid";

import { SquidTile } from "./SquidTile";

interface SquidsProps {
  squids: Squid[] | undefined;
}

const Squids = ({ squids }: SquidsProps): JSX.Element => {
  const squidsArray = squids?.map((squid) => (
    <div className="squids__tile" key={squid.id}>
      <SquidTile squid={squid} />
    </div>
  ));

  return <div className="squids__show">{squidsArray}</div>;
};

export { Squids };
