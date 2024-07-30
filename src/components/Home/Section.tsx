import { Link } from "react-router-dom"

export const Banner = () => {
  return (
    <section className="banner">
  <img className="banner-img-absolute" src="https://lafuong.com/_next/image?url=%2FLF_Cover.webp&w=1920&q=100" alt="banner"/>
<div className="all-products-link">
    <Link to={'products'}><span>TẤT CẢ SẢN PHẨM</span></Link>
</div>
</section>
  )
}

const Section = () => {
  return (
   <>
   <section className="about bt flex-revertse">
<div className="about-left ">
  <h2 className="about-left_h2">Sự sáng tạo đến từ những hương vị tự nhiên</h2>
  <p className="about-left_p">Từ vải và dâu rừng, trà Earl Grey và cam hay xoài và lá dứa.., những chiếc bánh Entremet của LaFuong là sự kết hợp sáng tạo của nhiều tầng hương vị tự nhiên và mới lạ. Dù bạn là ai, chúng tôi mong rằng, bạn sẽ luôn tìm được chiếc bánh phù hợp với khẩu vị của riêng mình tại LaFuong.</p>
  <a className="about-left_link"href="#">XEM SẢN PHẨM</a>
</div>
<div className="about-right"><img src="https://lafuong.com/_next/image?url=%2FLF_Cooking.jpeg&w=1080&q=75" alt=""/></div>
</section>

<section className="about bt bb ">
<div className="about-left br">
  <h2 className="about-left_h2">Không chỉ là chiếc bánh, mà là một món quà</h2>
  <p className="about-left_p">Bánh của LaFuong không dành để ăn một mình, vì chúng tôi tin rằng mỗi chiếc bánh được gửi đi đều là món quà mà bạn có thể sẻ chia với những người quan trọng.</p>
  <p className="about-left_p">Từ chiếc hộp, cây nến, tấm bưu thiệp hay cách chúng tôi trao tới bạn tận tay món quà ấy, đều sẽ được LaFuong chuẩn bị thật chu đáo.</p>
  <Link to={'/products'} className="about-left_link">CÁCH ĐẶT BÁNH</Link>
</div>
<div className="about-right"><img src="https://lafuong.com/_next/image?url=%2FLF_Packaging_Delivery.jpeg&w=1080&q=75" alt=""/></div>
</section>
   </>
  )
}

export const Section1 = () => {
  return (
    <section className="about bt">
<div className="about-left br">

  
 <span className="flex " style={{gap:"5px"}}>
  <h1 className="about-left_text">IPUN </h1> <span style={{fontSize: "1.5rem"}}>  LÀ</span>
  </span> 
  <h2 className="about-left_h2">Lựa chọn lý tưởng cho bánh ngọt chuẩn Pháp</h2>
  <p className="about-left_p">Dành nhiều tình cảm đặc biệt cho bánh ngọt Pháp, chúng tôi quyết tâm tạo nên thương hiệu Ipun để mang tới cho mọi người một trải nghiệm thưởng thức bánh thật tinh tế và tận tâm.</p>
  <p className="about-left_p">Hãy một lần nếm thử bánh của LaFuong để cảm nhận những tình cảm và nỗ lực của chúng tôi, tất cả nằm ở sự hoà quyện của hương vị và kết cấu đặc biệt trong từng chiếc bánh.</p>
  <a className="about-left_link"href="#">VỀ IPUN</a>
</div>
<div className="about-right"><img src="https://lafuong.com/_next/image?url=%2FLF_Whisper-White.png&w=1080&q=75" alt=""/></div>
</section>
  )
}

export default Section