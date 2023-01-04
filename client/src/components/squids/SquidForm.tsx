import React, { Dispatch, SetStateAction, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { validInput } from "../services/validInput";
import { useCreateSquidMutation } from "./hooks/useCreateSquidMutation";
import { prepSquidData } from "../services/prepSquidData";
import { InputErrors } from "./Errors";
interface SquidFormProps {
  setDisplay: Dispatch<SetStateAction<boolean>>;
  setFormSuccess: Dispatch<SetStateAction<boolean>>;
}
interface SquidFormData {
  [key: string]: string;
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: string;
}

const SquidForm = ({ setDisplay, setFormSuccess }: SquidFormProps): JSX.Element => {
  const [inputErrors, setInputErrors] = useState<InputErrors | null>(null);
  const [databaseErrors, setDatabaseErrors] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SquidFormData>({
    defaultValues: {
      name: "",
      species: "",
      specialPower: "",
      experiencePoints: "",
    },
  });
  const squidPost = useCreateSquidMutation();
  const clear = () => {
    reset();
    setInputErrors(null);
    setDatabaseErrors(null);
  };

  const onSubmit: SubmitHandler<SquidFormData> = (squidFormData: SquidFormData) => {
    const invalidSquidData = validInput(squidFormData);
    if (invalidSquidData) {
      setInputErrors(invalidSquidData);
    } else {
      const postSquidData = prepSquidData(squidFormData);
      if (postSquidData) {
        squidPost.mutate(postSquidData, {
          onSuccess: () => {
            clear();
            setDisplay(false);
            setFormSuccess(true);
          },
          onError: (error) => {
            if (error instanceof Error) {
              setDatabaseErrors(error.message);
            }
          },
        });
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="form__label" htmlFor="name">
          Name
          <input
            className="form__input"
            type="text"
            {...register("name", { required: "Your squids gotta have a name!" })}
            id="name"
          />
          {inputErrors?.errors.name && <p className="form__error">Invalid Input</p>}
          {databaseErrors && <p className="form__error">{databaseErrors}</p>}
          <p className="form__error">{errors.name?.message}</p>
        </label>
      </div>
      <div>
        <label className="form__label" htmlFor="species">
          Species
          <input
            className="form__input"
            type="text"
            {...register("species", { required: "Your squids gotta have a species!" })}
            id="species"
          />
          {inputErrors?.errors.species && <p className="form__error">Invalid Input</p>}
          <p className="form__error">{errors.species?.message}</p>
        </label>
      </div>
      <div>
        Special Powers
        <label className="form__label" htmlFor="specialPower">
          <input className="form__input" type="radio" {...register("specialPower")} value="ink" />
          Ink
          <input
            className="form__input"
            type="radio"
            {...register("specialPower")}
            value="camouflage"
          />
          Camouflage
          <input
            className="form__input"
            type="radio"
            {...register("specialPower")}
            value="bioluminescence"
          />
          Bioluminescence
          <input
            className="form__input"
            type="radio"
            {...register("specialPower")}
            value="flight"
          />
          Flight
        </label>
      </div>
      <div>
        Experience Points
        <label className="form__label" htmlFor="experiencePoints">
          <select
            className="form__input"
            {...register("experiencePoints", {
              required: "Your squid has gotta have some experience points!",
            })}
          >
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p className="form__error">{errors.experiencePoints?.message}</p>
        </label>
      </div>
      <div>
        <input type="submit" value="submit" className="form__button form__button--active" />
        <button type="button" onClick={() => clear()} className="form__button form__button--active">
          clear
        </button>
      </div>
    </form>
  );
};

export { SquidForm };
