import axios from "axios"
import { UserLogin } from '../interface/Users';
const API_URL=  import.meta.env.VITE_API_URL+"/users"

 const signin = async (data: UserLogin) => {
  try {
    const resp = await axios.post(`${API_URL}/login`,data)
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

 const signup = async(body:{name:string,email: string,pass: string}) => {
  try {
    const resp = await axios.post(`${API_URL}/`,body)
    return resp
  } catch (error) {
    console.log(error);
    
  }
}

export {signup, signin}