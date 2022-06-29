import { useQuery } from "react-query";
import { UserService } from "../services";

interface UserServiceMe {
  queryKey: "me";
}

interface UserServiceRead {
  queryKey: "read";
  id: number;
}

type UserService = UserServiceMe | UserServiceRead;

const getQueryFunction = (params: UserService) => {
  const { queryKey } = params;

  switch (queryKey) {
    case "me":
      return UserService.me;

    case "read":
      return () => UserService.read(params.id);
  }
};

export const useRequestGet = (params: UserService) => {
  const { queryKey } = params;

  const queryFunction = getQueryFunction(params);

  const { data, isError, isLoading } = useQuery(queryKey, queryFunction, {
    refetchInterval: 500,
  });

  return { data, isError, isLoading };
};
