const cleanUserInput = (formInput) => {
  Object.keys(formInput).forEach((field) => {
    if (formInput[field] === "") {
      delete formInput[field];
    }
    return formInput;
  })

   const updatedFormInput = {
    ...formInput,
    name: formInput.name,
    species: formInput.species,
    specialPower: formInput.specialPower[0],
    experiencePoints: parseInt(formInput.experiencePoints)
  }
  return updatedFormInput
};
  
export { cleanUserInput };
