import { useState, useEffect } from "react"
import { Product } from '../../interface/product';
import { productsHotData } from "../../data/ProductsData"
import ProductItem from "../Products/ProductItem"
const ProductHot = () => {
  const [productHot, setProductHot] = useState<Product[]>([])
  useEffect(() => {
    const fetchProHot = async () => {
      try {
        const resp = await productsHotData()

        setProductHot(resp?.data)
        console.log(resp?.data);

      } catch (error) {
        console.log(error);

      }
    }
    fetchProHot()
  }, [])

  return (
    <section className="noibat bt">
      <div className="mota">
        <h2 className="mota-h2">Sản phẩm nổi bật</h2>
        <p className="mota-nd_p mt-4">Sản phẩm đặc trưng của Ipun là bánh Entremet – dòng bánh lạnh cao cấp nhất của Pháp, với sự hài hòa của các tầng hương vị và kết cấu đặc biệt trong từng chiếc bánh.</p>
        <div className="mota-link mt-6">
          <a>XEM TẤT CẢ</a>
        </div>
      </div>


      <div className="banh-ngon-list grid-4">
        {productHot.map((item) => (
          <ProductItem key={item._id} Product={item}/>
        ))}
      </div>

    </section>
  )
}

export default ProductHot