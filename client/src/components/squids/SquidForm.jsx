import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { validInput } from "../services/validInput";
import { useCreateSquidMutation } from "./hooks/useCreateSquidMutation";

const SquidForm = ({ setDisplay, setFormSuccess, setRedirect }) => {
  const [success, setSuccess] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      species: "",
      specialPower: [],
      experiencePoints: "",
    },
  });
  const squidPost = useCreateSquidMutation();
  const clear = () => {
    reset();
    setInputErrors({});
    setSuccess(false);
  };

  const onSubmit = async (squidFormData) => {
    const postSquidData = validInput(squidFormData);
    if (postSquidData.errors) {
      setInputErrors(postSquidData.errors);
    } else {
      squidPost.mutate(postSquidData, {
        onSuccess: () => {
          clear();
          setDisplay(false);
          setFormSuccess(true);
        },
        onError: (e) => {
          setInputErrors(e.response.data.errors);
        },
      });
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
          {inputErrors.name && <p className="form__error">Invalid Input</p>}
          {inputErrors && <p className="form__error">{inputErrors.data?.name[0]?.message}</p>}
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
          {inputErrors.species && <p className="form__error">Invalid Input</p>}
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
      {success && (
        <div>
          <p className="squids__success">Squid Post Successful!</p>
          <button
            type="button"
            onClick={() => setRedirect(true)}
            className="form__button form__button--active"
          >
            click to see your new Squid!
          </button>
        </div>
      )}
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
