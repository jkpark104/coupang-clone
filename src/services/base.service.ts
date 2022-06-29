import axios, { AxiosRequestConfig } from "axios";
import { API_HOST } from "../constants";

interface Request<T = any> {
  config?: AxiosRequestConfig<T>;
  endPoint: string;
}

interface RequestPost<T> extends Request<T> {
  payload: Partial<T> | null;
}

type RequestGet = Request

interface Response {
  access: string;
  refresh: string;
}

export default abstract class BaseService {
  private readonly API_HOST = API_HOST;

  async requestPost<T>({ payload, config, endPoint }: RequestPost<T>) {
    const { data } = await axios.post<Response>(
      `${this.API_HOST}/${endPoint}`,
      payload,
      config
    );

    return data;
  }

  async requestGet({ endPoint, config }: RequestGet) {
    const { data } = await axios.get(`${this.API_HOST}/${endPoint}`, config);

    return data;
  }
}
