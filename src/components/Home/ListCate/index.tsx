import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategoriesHome } from "../../../data/Categories"
import { Category } from "../../../interface/category"
const link = import.meta.env.VITE_API_IMAGES

const ListCateHome = () => {
    const [cateHome,setCateHome] = useState<Category[]>([])
    useEffect(() => {
        const fetchCate = async () => {
            try {
                const resp = await getCategoriesHome()
                setCateHome(resp?.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchCate()
    },[])
  return (
    <div className="products bt ">
    <ul className="product grid-3" id="listCategory">
    {cateHome.map(cate => (
        <li key={cate._id} className="product-item br">
        <Link to={`/products/${cate._id}`}>
        <h2 className="product-item_type">{cate.name}</h2> 
        <p className="product-text">{cate.mota}</p>
        <img src={`${link}/${cate.img}`} alt=""/>
        <span>Xem tất cả</span>
      </Link>
    </li>
    ))}     
    </ul>
</div>
)
}

export default ListCateHome
