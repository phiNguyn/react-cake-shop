
const CheckoutInfo = () => {

    

  return (
  <div className="checkout-left">

      <div >
        <h1>Thông tin người đặt hàng</h1>
      <div className="form">
        <input title="Điền họ tên" className="input" placeholder="Họ tên"   type="text"/>
        <span className="input-border"></span>
      </div>
    
      <div className=" mt-6 grid-60-30-gap">
        <div className="form">
          <input className="input" placeholder="Email" name="email" type="text"/>
          <span className="input-border"></span>
        </div>
        <div className="form ">
          <input className="input" placeholder="Số điện thoại" name="phone"   type="number"/>
          <span className="input-border"></span>
        </div>
      </div>
    
      <div className="form mt-6">
        <input className="input" placeholder="Địa chỉ"   name="diachi"  type="text"/>
        <span className="input-border"></span>
      </div>
    
    </div>
    </div>
  )
}

export default CheckoutInfo