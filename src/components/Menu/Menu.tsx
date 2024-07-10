import { useEffect, useState } from "react"
import { Category } from "../../interface/category"
import { getCategories } from "../../data/Categories"
import { Link } from "react-router-dom"


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
  const [active, setActive] = useState(null)
  const handleClick = (_id) =>{
    setActive(_id)
  }
  const categories = useCategory()
  return (
    <div className="flex slide-list">
      {categories.map((item) => (
        <span key={item._id}  onClick={() => {handleClick(item._id)}}>
          <Link className={`${active=== item._id ? "red" : ""}`} to={`/products/${item._id}`} >{item.name}</Link>
        </span>
      ))}
    </div>
  )
}

export const MobileMenu = () => {
  const categories = useCategory()

  const [isOpened, setOpen] = useState(false)
  
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
              {categories.map((item) => (
                <li style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  marginLeft: "20px"
                }}
                  key={item._id}>
                  <Link to={`/products/${item._id}`} >{item.name}</Link>
                  <i className="fa-solid fa-arrow-right" style={{ rotate: "-45deg" }}></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

