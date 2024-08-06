import { CartItem } from "../../features/Cart/cartSlice"
const CheckoutItem = ({itemCheckout}: {itemCheckout: CartItem}) => {
    return (
   
    <div className="checkout-right-box bb" >
      <img className="bd-all " src={`${import.meta.env.VITE_API_IMAGES}/${itemCheckout.product.img}`} alt=""/>
    <div style={{display: "flex", flexDirection: "column"}} className="ml-5">
      <span className="checkout-right-name">{ itemCheckout.product.name} </span>
      <span className="checkout-right-sl">X  {itemCheckout.quantity} </span>
    </div>
    <span className="pay-price"> {itemCheckout.price * itemCheckout.quantity}  đ</span>
  </div >
   
  )
}

export default CheckoutItem