import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { Product } from '../interface/product';
import Loading from "../common/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/swiper.css'
import ProductInfo from "../components/ProductDetail/ProductInfo";
import PageTitle from "../components/PageTitle";
import BasicTabs from "../components/ProductDetail/Tabs";
import ProductAPI from "../data/ProductsData";
import { useQuery } from "@tanstack/react-query";
import APIKEYS from "../constants/ApiKeys";
// Import Swiper styles

export interface photo {
  nameImage: string,
  productId?: string,
  _id?: string
}
const ProductDetail = () => {

  const { slug } = useParams();
  const [photo, setPhoto] = useState<photo[] | []>([])
  const [relatedProducts, setRelatedProducts] = useState<Product[] | []>([])
  // 
  const { data, isLoading } = useQuery({
    queryKey: ['productDetail', slug],
    queryFn: () => ProductAPI.getProductDetail(slug),
    staleTime: 5 * 60 * 1000
  })
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        if (data) {

          setRelatedProducts(data.relatedProducts)
          const photos = data.photos;
          const mainImage = data.result.img

          if (photos.length > 0) {
            const updatePhoto = [{ nameImage: mainImage }, ...photos]
            setPhoto(updatePhoto)

          } else {
            setPhoto(photos)

          }

        }

      } catch (error) {
        console.log(error);
      }
    }
    fetchDetail()

  }, [data])


  // Chuyển đổi các phần tử React thành chuỗi HTML
  const imgHTML = photo.map(photo => (
    `<img  src="${APIKEYS.IMAGES}/${photo.nameImage}" alt="" />`
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



  if (isLoading) {
    return <div className="h-100vh ">
      <Loading />
    </div>
  }

  return (
    <>
      <section className="grid-2 detail" id="pro-detail" >
        <PageTitle title={data?.result.name} />

        <>
          {data?.result && (
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
                    <img src={`${import.meta.env.VITE_API_IMAGES}/${data.result.img}`} alt="" id="anh" />
                  </div>
                )}

              </div>
              <ProductInfo productDetail={data.result} />
            </>
          )}
        </>
      </section>
      <BasicTabs products={relatedProducts} />

    </>
  )
}

export default ProductDetail