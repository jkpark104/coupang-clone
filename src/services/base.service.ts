import axios from 'axios'
import { API_HOST } from '../constants'
import { RequestGet, RequestPost, Response } from './types'

export default abstract class BaseService {
  private readonly API_HOST = API_HOST

  protected async requestPost<T>({
    payload,
    config,
    endPoint,
  }: RequestPost<T>) {
    const { data } = await axios.post<Response>(
      `${this.API_HOST}/${endPoint}`,
      payload,
      config
    )

    return data
  }

  protected async requestGet({ endPoint, config }: RequestGet) {
    const { data } = await axios.get(`${this.API_HOST}/${endPoint}`, config)

    return data
  }
}
