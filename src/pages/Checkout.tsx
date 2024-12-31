import toast from "react-hot-toast";
import FormCheckout from "../components/Checkout/FormCheckout"
import { MOMO, newOrder } from "../data/Order";
import { Order } from '../interface/order';
import { Toaster } from 'react-hot-toast';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCartStore } from "../store/Cart";
import { useEffect } from "react";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const resultCode = searchParams.get("resultCode");
  const { cartItems, removeCart } = useCartStore((state) => state)
  const navigate = useNavigate()
  const handleSubmitOrder = async (data: Order) => {
    try {
      const products = cartItems.map((item) => ({
        product_id: item._id,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.quantity * item.price
      }))
      console.log({ data, products });

      const resp = await newOrder(data, products)



      const momoOrder = {
        _id: resp.data._id, total_amount: data.total_amount
      }
      toast.success(resp.data.message)
      const res = await MOMO(momoOrder)
      window.location.href = res.data.shortLink

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
  useEffect(() => {
    if (resultCode && Number(resultCode) == 0) {
      toast.success('Thanh toán thành công')
      removeCart()
      setTimeout(() => {
        navigate('/')
      }, 2000);
    } else {
      navigate('/checkout')
    }
  }, [])
  return (
    <>
      <FormCheckout onSubmit={handleSubmitOrder} />
      <Toaster />
    </>
  )
}

export default Checkout