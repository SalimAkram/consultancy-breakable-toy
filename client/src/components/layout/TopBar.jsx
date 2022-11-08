import React from "react";

import { Link } from "react-router-dom";

export const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="title">The Squids</li>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/squids">Squids</Link>
        </li>
      </ul>
    </div>
  </div>
);
