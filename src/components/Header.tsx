import { Link } from "react-router-dom"
import { DesktopMenu, MobileMenu } from './Menu/Menu';
const Header = () => {
  

  return (
    <header className="header bt">
    <div className="header-main relative">
      
      <Link to={'/'} className="header-logo" >
        
        <img src="../assets/images/IPUN.svg" alt="" />
      </Link>
      <nav className="nav">
        
        <div className="menu" title="Điều hướng">
          
          <Link to="/sign-in"  className="menu-span">
            <span className=""><i className="fa-regular fa-user fa-xl"></i></span>
          
            <span  className="data-nameUser"  style={{marginLeft: "0.5rem", display: "inline"}}>Đăng nhập</span> 
          </Link>
          <MobileMenu />
        </div>
        
        <div className="header-order">
          
          <div className="header-order_link order"><Link to={'/products'}>ĐẶT BÁNH</Link></div>
          <div className="header-order_link cart">
            <Link to={'/'} >
              <span className="relative"><i className="fa-solid fa-cart-shopping fa-xl"></i><span className="sl"></span> </span>
            </Link>
           
          </div>
        </div>
      </nav>
  
    </div>
  
   
    <div className="slide grid-2 bt bb">
    <DesktopMenu/>
   

        <form  method="post" className="form-search">
          <div className="form flex">
            <input className="input" placeholder="Tìm kiếm ..."   type="text"/>
            <span className="input-border"></span>
            <button className="btn-search" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
       
    </div>
  </header>
  
  )
}

export default Header