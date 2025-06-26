import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Products";
import { Pagination } from "antd";
import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import shop from "@/assets/shop.svg";

const Shop = () => {
  const { getProduct } = useProduct();
  const [params, setParams] = useSearchParams();

  const page = Number(params.get("page")) || 1;
  const pageSize = Number(params.get("pageSize")) || 16;
  const skip = (page - 1) * pageSize;

  const { data, isLoading } = getProduct({
    limit: 16,
    skip: skip,
  });

  const handleChangePage = (newPage, newPageSize) => {
    params.set("page", newPage);
    params.set("pageSize", newPageSize);
    setParams(params);
  };

  return (
    <div className="bg-white">
      <div className="w-full ">
        <img
          src={shop}
          alt="Shop Background"
          className="w-full  object-cover shadow rounded-b-xl max-[700px]:h-74 max-[700px]:object-cover max-[700px]:rounded-b-none"
        />
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Explore Our Products
        </h2>

        <Products
          data={data?.data?.products}
          loading={isLoading}
          count={pageSize}
        />

        <div className="flex justify-center mt-12">
          <Pagination
            current={page}
            onChange={handleChangePage}
            total={data?.data?.total || 0}
            pageSize={pageSize}
            showSizeChanger={false}
            className="custom-pagination"
          />
        </div>
        <div className="hidden max-[700px]:flex justify-center items-center gap-4 mt-8 flex-wrap">
         <NavLink to="/cart" className="flex items-center gap-2 text-base px-4 py-2 border rounded-md shadow hover:bg-yellow-100 transition">
          <i className="fa-solid fa-cart-shopping text-yellow-600"></i>
           <span>Go to cart</span>
         </NavLink>

         <NavLink to="/wishlist" className="flex items-center gap-2 text-base px-4 py-2 border rounded-md shadow hover:bg-yellow-100 transition">
          <i className="fa-regular fa-heart text-yellow-600"></i>
           <span>Go to wishlist</span>
            </NavLink>
           </div>
      </div>
      
    </div>
  );
};

export default Shop;
