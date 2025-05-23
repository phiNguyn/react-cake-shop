import { Link } from 'react-router-dom'
import { CartItem, useCartStore } from '../../../store/Cart'
const Item = ({ item }: { item: CartItem }) => {
  const { addToCart, removeItem } = useCartStore((state) => state)
  const handleUpdate = (increment: boolean = true) => {
    const newQuantity = increment ? item.quantity + 1 : Math.max(item.quantity - 1, 1);
    addToCart({
      _id: item._id,
      product: item.product,
      quantity: newQuantity,
      price: item.price
    })
  }
  const handleDeleteItem = () => {
    removeItem(item._id)
  }
  return (
    <div className="cart-left" style={{ borderBottom: "1px dashed" }}>
      <div className='flex gap-5'>
        <img className='bd-all' src={`${import.meta.env.VITE_API_IMAGES}/${item.product.img}`} alt={`${item.product.name}`} />
        <div className="cart-left-content">
          <Link to={`/product/${item.product.slug}`}>
            <p style={{ fontSize: "22px", fontWeight: "bold", textTransform: "uppercase" }}>{item.product.name}</p>
          </Link>
          <div className='flex flex-col'>
            <span> Giá: {item.product.price} VND </span>
            <span> Số lượng {item.quantity} </span>
          </div>

          <span className="flex jus-between cart-left-content-btn">
            <button onClick={() => handleUpdate(false)} className='btn-qty'>-</button>
            <input
              className='input-num'
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdate(Number(e.target.value) > item.quantity)}
              min="1"
            />
            <button onClick={() => handleUpdate(true)} className='btn-qty'>+</button>
          </span>
        </div>
      </div>

      <div className="cart-left-last">
        <div className="flex-center">{item.product.price * item.quantity}</div>
        <button onClick={handleDeleteItem} className="btn-icon"><i className="fa-regular fa-trash-can fa-xl"></i></button>
      </div>
    </div>
  )
}

export default Item