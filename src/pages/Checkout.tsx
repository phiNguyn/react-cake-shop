import toast from "react-hot-toast";
import FormCheckout from "../components/Checkout/FormCheckout"
import { MOMO, newItem, newOrder } from "../data/Order";
import { Order } from '../interface/order';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../features/Cart/selector";
import { removeCart } from "../features/Cart/cartSlice";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const orderItems = useSelector(cartItemsSelector)
  const dispatch = useDispatch()
  const { resultCode } = useParams()
  const navigate = useNavigate()
  const handleSubmitOrder = async (data: Order) => {
    console.log(data);

    try {

      const resp = await newOrder(data)
      if (resp.data.status === 'OK') {
        const _id = resp.data.newOrder._id

        const orderItemPromises = orderItems.map(item => {
          const orderItemData = {
            quantity: item.quantity,
            order_id: _id,
            product_id: item._id,
            unit_price: item.price,
            total_price: item.price * item.quantity
          }
          return newItem(orderItemData)
        })

        await Promise.all(orderItemPromises)

        const momoOrder = {
          _id: _id, total_amount: data.total_amount
        }

        toast.success(resp.data.message)



        const res = await MOMO(momoOrder)
        window.location.href = res.data.shortLink

        if (resultCode == String(0)) {
          dispatch(removeCart())
          navigate('/products')
          // setTimeout(() => {

          // }, 200);
        } else {
          navigate('/cart')
        }

      } else {
        toast.error(resp.data.message)

      }
    } catch (error) {
      console.log(error);

    }


  }



  return (
    <>
      <FormCheckout onSubmit={handleSubmitOrder} />
      <Toaster />
    </>
  )
}

export default Checkout