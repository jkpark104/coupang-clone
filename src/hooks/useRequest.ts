import { useQuery } from "react-query";
import { UserService } from "../services";

const service = {
  me: UserService.me,
};

export const useRequest = (queryKey: keyof typeof service) => {
  const { data, isError, isLoading } = useQuery(queryKey, service[queryKey], {
    refetchInterval: 500,
  });

  return { data, isError, isLoading };
};
