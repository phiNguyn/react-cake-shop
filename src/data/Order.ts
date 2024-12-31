import axios from "axios";
import { Order } from "../interface/order";
const API_URL = import.meta.env.VITE_API_URL;
export interface OrderProduct {
  quantity: number;
  product_id: string;
  unit_price: number;
  total_price: number;
}
const newOrder = (body: Order, products: OrderProduct[]) => {
  return axios.post(API_URL + "/orders", { body, products });
};
const MOMO = (body: { _id?: string; total_amount?: number }) => {
  return axios.post(API_URL + "/momo/payment", body);
};

const newItem = (body: {
  order_id: string;
  products: {
    quantity: number;
    product_id: string;
    unit_price: number;
    total_price: number;
  }[];
}) => {
  return axios.post(API_URL + "/orderItem/", body);
};

export { newOrder, newItem, MOMO };
