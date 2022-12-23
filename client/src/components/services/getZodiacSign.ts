import { getZodiac } from "horoscope";

interface SquidProperties {
  data: {
    birthday: string,
    experiencePoints: number,
    name: string,
    specialPower: string,
    species: string
  }
}

const getZodiacSign = (squid: SquidProperties): string | null => {  
  const year: number | string = squid.data?.birthday.slice(squid.data.birthday.length - 4);
  if (year) {
    return getZodiac(+year);
  }
  return null;
};

export { getZodiacSign };
