import React from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

const SquidForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      species: "",
      specialPower: [],
      experiencePoints: "",
    },
  });

  const onSubmit = async (squidValues) => {
    console.log(squidValues);
    await axios.post("api/v1/squids", squidValues).then((res) => res.data);
  };

  const clear = () => {};

  return (
    <form className="squid-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="label-div">
        Name
        <label htmlFor="name">
          <input type="text" {...register("name")} id="name" />
        </label>
      </div>
      <div className="label-div">
        Species
        <label htmlFor="species">
          <input type="text" {...register("species")} id="species" />
        </label>
      </div>
      <div className="label-div">
        Special Powers
        <label htmlFor="specialPower">
          <input type="checkbox" {...register("specialPower")} value="ink" />
          <input type="checkbox" {...register("specialPower")} value="camouflage" />
          <input type="checkbox" {...register("specialPower")} value="bioluminescence" />
          <input type="checkbox" {...register("specialPower")} value="flight" />
        </label>
      </div>
      <div className="label-div">
        Experience Points
        <label htmlFor="experiencePoints">
          <select {...register("experiencePoints")}>
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
        </label>
      </div>
      <div>
        <input type="submit" value="submit" className="button" />
        <button type="button" onClick={clear} className="button">
          clear
        </button>
      </div>
    </form>
  );
};

export { SquidForm };
