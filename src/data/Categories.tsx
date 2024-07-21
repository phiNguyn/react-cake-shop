import axios from "axios"
const API_URL=  import.meta.env.VITE_API_URL+"/categories/"

 export const getCategories = () => {
  try {
    const resp = axios.get(API_URL)
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

  export const getCategoriesHome = () => {
    try {
      const resp = axios.get(API_URL+"home")
      return resp
    } catch (error) {
      console.log(error);
      
    }

  }