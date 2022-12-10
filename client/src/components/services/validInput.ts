import { SquidData } from "../squids/SquidForm";
import { prepSquidData } from "./prepSquidData";

const validInput = (formData: {
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: string;
}): SquidData => {
  let submitErrors: {
    errors: string;
  } = {
    errors: "",
  };
  const requiredFields = ["name", "species"];
  requiredFields.forEach((field) => {
    if (formData[field].trim() === "") {
      submitErrors = {
        ...submitErrors,
        [field]: "is blank",
      };
    }
  });

  if (Object.keys(submitErrors).length === 0) {
    return prepSquidData(formData);
  }
  return { errors: submitErrors };
};

export { validInput };
