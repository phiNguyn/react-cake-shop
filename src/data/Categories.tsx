import axiosClient from "./apiClient"

export const getCategories = async () => {
  try {
    const resp = await axiosClient.get('/categories')
    return resp.data
  } catch (error) {
    console.log(error);

  }
}

export const getCategoriesHome = async () => {
  try {
    const resp = await axiosClient.get('/categories/home')

    return resp.data
  } catch (error) {
    console.log(error);
  }

}