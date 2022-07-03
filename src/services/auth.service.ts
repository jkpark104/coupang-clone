import cookies from "js-cookie";
import BaseService from "./base.service";

// interface SignupAgreements {
//   privacy: boolean;
//   ad:
//     | {
//         email: boolean;
//         sms: boolean;
//         app: boolean;
//       }
//     | false;
// }

export interface UserInfo {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  agreements: SignupAgreements;
}
type SignupAgreements = {
  /** 만 14세 이상입니다 */
  terms_fourteen: boolean;
  /** 쿠팡 이용약관 동의 */
  terms_service: boolean;
  /** 전자금융거래 이용약관 동의 */
  terms_commerce: boolean;
  /** 개인정보 수집 및 이용 동의 */
  terms_privacy_collect_use: boolean;
  /** 개인정보 제3차 제공 동의 */
  agree_to_collect_third_part_information: boolean;
  /** 광고성 목적의 개인정보 수집 및 이용 동의 */
  agree_to_collect_for_ads: boolean;
  /** 이메일 수신 동의 */
  agree_to_receive_email: boolean;
  /** SMS,MMS 수신 동의 */
  agree_to_receive_sms: boolean;
  /** 앱 푸시 수신 동의 */
  agree_to_receive_push: boolean;
};

export type LoginInfo = Pick<UserInfo, "email" | "password">;

class AuthService extends BaseService {
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
  async login(loginUserInfo: LoginInfo) {
    const { access, refresh } = await this.requestPost({
      endPoint: "auth/login",
      payload: loginUserInfo,
    });

    cookies.set("accessToken", access, { expires: 1 });
    cookies.set("refreshToken", refresh, { expires: 7 });
  }
}

export default new AuthService();
