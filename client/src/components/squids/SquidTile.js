import React from "react";

const SquidTile = (props) => {
  return (
    <div className="squid__show__container__squids_tile">
      <br />
      <li>Name: {props.name}</li>
      <li>Species: {props.species}</li>
      <li>Special Power: {props.specialPower}</li>
      <li>Experience Points: {props.experiencePoints}</li>
    </div>
  );
};

export default SquidTile;