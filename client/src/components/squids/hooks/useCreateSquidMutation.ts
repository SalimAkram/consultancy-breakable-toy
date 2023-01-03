import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { Squid } from "../Squid";

const useCreateSquidMutation = () =>
  useMutation(async (squidValues: Squid) => {
    await axios
      .post("api/v1/squids", squidValues)
      .then((resp) => resp.data)
      .catch((error: AxiosError) => {
        const errorMessage: string = error.response?.data.errors.data.name[0].message;
        throw new Error(errorMessage);
      });
  });

export { useCreateSquidMutation };
