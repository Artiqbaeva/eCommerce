import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "@/api/hooks/useProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cart";
import { toggleWishlist } from "@/redux/features/wishlist";
import { HeartFilled, HeartOutlined, ShoppingCartOutlined, CheckOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import DetailProductSkeleton from "./DetailProductSkeleton";
const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { getProductById } = useProduct();
  const { data, isLoading, isError } = getProductById({ id });

  const product = data?.data;

  const wishlist = useSelector((state) => state.wishlist.value);
  const isLiked = wishlist.some((item) => item.id === Number(id));

  const [added, setAdded] = React.useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };


  if (isLoading) {
    return <DetailProductSkeleton />;
  }
  return (
    
    <div className="container mx-auto px-4 py-10 mt-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
     
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-sm">Brand: {product.brand}</p>
          <p className="text-yellow-600 text-xl font-bold">${product.price}</p>
          <Rate disabled defaultValue={Math.round(product.rating)} />

          <p className="text-gray-700 text-base mt-4 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-white font-semibold transition ${
                added ? "bg-yellow-700" : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {added ? <CheckOutlined /> : <ShoppingCartOutlined />}
              {added ? "Added" : "Add to Cart"}
            </button>

            <button
              onClick={handleToggleWishlist}
              className="flex items-center gap-2 px-6 py-2 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-50 transition"
            >
              {isLiked ? <HeartFilled className="text-red-500" /> : <HeartOutlined />}
              {isLiked ? "Liked" : "Like"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
