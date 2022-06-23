import axios, { AxiosRequestConfig } from "axios";
import cookies from "js-cookie";
import { API_HOST } from "../constants";

interface SignupAgreements {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
}

interface UserInfo {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  agreements: SignupAgreements;
}

interface RequestPost {
  payload: Partial<UserInfo> | null;
  config?: AxiosRequestConfig<UserInfo>;
  endPoint: string;
}
interface Response {
  access: string;
  refresh: string;
}

class AuthService {
  private readonly API_HOST = API_HOST;

  private async requestPost({ payload, config, endPoint }: RequestPost) {
    const { data } = await axios.post<Response>(
      `${this.API_HOST}/${endPoint}`,
      payload,
      config
    );

    return data;
  }

  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get("refreshToken");
    if (!refreshToken) return;

    const { access, refresh } = await this.requestPost({
      endPoint: "auth/refresh",
      payload: null,
      config: {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    });

    cookies.set("accessToken", access, { expires: 1 });
    cookies.set("refreshToken", refresh, { expires: 7 });
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(userInfo: UserInfo) {
    const { access, refresh } = await this.requestPost({
      endPoint: "auth/signup",
      payload: userInfo,
    });

    cookies.set("accessToken", access, { expires: 1 });
    cookies.set("refreshToken", refresh, { expires: 7 });
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(loginUserInfo: Pick<UserInfo, "email" | "password">) {
    const { access, refresh } = await this.requestPost({
      payload: loginUserInfo,
      endPoint: "auth/login",
    });

    cookies.set("accessToken", access, { expires: 1 });
    cookies.set("refreshToken", refresh, { expires: 7 });
  }
}

export default new AuthService();
