import React from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

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

  const onSubmit = async (squidValues) => {
    await axios
      .post("api/v1/squids", squidValues)
      .then((response) => {
        console.log("ok", response);
      })
      .catch((error) => {
        if (error.response) {
          console.log("e1", error.response.data);
          console.log("e2", error.response.status);
          console.log("e3", error.response.headers);
        } else if (error.request) {
          console.log("e4", error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  const refresh = () => {};

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
          <input
            className="form__input"
            type="checkbox"
            {...register("specialPower")}
            value="ink"
          />
          Ink
          <input
            className="form__input"
            type="checkbox"
            {...register("specialPower")}
            value="camouflage"
          />
          Camouflage
          <input
            className="form__input"
            type="checkbox"
            {...register("specialPower")}
            value="bioluminescence"
          />
          Bioluminescence
          <input
            className="form__input"
            type="checkbox"
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
        <button type="button" onClick={refresh} className="form__button form__button--active">
          Refresh
        </button>
      </div>
    </form>
  );
};

export { SquidForm };
