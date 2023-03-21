import { LoginParam } from "./auth.param";
import axios from "axios";
import { customAxios } from "../../util/axios";
import { UserResponse } from "../../types/User/user.type";
import { LoginResponse } from "../../types/\bAuth/auth.type";
import { conf } from "../../util/config";

class AuthRepository {
  public async login({ code }: LoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${conf.baseUrl}/user/dauth/login`, {
      code,
    });
    return data;
  }

  public async user(): Promise<UserResponse> {
    const { data } = await customAxios.get("/user");
    return data;
  }
}

export default new AuthRepository();
