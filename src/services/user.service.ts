import cookies from "js-cookie";
import BaseService from "./base.service";

class UserService extends BaseService<null> {
  async me() {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) return;

    const data = await this.requestGet({
      endPoint: "users/me",
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    return data;
  }

  async read(id: number) {
    const data = await this.requestGet({
      endPoint: `users/me/${id}`,
    });

    return data;
  }
}

export default new UserService();
