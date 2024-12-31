import { Link } from "react-router-dom"
import { useCartStore } from "../../../store/Cart"

const Summary = () => {
  const { cartItems, removeCart } = useCartStore((state) => state)
  const cartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)

  return (
    <div className="cart-right br">

      <div className="absolute-center">
        <h1>Tổng đơn hàng</h1>
        <div className="banhSN-content_h2 ">{cartTotal}</div>

        <div className="flex mt-4 gap-5">

          <Link to={'/checkout'} className="add btn-primary ">Thanh toán</Link>
        </div>
      </div>

      <button onClick={() => removeCart()}>Xóa giỏ hàng</button>
    </div>
  )
}

export default Summary