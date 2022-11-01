import React from "react";

import { Link } from "react-router-dom";

export const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">The Squids!</li>
        <li className="routes">
          <Link to="/">Home</Link>
        </li>
        <li className="routes">
          <Link to="/squids">Squids</Link>
        </li>
      </ul>
    </div>
  </div>
);
