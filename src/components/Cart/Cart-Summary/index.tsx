import { useDispatch, useSelector } from "react-redux"
import { cartTotalSelector } from "../../../features/Cart/selector"
import { Link } from "react-router-dom"
import { removeCart } from "../../../features/Cart/cartSlice"

const Summary = () => {
  const totalCart = useSelector(cartTotalSelector)
  const dispatch = useDispatch()
  return (
    <div className="cart-right br">

      <div className="absolute-center">
        <h1>Tổng đơn hàng</h1>
        <div className="banhSN-content_h2 ">{totalCart}</div>

        <div className="flex mt-4 gap-5">
          
          <Link to={'/checkout'} className="add btn-primary ">Thanh toán</Link>
        </div>
      </div>

    <button onClick={() =>dispatch(removeCart())}>Xóa giỏ hàng</button>
    </div>
  )
}

export default Summary