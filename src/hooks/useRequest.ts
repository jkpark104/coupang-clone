import { useQuery } from "react-query";
import { UserService } from "../services";

const services = {
  me: UserService.me,
};

export const useRequest = (queryKey: keyof typeof services) => {
  const { data, isError, isLoading } = useQuery(queryKey, services[queryKey], {
    refetchInterval: 500,
  });

  return { data, isError, isLoading };
};
