import { useSelector } from "react-redux"
import { cartTotalSelector } from "../../../features/Cart/selector"

const Summary = () => {
  const totalCart = useSelector(cartTotalSelector)
  return (
    <div className="cart-right ">

    <div className="absolute-center">
      <h1>Tổng đơn hàng</h1>
      <div className="banhSN-content_h2 ">{totalCart}</div>
      <a><button className="add btn-primary mt-4">Thanh toán</button></a>
  
    </div>
  
  
  <button className="absolute-bottom ">Xóa tất cả</button>
  </div>
  )
}

export default Summary