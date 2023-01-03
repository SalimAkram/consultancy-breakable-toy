interface ValidInput {
  [key: string]: string;
}
const validInput = (formData: ValidInput) => {
  let errors: {
    errors: string | null
  } = { errors: null };
  const requiredFields = ["name", "species"];
  requiredFields.forEach((field) => {
    if (formData[field].trim() === "") {
      errors = {
        ...errors,
        [field]: "is blank",
      };
    }
  });  
  if (Object.keys(errors).length > 1) {
    return { errors };
  } 
};

export { validInput };
