import { instance } from "./instance";

export const getUserApi = () => {
  const url = "/users";
  return instance.get(url);
};
export const addUserApi = (params) => {
  const url = "/users";
  return instance.post(url, params);
};
export const deleteUserApi = (id) => {
  const url = `users/${id}`;
  return instance.delete(url);
};
