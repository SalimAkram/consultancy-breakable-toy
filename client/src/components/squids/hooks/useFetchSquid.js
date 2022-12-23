import axios from "axios";
import { useQuery } from "react-query";

const useFetchSquid = ({ id }) => {
  const fetchSquid = async () => axios.get(`/api/v1/squids/${id}`).then((res) => res.data);
  const { data, isLoading } = useQuery(["squids", { id }], fetchSquid, {
    keepPreviousData: true,
  });
  return { data: data?.squid, isLoading };
};

export { useFetchSquid };
