import { ILogin, ILoginResponse } from "../types/servicesTypes";
import { LOGIN_PATH } from "../constants";
import getUrl from "../helpers/getUrl";
import instance from "./instance";

const LOGIN_URL = getUrl(LOGIN_PATH);

export const fetchLogin = async (loginPayload: ILogin) => {
  const result = await instance.post<ILoginResponse>(LOGIN_URL, loginPayload);

  return result;
};
