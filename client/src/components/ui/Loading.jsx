import React from "react";

import { Bars } from "react-loader-spinner";

const Loading = () => (
  <Bars
    height="80"
    width="80"
    color="#0E0E19"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible
  />
);

export { Loading };
