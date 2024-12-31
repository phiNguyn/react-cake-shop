import { useState, useEffect, ChangeEvent } from "react";
import Pagination from '@mui/material/Pagination';
import ProductItem from "../components/Products/ProductItem";
import { useParams, useSearchParams } from "react-router-dom";
import SecTionCate from "../components/Products/SecTionCate";
import ProductSort from '../components/Products/ProductSort';
import Loading from "../common/Loader";
import { useProductStore } from "../store/Product";
import { useQuery } from "@tanstack/react-query";
import ProductAPI from "../data/ProductsData";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const q = searchParams.get("q");

  // const [cate, setCate] = useState<Category | null>(null);



  const { filters, setFilters } = useProductStore((state) => state)
  const { data, isLoading } = useQuery({
    queryKey: ['products', { filters, q, categoryId }],
    queryFn: () =>
      ProductAPI.ProductsList({
        ...filters, ...(q && { q }), ...(categoryId && { categoryId })
      }),
    staleTime: 60 * 1000,

  })





  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setIsLoading(true)
  //     try {
  //       let allProducts;
  //       if (categoryId) {
  //         allProducts = await getProductByCategoryId(categoryId, filter.page, filter.limit, filter.sortOrder);
  //         setCate(allProducts?.data.category);
  //      


  //       } else if (q) {
  //         allProducts = await getProductBySearch(q);
  //         setCate(null);
  //         setPagination(undefined)
  //         setProducts(allProducts?.data?.allPro)
  //         console.log(filter);

  //       } else {
  //         allProducts = await ProductsList(filter.page, filter.limit, filter.sortOrder);
  //         setCate(null);
  //         setPagination(allProducts?.data.panigation);
  //         setProducts(allProducts?.data.result)
  //         console.log(filter);

  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     setIsLoading(false)
  //   };


  //   fetchProducts();
  //   window.scrollTo(0, 0);
  // }, [categoryId, q, filter, pathname]);

  // chức năng phân trang
  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setFilters({
      ...filters,
      page: page
    });
  }

  // sắp xếp sản phẩm theo giá
  const handleSortChange = (newSortValue: string) => {
    setFilters({
      ...filters,
      sortOrder: newSortValue
    });
  }

  return (
    <section style={{ minHeight: "100vh" }}>
      {isLoading ?
        (<Loading />)
        :
        (
          <>
            {/* {cate && <SecTionCate cate={cate} />} */}
            <ProductSort onChange={handleSortChange} currentSort={filters?.sortOrder} />

            <div className="banhSN-eat grid-4 bt mb-0-5px">
              {data?.result?.map(item => (
                <ProductItem key={item._id} Product={item} />
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", padding: "20px" }} className="">
              {data?.panigation &&
                <Pagination count={data.panigation.countPage} page={data.panigation.currentPage} onChange={handlePageChange} color="primary" />
              }
            </div>
          </>
        )
      }
    </section>
  );
};

export default Products;
