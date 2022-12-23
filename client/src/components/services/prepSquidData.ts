interface SquidFormInput {
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: number;
}

const prepSquidData = (formInput: SquidFormInput) => {
  const updatedFormInput: SquidFormInput = {
    ...formInput,
    name: formInput.name,
    species: formInput.species,
    specialPower: formInput.specialPower,
    experiencePoints: +formInput.experiencePoints,
  };  
  return updatedFormInput;
};

export { prepSquidData };
