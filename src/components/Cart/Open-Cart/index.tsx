import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Badge } from '@mui/material';
import Item from '../CartItem/index';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../../store/Cart';
import { useState } from 'react';

export default function TemporaryDrawer() {
  const { cartCount, cartItems } = useCartStore((state) => state)
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100%", p: 2 }} role="presentation" >
      <div className="flex jus-between py-5">
        <p>Giỏ hàng</p>
        <Button size='large' variant='contained' color='info' onClick={toggleDrawer(false)}><i className="fa-solid fa-x"></i></Button>
      </div>
      {cartItems.map(item => (

        <Item key={item._id} item={item} />
      ))

      }
      <div className='flex gap-5 mt-4'>
        <Link to={'/cart'} className='add' onClick={toggleDrawer(false)}>Xem giỏ hàng</Link>
        <Link to={'/checkout'} style={{ background: "black", color: "white" }} className='add' onClick={toggleDrawer(false)}>Thanh toán</Link>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>

        <Badge badgeContent={cartCount} color="primary">
          <span className="relative"><i style={{ color: "black" }} className="fa-solid fa-cart-shopping fa-xl"></i> </span>

        </Badge>
      </Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
