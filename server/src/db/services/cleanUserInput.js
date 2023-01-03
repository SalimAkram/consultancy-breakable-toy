const cleanUserInput = (formInput) => {
  const textInputs = {name: formInput.name, species: formInput.species}
  Object.keys(textInputs).forEach((field) => {
    if (textInputs[field] === "") {
      delete textInputs[field];
    }
  })
  const newFormInput = {
    ...formInput,
    name: textInputs.name.toLowerCase().trimStart().trimEnd(),
    species: textInputs.species
  }
  return newFormInput;
};
  
export { cleanUserInput };
