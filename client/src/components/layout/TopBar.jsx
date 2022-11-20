import React from "react";

import { Link } from "react-router-dom";

export const TopBar = () => (
  <div className="top-bar">
    <ul className="top-bar__menu">
      <li className="top-bar__title">The Squids</li>
      <li className="top-bar__nav-link top-bar__nav-link--active">
        <Link to="/squids">View Squids</Link>
      </li>
    </ul>
  </div>
);
