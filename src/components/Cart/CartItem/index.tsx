import { useState } from 'react'
import { CartItem, removeItem, updateItem } from '../../../features/Cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const Item = ({ item }: { item: CartItem }) => {

  const [quan, setQuan] = useState(item.quantity)
  const dispatch = useDispatch()
  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action = {
      _id: item._id,
      product: item.product,
      quantity: parseInt(e.target.value),
      price: item.price
    }
    dispatch(updateItem(action))
  }
  const handleDeleteItem = () => {
    const action = {
      _id: item._id,
      product: item.product,
      quantity: item.quantity,
      price: item.price
    }
    dispatch(removeItem(action))
  }
  return (

    <div className="cart-left" style={{ borderBottom: "1px dashed" }}>
      <div className='flex  gap-5'>

      <img className='bd-all'  src={`${import.meta.env.VITE_API_IMAGES}/${item.product.img}`} alt={`${item.product.name}`}  />
      <div className="cart-left-content">

        <Link to={`/product/${item.product.slug}`}>
          <div style={{ fontSize: "22px", fontWeight: "bold", textTransform: "uppercase" }} >{item.product.name}</div>
        </Link>
        <div  className='flex flex-col'>
        <span> Giá: {item.product.price} VND </span>
        <span> Số lượng {item.quantity} </span>

        </div>

        <span className="flex cart-left-content-btn">
          <button onClick={() => setQuan(Math.min(5, quan - 1))} className="minus btn">-</button>
          <input onChange={handleUpdate} type="number" min="1" defaultValue={item.quantity} max="5" className="number" />
          <button onClick={() => setQuan(Math.max(5, quan + 1))} className="plus btn" >+</button>
        </span>
      </div>
      </div>

      <div className="cart-left-last">
        <div className="flex-center">{item.product.price * item.quantity}</div>
        <button onClick={handleDeleteItem} className="btn-icon del-pro"><i
          className="fa-regular fa-trash-can fa-2xl  del-pro"></i></button>

      </div>
    </div>
  )
}

export default Item