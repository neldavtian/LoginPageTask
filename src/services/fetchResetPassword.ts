import { IResetPassword, IResetPasswordResponse } from "../types/servicesTypes";
import { PASSWORD_RESET_PATH } from "../constants";
import getUrl from "../helpers/getUrl";
import instance from "./instance";

const PASSWORD_RESET_URL = getUrl(PASSWORD_RESET_PATH);

export const fetchResetPassword = async (
  resetPasswordPayload: IResetPassword
) => {
  const result = await instance.post<IResetPasswordResponse>(
    PASSWORD_RESET_URL,
    resetPasswordPayload
  );

  return result;
};
