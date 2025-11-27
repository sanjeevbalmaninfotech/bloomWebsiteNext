import axiosInstance from './axiosInstance';
import { AxiosRequestConfig } from 'axios';

export const apiGet = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.get<T>(url, config);
  return response.data;
};

export const apiPost = async <T = unknown, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.post<T>(url, data, config);
  return response.data;
};

export const apiPut = async <T = unknown, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.put<T>(url, data, config);
  return response.data;
};

export const apiPatch = async <T = unknown, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.patch<T>(url, data, config);
  return response.data;
};

export const apiDelete = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.delete<T>(url, config);
  return response.data;
};
