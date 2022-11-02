import React from "react";

const SquidTile = (props) => {
  const { name, species, specialPower, experiencePoints } = props;
  return (
    <div className="tile">
      <li>Name: {name}</li>
      <li>Species: {species}</li>
      <li>Special Power: {specialPower}</li>
      <li>Experience Points: {experiencePoints}</li>
    </div>
  );
};

export { SquidTile };
