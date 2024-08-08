import { Link } from "react-router-dom"
import { Product } from '../../interface/product';

import ButtonAddCart from "../ui/ButtonAddCart";
const link = import.meta.env.VITE_API_IMAGES


const ProductItem = ({Product} : {Product: Product}) => {

  return (
     <div key={Product._id}   className="relative bb br  banhSN-eat-link">
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
        <ButtonAddCart Product={Product}/>
          </div>
  )
}

export default ProductItem