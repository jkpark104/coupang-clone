import { useMutation } from "react-query";
import { AuthService, UserInfo } from "../services";

interface AuthServiceRefresh {
  queryKey: "refresh";
}

interface AuthServiceSignup {
  queryKey: "signup";
  userInfo: UserInfo;
}

interface AuthServiceLogin {
  queryKey: "login";
  loginInfo: Pick<UserInfo, "email" | "password">;
}

type AuthService = AuthServiceRefresh | AuthServiceSignup | AuthServiceLogin;

const getQueryFunction = (params: AuthService) => {
  const { queryKey } = params;

  switch (queryKey) {
    case "refresh":
      return AuthService.refresh;

    case "signup":
      return () => AuthService.signup(params.userInfo);

    case "login":
      return () => AuthService.login(params.loginInfo);
  }
};

export const useRequestPost = (params: AuthService) => {
  const { queryKey } = params;

  const queryFunction = getQueryFunction(params);

  const { data, isError, isLoading } = useMutation(queryKey, queryFunction);

  return { data, isError, isLoading };
};
