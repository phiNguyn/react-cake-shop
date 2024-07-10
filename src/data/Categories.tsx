import axios from "axios"
const API_URL= "http://localhost:3000/categories"

 export const getCategories = () => {
  try {
    const resp = axios.get(API_URL)
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

