import React from "react";

import { useParams } from "react-router-dom";

import { getZodiacSign } from "../services/getZodiacSign.ts";
import { useFetchSquid } from "./hooks/useFetchSquid";

const SquidShow = () => {
  const { id } = useParams();
  const squid = useFetchSquid({ id });
  const zodiacSign = getZodiacSign(squid);
  return (
    <div className="squids__tile">
      <ul className="squids__list">
        <li className="squids__property">Name: {squid.data?.name}</li>
        <li className="squids__property">Species: {squid.data?.species}</li>
        <li className="squids__property">Special Power: {squid.data?.specialPower}</li>
        <li className="squids__property">Experience Points: {squid.data?.experiencePoints}</li>
        <li className="squids__property">Birthday: {squid.data?.birthday}</li>
        <li className="squids__property">Zodiac Sign: {zodiacSign}</li>
      </ul>
    </div>
  );
};

export { SquidShow };
