import { useState, useEffect } from "react";
import { getProductByCategoryId, ProductsList } from "../data/ProductsData";
import ProductItem from "../components/Products/ProductItem";
import { useParams } from "react-router-dom";
import { Product } from "../interface/product";

const Products = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const allProducts = await ProductsList();
      const filteredProducts = categoryId
        ? await getProductByCategoryId(categoryId)
        : allProducts?.data?.result;
      setProducts(filteredProducts?.data || allProducts?.data?.result);
    } catch (error) {
      console.error(error);
    }
  };

    fetchProducts();
  }, [categoryId]);

  return (
    <section>
      <div className="banhSN">
        <div className="banhSN-content">
          <h2 className="banhSN-content_h2">Bánh sinh nhật</h2>
          <div className="banhSN-content_text">
            <span>
              Sản phẩm đặc trưng của LaFuong Pastry là bánh Entremet – dòng bánh
              lạnh cao cấp nhất của Pháp, với sự hài hoà của các tầng hương vị và
              kết cấu đặc biệt trong từng chiếc bánh.
            </span>
          </div>
        </div>
      </div>
      <div
        className="arrange"
        style={{
          width: "fit-content",
          marginLeft: "auto",
          paddingBottom: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <select style={{ width: "fit-content" }}>
          <option value="default">Sắp theo giá sản phẩm</option>
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>
      <div className="banhSN-eat grid-4 bt">
        {products.map((item) => (
          <ProductItem key={item._id} Product={item} />
        ))}
      </div>
      <div style={{ display: "flex", padding: "5px", gap: "20px" }}>
        <button></button>
        <button style={{ padding: "5px", width: "fit-content" }}></button>
      </div>
    </section>
  );
};

export default Products;
