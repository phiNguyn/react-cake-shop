
import { Link } from "react-router-dom"
import { DesktopMenu, MobileMenu } from './Menu/Menu';
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import CheckLogin from "./auth/CheckLogin";
import BasicMenu from "./Menu/BasicMenu";
import { User } from "../interface/Users";
import { cartCountSelector } from "../features/Cart/selector";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
const Header = () => {
  const cartItemsCount = useSelector(cartCountSelector)
  const [isLogin,setIsLogin] = useState<User| null>(null)
      useEffect(() => {
        const checkLogin = CheckLogin()
        setIsLogin(checkLogin)
        
      },[])

      
  return (
    <header className="header bt">
    <div className="header-main relative">
      
      <Link to={'/'} className="header-logo" >
        
        <img src="../assets/images/IPUN.svg" alt="" />
      </Link>
      <nav className="nav">
        
        <div className="menu" title="Điều hướng">
     
    {!isLogin ? (
          <Link to="/sign-in"  className="menu-span">
            <span className=""><i className="fa-regular fa-user fa-xl"></i></span>
          
            <span  className="data-nameUser"  style={{marginLeft: "0.5rem", display: "inline"}}>Đăng nhập</span> 
          </Link>

    ) : (
     <BasicMenu name={isLogin.name}/>
    )}
       
          
      
          <MobileMenu />
        </div>
        
        <div className="header-order">
          
          <div className="header-order_link order"><Link to={'/products'}>ĐẶT BÁNH</Link></div>
          <div className="header-order_link cart">
            <Link to={'/cart'} >
            <Badge badgeContent={cartItemsCount} color="primary">
               <span className="relative"><i className="fa-solid fa-cart-shopping fa-xl"></i> </span>
    </Badge>
              {/* <span className="relative"><i className="fa-solid fa-cart-shopping fa-xl"></i><span className="sl">{cartItemsCount}</span> </span> */}
            </Link>
           
          </div>
        </div>
      </nav>
  
    </div>
  
   
    <div className="slide grid-2 bt bb">
    <DesktopMenu/>
      <SearchBar/>   
    </div>
  </header>
  
  )
}

export default Header