import { API, AUTH_SERVICE, BASE_HOST } from "../constants";
import { PathType } from "../types/globalTypes";

const getUrl = (path: PathType, service: string = AUTH_SERVICE, api: string = API) => {
  return `${BASE_HOST}${api}${service}${path}`;
};

export default getUrl;
