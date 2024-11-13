import axios from "axios";
import { Order } from "../interface/order";
const API_URL = import.meta.env.VITE_API_URL


 const newOrder = (body: Order) => {
    return axios.post(API_URL+'/order',body)
}
const MOMO = (body: {_id ?: string , total_amount ?: number}) => {
    return axios.post(API_URL+'/momo/payment',body)
}

const newItem = (body: {order_id: string,
    product_id: string,
    quantity: number,
    unit_price: number,
    total_price: number}) =>{
    return axios.post(API_URL+'/orderItem/',body)
}


export {newOrder, newItem,MOMO}
