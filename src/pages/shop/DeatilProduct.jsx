import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProduct } from "@/api/hooks/useProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cart";
import { toggleWishlist } from "@/redux/features/wishlist";
import { HeartFilled, HeartOutlined, ShoppingCartOutlined, CheckOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import DetailProductSkeleton from "./DetailProductSkeleton";
import { useScrollToTop } from "@/hooks/useScrollTo";

const DetailProduct = () => {
  useScrollToTop();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { getProductById } = useProduct();
  const { data, isLoading } = getProductById({ id });
  const product = data?.data;

  const wishlist = useSelector((state) => state.wishlist.value);
  const isLiked = wishlist.some((item) => item.id === Number(id));

  const [added, setAdded] = React.useState(false);
  const [mainImage, setMainImage] = React.useState("");

  React.useEffect(() => {
    if (product?.thumbnail) {
      setMainImage(product.thumbnail);
    }
  }, [product]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  if (isLoading) return <DetailProductSkeleton />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <NavLink to={-1} className="text-gray-500 hover:text-black flex items-center gap-1 mb-10">
        <ArrowLeftOutlined /> Back
      </NavLink>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div>
        
          <div className="bg-white p-10 rounded-xl shadow-sm border mb-4">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-[500px] object-contain transition-all duration-300"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-contain border rounded-lg cursor-pointer transition ${
                  mainImage === img ? "border-black" : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-gray-500 text-lg mb-6">{product.description}</p>

          <p className="text-3xl font-semibold text-gray-800 mb-4">${product.price}</p>

          <Rate disabled defaultValue={Math.round(product.rating)} />

          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full md:w-auto flex justify-center items-center gap-3 px-8 py-3 rounded-full text-white text-lg font-medium transition ${
                added ? "bg-yellow-600" : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {added ? <CheckOutlined /> : <ShoppingCartOutlined />}
              {added ? "Added" : "Add to Bag"}
            </button>

            <button
              onClick={handleToggleWishlist}
              className="w-full md:w-auto flex justify-center items-center gap-3 px-8 py-3 border border-gray-300 text-black rounded-full hover:bg-gray-100 transition"
            >
               {isLiked ? (
                       <HeartFilled style={{ color: "#ef4444", fontSize: "18px" }} />
                     ) : (
                      <HeartOutlined style={{ fontSize: "18px" }} />
                      )}
              {isLiked ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
