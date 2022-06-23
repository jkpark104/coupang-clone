import axios, { AxiosRequestConfig } from "axios";
import cookies from "js-cookie";
import { API_HOST } from "../constants";

interface RequestGet {
  endPoint: string;
  config?: AxiosRequestConfig;
}

class UserService {
  private readonly API_HOST = API_HOST;

  private async requestGet({ endPoint, config }: RequestGet) {
    const { data } = await axios.get(endPoint, config);

    return data;
  }

  async me() {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) return;

    return this.requestGet({
      endPoint: `${this.API_HOST}/users/me`,
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
  }

  async read(id: number) {
    return this.requestGet({
      endPoint: `${this.API_HOST}/users/me${id}`,
    });
  }
}

export default new UserService();
