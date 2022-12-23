import { SquidData } from "../squids/SquidForm"
import { prepSquidData } from "./prepSquidData";

interface ValidFormData {
  name: string,
  species: string,
  specialPower: string,
  experiencePoints: number
}

const validInput = (formData: ValidFormData): SquidData => {  
  let submitErrors: {
    errors: string;
  } = { errors: "" };
  const requiredFields: string[] = ["name", "species"];
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
