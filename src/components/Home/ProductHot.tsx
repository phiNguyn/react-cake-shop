import { useEffect } from "react"
import ProductItem from "../Products/ProductItem"
import { useProductStore } from "../../store/Product";
import { useQuery } from "@tanstack/react-query";
import ProductAPI from "../../data/ProductsData";
import Loading from "../../common/Loader";
const ProductHot = () => {
  const { Product, setProduct } = useProductStore((state) => state)
  const { data, isLoading } = useQuery({
    queryKey: ['productHot'],
    queryFn: ProductAPI.productsHotData,
    staleTime: 60 * 1000,

  })
  useEffect(() => {
    if (data) {
      setProduct(data)
    }
  }, [data, setProduct])
  return (
    <section className="noibat bt">
      <div className="mota">
        <h2 className="mota-h2">Sản phẩm nổi bật</h2>
        <p className="mota-nd_p mt-4">Sản phẩm đặc trưng của Ipun là bánh Entremet – dòng bánh lạnh cao cấp nhất của Pháp, với sự hài hòa của các tầng hương vị và kết cấu đặc biệt trong từng chiếc bánh.</p>
        <div className="mota-link mt-6">
          <a>XEM TẤT CẢ</a>
        </div>
      </div>

      {isLoading ? <Loading /> :
        <div className="banh-ngon-list grid-4">
          {Product.map((item) => (
            <ProductItem key={item._id} Product={item} />
          ))}
        </div>
      }
    </section>
  )
}

export default ProductHot