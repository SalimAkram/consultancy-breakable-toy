import axios from "axios";
import { useQuery } from "react-query";
import { Squid } from "../Squid";

interface FetchedSquidsProperties {
  results: Squid[]
  total: number
}

const useFetchSquids = ({ page, pageSize }: {page: number; pageSize: number}) => {
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
  return { squids: data?.squids as FetchedSquidsProperties | undefined, isLoading };
};

export { useFetchSquids };
