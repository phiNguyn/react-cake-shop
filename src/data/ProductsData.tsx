import axios from "axios"

const API_URL=  import.meta.env.VITE_API_URL+"/products"

export const productsHotData = async () => {

  try {
    const resp = await axios.get(`${API_URL}/hot`) 
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

export const ProductsList = async (page: number , limit: number,sortOrder: string) => {
  try {
    const resp = await axios.get(`${API_URL}?page=${page}&limit=${limit}&sortOrder=${sortOrder}`);
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

export const getProductByCategoryId = async (id: string| undefined, page: number,limit: number,sortOrder: string) => {
  try {
    const resp = await axios.get(`${API_URL}/cate/${id}?page=${page}&limit=${limit}&sortOrder=${sortOrder}`);
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

export const getProductBySearch  = async (name: string | undefined) => {
  try {
    const resp = await axios.get(`${API_URL}/search?name=${name}`)
    return resp
  } catch (error) {
    throw new Error
  }
}


// product detail
 
export  const getProductDetail = async (slug: string| undefined) => {
  try {
    const resp = await axios.get(`${API_URL}/${slug}`)
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

