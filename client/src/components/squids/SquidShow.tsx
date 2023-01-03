import React from "react";

import { useParams } from "react-router-dom";

import { getZodiacSign } from "../services/getZodiacSign";
import { useFetchSquid } from "./hooks/useFetchSquid";

export interface SquidShow {
  data?: {
    name: string;
    species: string;
    specialPower: string;
    experiencePoints: number;
    birthday: string;
    id: string;
  };
}

const SquidShow = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const squid: SquidShow = useFetchSquid({ id });
  const zodiacSign: string | null = getZodiacSign(squid);
  return (
    <div className="squids">
      <div className="squids__show">
        <ul className="squids__list">
          <li className="squids__property">Name: {squid.data?.name}</li>
          <li className="squids__property">Species: {squid.data?.species}</li>
          <li className="squids__property">Special Power: {squid.data?.specialPower}</li>
          <li className="squids__property">Experience Points: {squid.data?.experiencePoints}</li>
          <li className="squids__property">Birthday: {squid.data?.birthday}</li>
          <li className="squids__property">Zodiac Sign: {zodiacSign}</li>
        </ul>
      </div>
    </div>
  );
};

export { SquidShow };
