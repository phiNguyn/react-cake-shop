import { useDispatch } from "react-redux"
import { addToCart } from '../../features/Cart/cartSlice';
import { Product } from '../../interface/product';

const ButtonAddCart = ({Product}: {Product:Product}) => {
    const dispatch = useDispatch()
  const handleAddToCart = () => {
    
    dispatch(addToCart({
      _id: Product._id,
      quantity: 1,
      price: Product.price,
      product: Product
    }))
  }
  return (
    <button onClick={handleAddToCart} className="add-fast add btn-buy btn-primary" >Thêm sản phẩm</button>
  )
}

export default ButtonAddCart