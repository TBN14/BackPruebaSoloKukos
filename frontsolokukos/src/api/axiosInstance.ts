import axios, { CancelTokenSource, AxiosInstance } from "axios";

interface CustomAxiosInstance extends AxiosInstance {
  cancelRequest?(message?: string): void;
}

export const createAxiosInstance = (direccionIp: string, puerto: string) => {
  const axiosInstance: CustomAxiosInstance = axios.create({
    baseURL: `http://${direccionIp}:${puerto}/api/`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();

  axiosInstance.interceptors.request.use((config: any) => {
    config.cancelToken = cancelTokenSource.token;
    return config;
  });

  axiosInstance.cancelRequest = (message = "La solicitud fue cancelada") => {
    cancelTokenSource.cancel(message);
  };

  return axiosInstance;
};
