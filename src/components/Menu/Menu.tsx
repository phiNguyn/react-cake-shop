import { useEffect, useState } from "react"
import { getCategories } from "../../data/Categories"
import { Link, useSearchParams } from "react-router-dom"
import CheckLogin from "../auth/CheckLogin"
import { User } from "../../interface/Users"
import { useCategoryStore } from "../../store/Category"
import { useQuery } from "@tanstack/react-query"
import StorageKeys from "../../constants/storage-keys"


const useCategory = () => {
  const { Category, setCategory } = useCategoryStore((state) => state)
  const { data, } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 10 * 60 * 1000
  })
  useEffect(() => {
    if (data) {
      setCategory(data)
    }
  }, [data, setCategory])
  return Category;
}

export const DesktopMenu = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const categories = useCategory()
  return (
    <div className="flex slide-list">
      {categories.map((item) => (
        <span key={item._id}>
          <Link className={`${item._id == categoryId ? 'active' : ""}`} to={`/products?categoryId=${item._id}`} >{item.name}</Link>
        </span>
      ))}
    </div>
  )
}

export const MobileMenu = () => {
  const categories = useCategory()

  const [isOpened, setOpen] = useState(false)
  const [isLogin, setIsLogin] = useState<User | null>(null)
  useEffect(() => {
    const checkLogin = CheckLogin()
    setIsLogin(checkLogin)

  }, [])
  const logout = () => {
    localStorage.removeItem(StorageKeys.USER)
    localStorage.removeItem(StorageKeys.TOKEN)
    setTimeout(() => {
      window.location.href = '/'
    }, 500);
  }
  return (
    <>
      <div className="nav-mb">
        <span onClick={() => setOpen(true)} className="nav-menu br"><i className="fa-solid fa-bars fa-xl"></i></span>
        <div className={`${isOpened ? "active" : "close"}`}>
          <div className=""
            style={{
              padding: "20px",
              fontSize: "20px"
            }}>
            <div className="mb-5 flex jus-between item-center"
              style={{
              }}>
              <h1>Menu</h1>
              <button onClick={() => setOpen(false)} className="add w-fit-content">
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <h3>Sản Phẩm</h3>
            <ul>
              <li className="" onClick={() => setOpen(false)} style={{ marginLeft: "20px", marginBottom: "20px" }}>
                <Link to={'/products'}>Tất cả sản phẩm</Link></li>
              {categories.map((item) => (
                <li className="flex item-center jus-between mb-5 ml-5"
                  key={item._id}>
                  <Link to={`/products?categoryId=${item._id}`} onClick={() => setOpen(false)}>{item.name}</Link>
                  <i className="fa-solid fa-arrow-right" style={{ rotate: "-45deg" }}></i>
                </li>
              ))}
            </ul>
            {!isLogin ? (
              <Link onClick={() => setOpen(false)} to="/sign-in" >
                <span className=""><i className="fa-regular fa-user fa-md"></i></span>

                <span className="" style={{ marginLeft: "0.5rem", display: "inline" }}>Đăng nhập</span>
              </Link>

            ) : (
              <div className="flex-col ml-5">
                <Link className="mb-5" onClick={() => setOpen(false)} to="/" >
                  <i className="fa-regular fa-user fa-lg"></i>
                  <span className="ml-5">
                    {isLogin.name}
                  </span>

                </Link>
                <button className="w-fit-content add" onClick={() => setOpen(false)}  >
                  <span className=""><i className="fa-solid fa-right-from-bracket"></i></span>

                  <span onClick={logout} className="" style={{ marginLeft: "0.5rem", display: "inline" }}>Đăng xuất</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

