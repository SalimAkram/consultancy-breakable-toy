import React from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { validInput } from "../services/validInput";

const SquidForm = () => {
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

  const squidPost = async (postSquidData) => {
    await axios.post("api/v1/squids", postSquidData);
  };
  const { mutate, isLoading, isSuccess } = useMutation((squidValues) => squidPost(squidValues));
  const onSubmit = (squidValues) => {
    const postSquidData = validInput(squidValues);
    if (postSquidData.errors) {
      alert('one of the fields is blank, nice try >:(');
    }
    mutate(postSquidData, {
      onSettled: () => alert('cycle finished'),
      onSuccess: () => {
        alert("it worked");
        reset();
      },
      onError: () => alert("it failed"),
    });
  };

  console.log("this is loading", isLoading);
  console.log("this was a success", isSuccess);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        Name
        <label className="form__label" htmlFor="name">
          <input
            className="form__input"
            type="text"
            {...register("name", { required: "Your squids gotta have a name!" })}
            id="name"
          />
          <p className="form__error">{errors.name?.message}</p>
        </label>
      </div>
      <div>
        Species
        <label className="form__label" htmlFor="species">
          <input
            className="form__input"
            type="text"
            {...register("species", { required: "Your squids gotta have a species!" })}
            id="species"
          />
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
              required: "Your squid gotta have some experience points!",
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
        <button type="button" onClick={() => reset()} className="form__button form__button--active">
          clear
        </button>
        <button type="button" onClick={() => reset()} className="form__button form__button--active">
          Refresh
        </button>
      </div>
    </form>
  );
};

export { SquidForm };
