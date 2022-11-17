import axios from "axios";
import { useMutation } from "react-query";

const useSquidMutation = () =>
  useMutation(async (squidValues) => {
    await axios
      .post("api/v1/squids", squidValues)
      .then((resp) => resp.data)
      .catch((error) => {
        throw error;
      });
  });

export { useSquidMutation };
