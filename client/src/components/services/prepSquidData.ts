interface SquidFormInput {
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: string | number;
}

const prepSquidData = (formInput: SquidFormInput) => {
  const updatedFormInput = {
    ...formInput,
    name: formInput.name,
    species: formInput.species,
    specialPower: formInput.specialPower,
    experiencePoints: +formInput.experiencePoints,
  };
  return updatedFormInput;
};

export { prepSquidData };
