import React from "react";

const SquidTile = (props) => {
  const { name, species, specialPower, experiencePoints } = props;
  return (
    <div className="squids__tile">
      <ul className="squids__list">
        <li className="squids__property">Name: {name}</li>
        <li className="squids__item">Species: {species}</li>
        <li className="squids__item">Special Power: {specialPower}</li>
        <li className="squids__item">Experience Points: {experiencePoints}</li>
      </ul>
      {/* <dl><dt>Name</dt><dd>{name}</dd></dl> */}
    </div>
  );
};

export { SquidTile };
