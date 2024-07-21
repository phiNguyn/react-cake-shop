import { useEffect, useState } from "react"
import { Category } from "../../interface/category"
import { getCategories } from "../../data/Categories"
import { Link, NavLink } from "react-router-dom"
import CheckLogin from "../auth/CheckLogin"


const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await getCategories()
        setCategories(resp?.data)
      } catch (error) {
       console.log(error);
       
      }
    }
    fetch()
    
    
  }, [])
  return categories;
}

export const DesktopMenu = () => {
  
  const categories = useCategory()
  return (
    <div className="flex slide-list">
      {categories.map((item) => (
        <span key={item._id}>
          <NavLink  to={`/products/${item._id}`} >{item.name}</NavLink>
        </span>
      ))}
    </div>
  )
}

export const MobileMenu = () => {
  const categories = useCategory()

  const [isOpened, setOpen] = useState(false)
  const [isLogin,setIsLogin] = useState("")
  useEffect(() => {
    const checkLogin = CheckLogin()
    setIsLogin(checkLogin)

  },[]) 
  const logout = () => {
    localStorage.clear()
    window.location.href= '/'
  }
  return (
    <>
      <div className="nav-mb">
        <span onClick={() => setOpen(true)} className="nav-menu br"><i className="fa-solid fa-bars fa-xl"></i></span>
        <div className={ `${isOpened ? "active" : "close"}`}>
          <div className=""
            style={{
              padding: "20px",
              fontSize: "20px"
            }}>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
              <h1>Menu</h1>
              <button
                style={{ border: "none" }}>
                <i onClick={() => setOpen(false)} className="fa-solid fa-x"></i>
              </button>
            </div>
            <ul>
              <h3>Sản Phẩm</h3>
              <li className="" onClick={() => setOpen(false)} style={{marginLeft: "20px", marginBottom : "20px"}}>
                <Link to={'/products'}>Tất cả sản phẩm</Link></li>
              {categories.map((item) => (
                <li style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  marginLeft: "20px"
                }}
                  key={item._id}>
                  <Link to={`/products/${item._id}`} onClick={() => setOpen(false)}>{item.name}</Link>
                  <i className="fa-solid fa-arrow-right" style={{ rotate: "-45deg" }}></i>
                </li>
              ))}
            </ul>
              {!isLogin ? (
            <Link onClick={() => setOpen(false)} to="/sign-in" >
            <span className=""><i className="fa-regular fa-user fa-md"></i></span>
          
            <span  className=""  style={{marginLeft: "0.5rem", display: "inline"}}>Đăng nhập</span> 
          </Link>

              ) : (
                <Link onClick={() => setOpen(false)} to="/sign-in" >
            <span className=""><i className="fa-solid fa-right-from-bracket"></i></span>
          
            <span onClick={logout}  className=""  style={{marginLeft: "0.5rem", display: "inline"}}>Đăng xuất</span> 
          </Link>
              )}
          </div>
        </div>
      </div>
    </>
  )
}

