import APIKEYS from "../constants/ApiKeys";
import axiosClient from "./apiClient"

export const getCategories = async () => {
  try {
    const resp = await axiosClient.get(`/${APIKEYS.categories}`)
    return resp.data
  } catch (error) {
    console.log(error);

  }
}

export const getCategoriesHome = async () => {
  try {
    const resp = await axiosClient.get(`/${APIKEYS.categories}/home`)

    return resp.data
  } catch (error) {
    console.log(error);
  }


}

export const getCategoryById = async (id: string | null) => {
  const resp = await axiosClient.get(`/${APIKEYS.categories}/${id}`)
  return resp.data
}