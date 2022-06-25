import cookies from "js-cookie";
import BaseService from "./base.service";

class UserService extends BaseService<null> {
  async me() {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) return;

    return this.requestGet({
      endPoint: "users/me",
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
  }

  async read(id: number) {
    return this.requestGet({
      endPoint: `users/me/${id}`,
    });
  }
}

export default new UserService();
