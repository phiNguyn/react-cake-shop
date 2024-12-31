import { Product } from '../../interface/product';
import { useCartStore } from '../../store/Cart';

const ButtonAddCart = ({ Product }: { Product: Product }) => {
  const { addToCart } = useCartStore((state) => state)
  const handleAddToCart = () => {
    addToCart({
      _id: Product._id,
      price: Product.price,
      quantity: 1,
      product: Product
    })

  }
  return (
    <button onClick={handleAddToCart} className="add-fast add btn-buy btn-primary" >Thêm sản phẩm</button>
  )
}

export default ButtonAddCart