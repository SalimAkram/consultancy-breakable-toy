import { SquidData } from "../squids/SquidForm";

const prepSquidData = (formInput: {
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: string;
}): SquidData => {
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
