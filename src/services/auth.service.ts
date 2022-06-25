import cookies from "js-cookie";
import BaseService from "./base.service";

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

class AuthService extends BaseService<UserInfo> {
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
      endPoint: "auth/login",
      payload: loginUserInfo,
    });

    cookies.set("accessToken", access, { expires: 1 });
    cookies.set("refreshToken", refresh, { expires: 7 });
  }
}

export default new AuthService();
