import { Link } from "react-router-dom"
import { Product } from '../../interface/product';
const link = "http://localhost:3000/images"
const ProductItem = ({Product} : {Product: Product}) => {

  return (
     <div key={Product._id}   className="relative br bb banhSN-eat-link" >
          <div className="banhSN-eat-list">
            <Link to={`/product/${Product.slug}`}>
            <div  className="banhSN-eat-h2">{Product.name}</div>
            <div className="banhSN-eat-name">{Product.material}</div>
            <div className="banhSN-eat-prce">{Product.price} ₫</div>
            </Link>
          </div>
          <div className="banhSN-eat-img relative pb-100">
            <div className="banhSN-eat-img-item">
              <img loading="lazy" src={`${link}/${Product.img}`} alt={Product.name}/>
            </div>
          </div>
          <input type="hidden"/>
          <div className="banhSN-eat-more"><span>Xem thêm</span></div>
          <button className="add-fast add btn-buy" >Thêm sản phẩm</button>
          </div>
  )
}

export default ProductItem