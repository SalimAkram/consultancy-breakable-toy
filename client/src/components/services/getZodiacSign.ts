import { getZodiac } from "horoscope";
import { SquidShow } from "../squids/SquidShow"

const getZodiacSign = (squid: SquidShow): string | null => {  
  const year: number | string | undefined = squid.data?.birthday.slice(squid.data.birthday.length - 4);
  if (year) {
    return getZodiac(+year);
  }
  return null;
};

export { getZodiacSign };
