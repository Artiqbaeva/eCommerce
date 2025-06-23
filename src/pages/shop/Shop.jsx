import { useProduct } from "@/api/hooks/useProduct";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, Row, Col, Rate, Pagination } from "antd";
import shop from "@/assets/shop.svg";
const { Meta } = Card;
import { FunnelIcon, Squares2X2Icon, Bars3Icon, EyeDropperIcon } from '@heroicons/react/24/outline';

import { ShoppingCartOutlined, ShareAltOutlined, HeartOutlined, EyeFilled } from '@ant-design/icons';

const Shop = () => {
  const navigate = useNavigate();
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams();
  const page = parseInt(params.get("page")) || 1;
  const pageSize = parseInt(params.get("pageSize")) || 16;

  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, newSize) => {
    params.set("page", page);
    params.set("pageSize", newSize);
    setParams(params);
  };

  return (
    <section className="">
      <div className="">
        <img className="w-full" src={shop} alt="" />
      </div>
      <div className="flex mb-[46px] flex-wrap items-center justify-between gap-4 px-24 py-8 bg-[#F9F1E7] shadow-md rounded-md">
 
  <div className="flex items-center gap-3 text-gray-600">
    <FunnelIcon className="h-5 w-5 cursor-pointer hover:text-yellow-600" /><p>Filter</p>
    <Squares2X2Icon className="h-5 w-5 cursor-pointer hover:text-yellow-600" />
    <Bars3Icon className="h-5 w-5 cursor-pointer hover:text-yellow-600" />
  </div>
  <span className="text-sm text-gray-700 whitespace-nowrap">
    Showing <strong>1–16</strong> of <strong>32</strong> results
  </span>
  <div className="flex items-center gap-2 flex-wrap">
    <label htmlFor="show-select" className="text-sm text-gray-700">Show</label>
    <select
      id="show-select"
      className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-yellow-600"
    >
      <option value="16">16</option>
      <option value="24">24</option>
      <option value="32">32</option>
    </select>

    <label htmlFor="sort-select" className="text-sm text-gray-700">Sort by</label>
    <select
      id="sort-select"
      className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-yellow-600"
    >
      <option value="default">Default</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="priceHighLow">Price: High to Low</option>
      <option value="newest">Newest</option>
    </select>
  </div>
</div>
<div className="container mx-auto" >
<Row gutter={[16, 24]}>
  {data?.data?.products?.map((product) => (
    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        className="relative group overflow-hidden"
        cover={
          <div className="relative">
            <img
              alt={product.title}
              src={product.thumbnail}
              className="h-56 object-contain w-full cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            />
            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="flex items-center gap-2 bg-white text-yellow-600 px-4 py-2 rounded-full shadow hover:bg-yellow-100 text-sm font-semibold">
                <ShoppingCartOutlined />
                Add to Cart
              </button>
              <button
                          onClick={() => navigate(`/detail/${product.id}`)} 
                          className="flex items-center gap-2 bg-white text-yellow-600 px-4 py-2 rounded-full shadow hover:bg-yellow-100 text-sm font-semibold"
                          >
                       <EyeFilled />
                        See
                      </button>
              <button className="flex items-center gap-2 bg-white text-yellow-600 px-4 py-2 rounded-full shadow hover:bg-yellow-100 text-sm font-semibold">
                <HeartOutlined />
                Like
              </button>
            </div>
          </div>
        }
      >
        <Meta
          title={<span className="font-semibold">{product.title}</span>}
          description={<span className="text-yellow-600 font-bold">${product.price}</span>}
        />
        <div className="mt-2">
          <Rate disabled defaultValue={Math.round(product.rating)} />
        </div>
      </Card>
    </Col>
  ))}
</Row>
      <div className="flex justify-center mt-10 custom-pagination">
  <Pagination
    current={page}
    onChange={handleChangePage}
    total={data?.data?.total}
    pageSize={pageSize}
    showSizeChanger={false}
  />
</div>
</div>
    </section>
  );
};

export default Shop;
