import React, { ReactElement } from "react";

import { Link } from "react-router-dom";
import { Squid } from "./Squid";
const SquidTile = ({ squid }: { squid: Squid }): JSX.Element => {
  const { name, species, specialPower, experiencePoints, id } = squid;
  return (
    <Link to={`/squids/${id}`}>
      <div className="squids__tile">
        <ul className="squids__list">
          <li className="squids__property">Name: {name}</li>
          <li className="squids__property">Species: {species}</li>
          <li className="squids__property">Special Power: {specialPower}</li>
          <li className="squids__property">Experience Points: {experiencePoints}</li>
        </ul>
      </div>
    </Link>
  );
};

export { SquidTile };
