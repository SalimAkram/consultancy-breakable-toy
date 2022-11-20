import axios from "axios";
import { useQuery } from "react-query";

const useFetchSquids = ({ page, pageSize }) => {
  const fetchSquids = () =>
    axios
      .get("api/v1/squids", {
        params: {
          pageSize,
          pageOffset: page,
        },
      })
      .then((res) => res.data);

  const { data, isLoading } = useQuery(["squids", { page }], fetchSquids, {
    keepPreviousData: true,
  });
  return { squids: data?.squids, isLoading };
};

export { useFetchSquids };
