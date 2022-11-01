import React from "react";

const SquidTile = (props) => (
  <div className="tile">
    <br />
    <li>Name: {props.name}</li>
    <li>Species: {props.species}</li>
    <li>Special Power: {props.specialPower}</li>
    <li>Experience Points: {props.experiencePoints}</li>
  </div>
);

export { SquidTile };
