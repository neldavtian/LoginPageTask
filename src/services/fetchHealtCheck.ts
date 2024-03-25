// import { IHealthCheckResponse } from "../types/servicesTypes";
import { HEALTH_CHECK_PATH } from "../constants";
import getUrl from "../helpers/getUrl";
import instance from "./instance";

const HEALTH_CHECK_URL = getUrl(HEALTH_CHECK_PATH, "", "");

export const fetchHealthCheck = async () => {
  const result = await instance.get(HEALTH_CHECK_URL);

  return result;
};
