import React from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

const SquidForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (squidValues) => {
    debugger
    await axios.post("api/v1/squids", squidValues).then((res) => res.data);
  };

  const clear = () => {};

  return (
    <div className="squid-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <label htmlFor="name">
            Name
            <input {...register("name")} id="name" />
          </label>
        </div>
        <div className="input">
          <label htmlFor="species">
            Species
            <input {...register("species")} id="species" />
          </label>
        </div>
        <div className="input">
          <label htmlFor="specialPower">
            Special Power
            <input type="checkbox" {...register("specialPower")} id="specialPower" />
          </label>
        </div>
        <div className="input">
          <label htmlFor="experiencePoints">
            Experience Points
            <input {...register("experiencePoints")} id="experiencePoints" />
          </label>
        </div>
        <input type="submit" value="submit" className="button" />
        <button type="button" onClick={clear} className="button">
          clear
        </button>
      </form>
    </div>
  );
};

export { SquidForm };
