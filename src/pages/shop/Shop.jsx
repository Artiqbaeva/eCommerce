import { useProduct } from "@/api/hooks/useProduct";
import { Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate()
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams()
  // const [page, setPage] = useState(1);
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16
  

  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    // setPage(page);
    if(pageS !== pageSize){
      params.set("pageSize", pageS)
      params.set("page", "1")
    }else{
      params.set("page", page)
    }
    setParams(params)
  };

  return (
    <div>
      <h2>Shop</h2>
      {/* <Products data={data?.data?.products}/> */}
      <div className="grid grid-cols-4">
        {data?.data?.products?.map((product) => (
          <div key={product.id}>
            <img onClick={()=> navigate(`/product/${product.id}`)} src={product.thumbnail} alt="" />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Shop;
