import { useState, useEffect, ChangeEvent } from "react";
import Pagination from '@mui/material/Pagination';
import { getProductByCategoryId, getProductBySearch, ProductsList } from "../data/ProductsData";
import ProductItem from "../components/Products/ProductItem";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { pagination, Product } from "../interface/product";
import { Category } from "../interface/category";
import SecTionCate from "../components/Products/SecTionCate";
import ProductSort from '../components/Products/ProductSort';
import Loading from "../common/Loader";

const Products = () => {
  const [isLoading, setIsLoading] =useState(true)
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [products, setProducts] = useState<Product[]>([]);
  const [cate, setCate] = useState<Category | null>(null);
  const [pagination, setPagination] = useState<pagination | undefined>(undefined);
  const [filter, setFilters] = useState({
    page: 1,
    limit: 8,
    sortOrder: "default"
  });

  const { pathname } = useLocation()



  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        let allProducts;
        if (categoryId) {
          allProducts = await getProductByCategoryId(categoryId, filter.page, filter.limit, filter.sortOrder);
          setCate(allProducts?.data.category);
          setPagination(allProducts?.data.panigation)
          setProducts(allProducts?.data.pro)
          

        } else if (q) {
          allProducts = await getProductBySearch(q);
          setCate(null);
          setPagination(undefined)
          setProducts(allProducts?.data?.allPro)
          console.log(filter);

        } else {
          allProducts = await ProductsList(filter.page, filter.limit, filter.sortOrder);
          setCate(null);
          setPagination(allProducts?.data.panigation);
          setProducts(allProducts?.data.result)
          console.log(filter);

        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false)
    };
    

    fetchProducts();
    window.scrollTo(0, 0);
  }, [categoryId, q, filter, pathname]);

  useEffect(() => {
    setFilters(prevFilters => ({
      ...prevFilters,
      page: 1,
      sortOrder: "default"
    }));
  }, [categoryId]);


  // chức năng phân trang
  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      page: page,
    }));
  }

  // sắp xếp sản phẩm theo giá
  const handleSortChange = (newSortValue: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      page: 1,
      sortOrder: newSortValue
    }));
  }

  return (
    <section style={{ minHeight: "100vh" }}>
      {isLoading ?
        (<Loading />)
        :
        (
          <>
          {cate && <SecTionCate cate={cate} />}
          <ProductSort onChange={handleSortChange} currentSort={filter.sortOrder} />

          <div className="banhSN-eat grid-4 bt mb-0-5px">
            {products.map(item => (
              <ProductItem key={item._id} Product={item} />
            ))}
          </div>
          {pagination &&
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", padding: "20px" }} className="">
              <Pagination count={pagination.countPage} page={filter.page} onChange={handlePageChange} color="primary" />
            </div>
          }
          </>
        )
      }
    </section>
  );
};

export default Products;
