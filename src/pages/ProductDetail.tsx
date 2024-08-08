import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { Product } from '../interface/product';
import { getProductDetail } from "../data/ProductsData";
import Loading from "../common/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/swiper.css'
import ProductInfo from "../components/ProductDetail/ProductInfo";
import PageTitle from "../components/PageTitle";
import BasicTabs from "../components/ProductDetail/Tabs";
// Import Swiper styles

interface photo {
  nameImage: string,
  productId: string,
  _id: string
}
const ProductDetail = () => {
  const { slug } = useParams();
  const [productDetail, setProductDetail] = useState<Product>()
  const [loading, setLoading] = useState(true)
  const [photo, setPhoto] = useState<photo[]>([])
  const [relatedProducts,setRelatedProducts ] = useState([])
  // 
  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true)
      try {
        const resp = await getProductDetail(slug)
        console.log(resp?.data);
        
        setProductDetail(resp?.data?.result)
        setRelatedProducts(resp?.data.relatedProducts  )
        const photos = resp?.data?.photos;
        const mainImage = resp?.data.result.img

        if (photos.length > 0) {
          const updatePhoto = [{ nameImage: mainImage }, ...photos]
          setPhoto(updatePhoto)

        } else {
          setPhoto(photos)

        }


      } catch (error) {
        console.log(error);

      }
      setLoading(false)
    }
    fetchDetail()

  }, [slug])


  // Chuyển đổi các phần tử React thành chuỗi HTML
  const imgHTML = photo.map(photo => (
    `<img  src="${import.meta.env.VITE_API_IMAGES}/${photo.nameImage}" alt="" />`
  ));

  const pagination = {
    clickable: true,

    renderBullet: function (index: number, className: string) {

      // ipun-panigation
      return (
        '<div class=" br ' + className + '"><div>' + imgHTML[index] + '</div></div>'
      )
    }
  };

  

  if(loading) {
    return  <div className="h-100vh ">
    <Loading />
  </div>
  }

  return (
    <>
    <section className="grid-2 detail" id="pro-detail" >
       <PageTitle title={productDetail!.name} />
      
        <>
          {productDetail && (
            <>
              <div className="detail-left br bb">
                {photo.length ? (
                  <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {photo.map((photoItem, index) => (
                      <SwiperSlide className="" key={index}>
                        <img src={`${import.meta.env.VITE_API_IMAGES}/${photoItem.nameImage}`} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                ) : (
                  <div className="relative detail-left-item">
                    <img src={`${import.meta.env.VITE_API_IMAGES}/${productDetail.img}`} alt="" id="anh" />
                  </div>
                )}

              </div>
              <ProductInfo productDetail={productDetail} />
            </>
          )}
        </>
    </section>  
    <BasicTabs products={relatedProducts}/>
    
    </>
  )
}

export default ProductDetail