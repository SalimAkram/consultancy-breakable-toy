import { prepSquidData } from "./prepSquidData";

const validInput = (formData) => {
  let submitErrors = {};
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
