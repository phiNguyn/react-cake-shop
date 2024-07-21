import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

import { Product } from '../interface/product';
import { getProductDetail } from "../data/ProductsData";

// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

import Loading from "../common/Loader";


interface photo {
  nameImage: string,
  productId: string,
  _id: string
}
const ProductDetail = () => {
  const { slug } = useParams();
  const [productDetail, setProductDetail] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [photo, setPhoto] = useState<photo[]>([])
  // 
  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true)
      try {
        const resp = await getProductDetail(slug)
       setProductDetail(resp?.data?.result)
        const photos = resp?.data?.photos;
        if(resp?.data?.photos.length > 0) {

          const updatePhoto =  [{nameImage: productDetail?.img},...photos]
        await  setPhoto(updatePhoto)

        }else{
          setPhoto(photos)
        }
        
        
      } catch (error) {
        console.log(error);

      }
      setLoading(false)
    }
    fetchDetail()
  
  }, [slug,productDetail?.img])
  
  
   // Chuyển đổi các phần tử React thành chuỗi HTML
   const imgHTML = photo.map(photo => (
    `<img src="http://localhost:3000/images/${photo.nameImage}" alt="" />`
  ));

  const pagination = {
    clickable: true,

    renderBullet: function (index: number, className: string) {

      return (
        '<div class="ipun-panigation br ' + className + '"><div>' + imgHTML[index] + '</div></div>'
      )
    }
  };

 
  
  return (

    <section className="relative grid-2 detail" id="pro-detail" >

      {loading ? (
        <div style={{ height: "100px", width: "100%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>

          <Loading />
        </div>
      ) : (
        <>
          {productDetail && (
            <>
              <div className="detail-left br bb">
              {photo.length > 0 ? (
                  <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                  >

                  
                    {photo.map((photoItem,index) => (
                      <SwiperSlide className="detail-left-item" key={index}>
                        <img src={`http://localhost:3000/images/${photoItem.nameImage}`} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>

              ) : (
                <div className="relative detail-left-item">
                <img src={`http://localhost:3000/images/${productDetail.img}`} alt="" id="anh" />
              </div>
              )}
              
              </div>




              <div className="detai-right bb">
                <div className="detai-right-tag">
                  <Link to={`/products/${productDetail.category.categoryId}`}>{productDetail.category.categoryName}</Link>
                </div>
                <h1>{productDetail.name}</h1>
                <div className="detai-right-btn" id="detai-right">
                  <span className="flex mr-4">
                    <button className="minus btn">-</button>
                    <input type="number" defaultValue="1" min="1" max="5" step="1" className="number" />
                    <button className="plus btn">+</button>

                  </span>
                  <button className="add btn-primary btn-buy" >
                    Thêm vào giỏ • {productDetail.price} đ
                  </button>
                </div>

                <div className="detai-right-content">
                  <span className="detai-right-content-text">{productDetail.material}</span>
                  <span className="">
                    <p>
                      Một chiếc bánh tươi mát với lớp mousse làm từ xoài tươi có vị ngọt
                      thanh, Secret Garden trở nên thú vị hơn bởi sự kết hợp của lớp bạt
                      bánh có hương lá dứa tươi và lớp kem phô mai - cream cheese thơm ngậy.
                    </p>
                    <p>
                      Vẻ ngoài lấp lánh được phủ bởi lớp tráng gương màu xanh bơ và cánh
                      bướm trắng độc đáo từ sô-cô-la nguyên chất, Secret Garden mang thông
                      điệp về sự lãng mạn & tinh thần tự do.
                    </p>
                  </span>
                </div>

                <div className="des1 des bt-100">
                  <h3>cảm giác bánh</h3>
                  <div>
                    <span>Nhiệt đới</span>
                    <span>Ngọt thanh</span>
                    <span>Chua nhẹ</span>
                  </div>
                </div>

                <div className="des2 des bt-100">
                  <h3>Cấu trúc vị bánh</h3>
                  <ul>
                    <li>Lớp 01: Phủ tráng gương bóng</li>
                    <li>Lớp 02: Kem mousse xoài tươi</li>
                    <li>Lớp 03: Bạt bánh lá dứa mềm</li>
                    <li>Lớp 04: Mứt xoài tươi nấu tay</li>
                    <li>Lớp 05: Kem phô-mai creamcheese</li>
                    <li>Lớp 06: Bạt bánh lá dứa mềm</li>
                  </ul>
                </div>

                <div className="des3 des bt-100">
                  <h3>Kích thước</h3>
                  <span>
                    <p>Đường kính: 18cm | Chiều cao: 5cm</p>
                    <p>Dành cho 5-10 người ăn</p>
                  </span>
                </div>

                <div className="des2 des bt-100">
                  <h3>PHỤ KIỆN TẶNG KÈM</h3>
                  <ul>
                    <li>01 Chiếc nến sinh nhật</li>
                    <li>01 Bộ đĩa và dĩa dành cho 10 người</li>
                    <li>01 Dao cắt bánh</li>
                  </ul>
                </div>

                <div className="des2 des bt-100">
                  <h3>HƯỚNG DẪN SỬ DỤNG</h3>
                  <ul>
                    <li>Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh</li>
                    <li>
                      Không nên để bánh ở nhiệt độ phòng quá 30 phút (Bánh sẽ bị chảy)
                    </li>
                    <li>Sử dụng trong vòng 03 ngày</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </>
      )}

    </section>

  )
}

export default ProductDetail