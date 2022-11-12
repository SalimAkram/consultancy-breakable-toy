const prepSquidData = (formInput) => {
  const updatedFormInput = {
    ...formInput,
    name: formInput.name,
    species: formInput.species,
    specialPower: formInput.specialPower,
    experiencePoints: parseInt(formInput.experiencePoints, 10),
  };
  return updatedFormInput;
};

export { prepSquidData };
