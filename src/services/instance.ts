import axios from "axios";
import { BASE_HOST } from "../constants";
import { enqueueSnackbar } from "notistack";

const instance = axios.create({
  baseURL: BASE_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (config) => {
    if (typeof enqueueSnackbar === "function") {
      enqueueSnackbar("Your request is successed", {
        variant: "success",
        key: config.statusText,
        autoHideDuration: 4000,
      });
    }
    return config;
  },
  (error) => {
    if (typeof enqueueSnackbar === "function") {
      enqueueSnackbar(error.message, {
        variant: "error",
        key: error,
        autoHideDuration: 4000,
      });
    }

    return Promise.reject(error);
  }
);

export default instance;
