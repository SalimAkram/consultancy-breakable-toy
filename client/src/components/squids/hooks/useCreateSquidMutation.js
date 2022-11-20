import axios from "axios";
import { useMutation } from "react-query";

const useCreateSquidMutation = () =>
  useMutation(async (squidValues) => {
    await axios
      .post("api/v1/squids", squidValues)
      .then((resp) => resp.data)
      .catch((error) => {
        throw error;
      });
  });

export { useCreateSquidMutation };
