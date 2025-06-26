import React, { useState } from "react";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined, CheckOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ id, title, brand, price, thumbnail, rating }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const isLiked = wishlist.some((item) => item.id === id);

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, brand, price, thumbnail,rating }));
    setAdded(true);
  
  };
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition group overflow-hidden border border-gray-200">
      <div className="relative h-[280px] bg-gray-50">
        <img
        
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          src={thumbnail}
          alt={title}
          onClick={() => navigate(`/product/${id}`)} 
          style={{ height: "300px", cursor: "pointer" }}
        />
        <button
  onClick={() =>
    dispatch(toggleWishlist({ id, title, brand, price, thumbnail, rating }))
  }
  className="absolute top-4 right-4 bg-white rounded-full   h-[30px] w-[30px] shadow hover:bg-yellow-100 transition cursor-pointer "
>
     {isLiked ? (
    <HeartFilled style={{ color: "#ef4444", fontSize: "18px" }} />
       ) : (
    <HeartOutlined style={{ fontSize: "18px" }} />
         )}
      </button>
      </div>

    
      <div className="p-4 space-y-1">
        <h3 className="text-base font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-500">{brand}</p>
        <p className="text-yellow-600 font-bold">{price} USD</p>
          
        <div className="mt-2">
          <Rate disabled defaultValue={Math.round(rating)} />
        </div>
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`mt-3 w-full flex items-center  justify-center gap-2 ${
            added ? "bg-yellow-600" : "bg-yellow-500 hover:bg-yellow-600"
          } text-white text-sm font-semibold py-2 rounded-full transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {added ? <CheckOutlined /> : <ShoppingCartOutlined />}
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
