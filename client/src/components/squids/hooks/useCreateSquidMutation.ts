import axios from "axios";
import { useMutation } from "react-query";
import { DatabaseErrors } from "../Errors";
import { Squid } from "../Squid";


const useCreateSquidMutation = () =>
useMutation(async (squidValues: Squid) => {
    await axios
      .post("api/v1/squids", squidValues)
      .then((resp) => resp.data)
      .catch((error: DatabaseErrors) => {
        throw error;
      });
  });

export { useCreateSquidMutation };
