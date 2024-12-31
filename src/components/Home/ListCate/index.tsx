import { Link } from "react-router-dom"
import { useEffect } from "react"
import { getCategoriesHome } from "../../../data/Categories"
import { useCategoryStore } from "../../../store/Category"
import { useQuery } from "@tanstack/react-query"
import Loading from "../../../common/Loader"
import APIKEYS from "../../../constants/ApiKeys"

const ListCateHome = () => {

    const { Category, setCategory } = useCategoryStore((state) => state)
    const { data, isLoading } = useQuery({
        queryKey: ['categoryHome'],
        queryFn: getCategoriesHome,
    staleTime: 60 * 1000,

    })
    useEffect(() => {
        if (data) {
            setCategory(data)
        }
    }, [data, setCategory])
    return (
        <div className="products bt ">
            {isLoading ? <Loading /> :
                <ul className="product grid-3" id="listCategory">
                    {Category.map(cate => (
                        <li key={cate._id} className="product-item br">
                            <Link to={`/products?categoryId=${cate._id}`}>
                                <h2 className="product-item_type">{cate.name}</h2>
                                <p className="product-text">{cate.mota}</p>
                                <img src={`${APIKEYS.IMAGES}/${cate.img}`} alt="" />
                                <span>Xem tất cả</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default ListCateHome
