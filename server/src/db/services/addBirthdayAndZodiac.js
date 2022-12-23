import { format } from "date-fns"

import { assignRandomNumber } from "../../../test/utils/assignRandomNumber.js";

const addBirthdayAndZodiac = (squid) => {
  const month = assignRandomNumber(12);
  const day = assignRandomNumber(31);
  const year = assignRandomNumber(2022);
  const newSquid = {
    ...squid,
    birthday: format(new Date(month, day, year), "MMMM/dd/yyyy"),
  };
  return newSquid;
};

export { addBirthdayAndZodiac };
