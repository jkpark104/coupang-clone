import { useMutation } from "react-query";
import { AuthService, UserInfo, LoginInfo } from "../services";

interface AuthServiceRefresh {
  mutationKey: "refresh";
}

interface AuthServiceSignup {
  mutationKey: "signup";
  userInfo: UserInfo;
}

interface AuthServiceLogin {
  mutationKey: "login";
  loginInfo: LoginInfo;
}

type AuthService = AuthServiceRefresh | AuthServiceSignup | AuthServiceLogin;

const getMutationFunction = (params: AuthService) => {
  const { mutationKey } = params;

  switch (mutationKey) {
    case "refresh":
      return AuthService.refresh;

    case "signup":
      return () => AuthService.signup(params.userInfo);

    case "login":
      return () => AuthService.login(params.loginInfo);
  }
};

export const useRequestPost = (params: AuthService) => {
  const { mutationKey } = params;

  const mutationFunction = getMutationFunction(params);

  const { data, isError, isLoading } = useMutation(
    mutationKey,
    mutationFunction
  );

  return { data, isError, isLoading };
};
