import { ResponseProduct, ResponseProductDetails } from "../interface/product"
import axiosClient from "./apiClient"

const API_URL = "/products"
export interface GetProductFilters {
  page?: number,
  limit?: number,
  sortOrder?: string,
  q?: string,
  categoryId?: string
}

const ProductAPI = {


  productsHotData: async () => {

    try {
      const resp = await axiosClient.get(`${API_URL}/hot`)
      return resp.data
    } catch (error) {
      console.log(error);

    }
  },

  ProductsList: async (filters?: GetProductFilters) => {
    const params = new URLSearchParams();
    if (filters) {
      if (filters.page !== undefined)
        params.append("page", filters.page.toString());
      if (filters.limit !== undefined)
        params.append("limit", filters.limit.toString());
      if (filters.sortOrder !== undefined)
        params.append("sortOrder", filters.sortOrder.toString());
      if (filters.q !== undefined)
        params.append("q", filters.q.toString());
      if (filters.categoryId !== undefined)
        params.append("categoryId", filters.categoryId.toString());
    }
    const resp = await axiosClient.get(`${API_URL}?${params.toString()}`);
    return resp.data as ResponseProduct

  },

  getProductByCategoryId: async (id: string | undefined, page: number, limit: number, sortOrder: string) => {
    try {
      const resp = await axiosClient.get(`${API_URL}/cate/${id}?page=${page}&limit=${limit}&sortOrder=${sortOrder}`);
      return resp
    } catch (error) {
      console.log(error);

    }
  },

  getProductBySearch: async (name: string | undefined) => {
    try {
      const resp = await axiosClient.get(`${API_URL}/search?name=${name}`)
      return resp.data
    } catch (error) {
      throw new Error
    }
  },


  // product detail

  getProductDetail: async (slug: string | undefined) => {
    try {
      const resp = await axiosClient.get(`${API_URL}/${slug}`)
      return resp.data as ResponseProductDetails
    } catch (error) {
      console.log(error);

    }
  }
}

export default ProductAPI