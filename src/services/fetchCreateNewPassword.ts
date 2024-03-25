import { ISetPassword, ISetPasswordResponse } from "../types/servicesTypes";
import { PASSWORD_SET_PATH } from "../constants";
import getUrl from "../helpers/getUrl";
import instance from "./instance";

const PASSWORD_SET_URL = getUrl(PASSWORD_SET_PATH);

export const fetchSetPassword = async (setPasswordPayload: ISetPassword) => {  
  const result = await instance.post<ISetPasswordResponse>(
    PASSWORD_SET_URL,
    setPasswordPayload
  );

  return result;
};
