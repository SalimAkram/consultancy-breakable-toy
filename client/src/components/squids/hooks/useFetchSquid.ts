import axios from "axios";
import { useQuery } from "react-query";

interface FetchedSquidProperties {
  birthday: string;
  experiencePoints: number;
  name: string;
  specialPower: string;
  species: string;
  id: string;
}

const useFetchSquid = ({ id }: { id: string }) => {
  const fetchSquid = () => axios.get(`/api/v1/squids/${id}`).then((res) => res.data);
  const { data, isLoading } = useQuery(["squids", { id }], fetchSquid, {
    keepPreviousData: true,
  });
  return { data: data?.squid as FetchedSquidProperties | undefined, isLoading };
};

export { useFetchSquid };
