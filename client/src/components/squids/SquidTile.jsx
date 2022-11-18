import React from "react";

const SquidTile = ({ squid }) => {
  const { name, species, specialPower, experiencePoints } = squid;

  return (
    <div className="squids__tile">
      <ul className="squids__list">
        <li className="squids__property">Name: {name}</li>
        <li className="squids__property">Species: {species}</li>
        <li className="squids__property">Special Power: {specialPower}</li>
        <li className="squids__property">Experience Points: {experiencePoints}</li>
      </ul>
    </div>
  );
};

export { SquidTile };
