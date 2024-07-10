import axios from "axios"

const API_URL= "http://localhost:3000/products"
export const productsHotData = async () => {

  try {
    const resp = await axios.get(`${API_URL}/hot`) 
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

export const ProductsList = async () => {
  try {
    const resp = await axios.get(`${API_URL}`)
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

export const getProductByCategoryId = async (id: string| undefined) => {
  try {
    const resp = await axios.get(`${API_URL}/cate/${id}`);
    return resp
  } catch (error) {
    console.log(error);
    
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

