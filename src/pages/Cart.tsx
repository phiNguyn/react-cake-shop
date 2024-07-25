import { useSelector } from 'react-redux';
import Summary from '../components/Cart/Cart-Summary';
import Item from '../components/Cart/CartItem/index';
import { cartItemsSelector } from '../features/Cart/selector';

const Cart = () => {
    const Items= useSelector(cartItemsSelector)
  return (
<section className="grid-70-30">
  <div className="cart-box br">
    <h1 className="mt-4 text-center">Giỏ hàng </h1>
    <div className="cart-all">
    
    {Items.map(item => (
    <Item key={item._id} item={item}/>
    ))}

     

    </div>
  </div>
    <Summary/>
</section>
  )
}

export default Cart