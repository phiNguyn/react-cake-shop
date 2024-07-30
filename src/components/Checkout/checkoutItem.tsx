import { CartItem } from "../../features/Cart/cartSlice"
import APIKEYS from "../../constants/ApiKeys"
const CheckoutItem = ({itemCheckout}: {itemCheckout: CartItem}) => {
    return (
   
    <div className="checkout-right-box bb" >
    <div className="bd-all" style={{marginRight: "20px"}}>
      <img src={`${APIKEYS.IMAGES}/${itemCheckout.product.img}`} alt="" width="100"/>
    </div>
    <div style={{display: "flex", flexDirection: "column"}}>
      <span className="checkout-right-name">{ itemCheckout.product.name} </span>
      <span className="checkout-right-sl">X  {itemCheckout.quantity} </span>
    </div>
    <span className="pay-price"> {itemCheckout.price * itemCheckout.quantity}  đ</span>
  </div >
   
  )
}

export default CheckoutItem