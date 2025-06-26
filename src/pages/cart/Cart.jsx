import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCart, incrementCart, removeCart } from "@/redux/features/cart";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-4">Add products to your cart to see them here.</p>
        <img
          src="https://w7.pngwing.com/pngs/675/43/png-transparent-empty-cart-illustration-thumbnail.png"
          alt="Empty cart"
          className="w-52 h-auto mb-6"
        />
        <button
          onClick={() => navigate("/shop")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded font-semibold transition"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Math.floor(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8 md:px-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-8">
       
        <div className="flex-1 space-y-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shadow rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <p className="text-yellow-600 font-semibold mt-1 text-sm">
                    ${product.price} × {product.quantity} = ${product.price * product.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-end">
                <button
                  onClick={() => dispatch(decrementCart(product))}
                  disabled={product.quantity <= 1}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40 text-lg font-bold"
                >
                  –
                </button>
                <span className="text-base font-medium">{product.quantity}</span>
                <button
                  onClick={() => dispatch(incrementCart(product))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeCart(product))}
                  className="p-2 text-red-500 hover:text-red-600"
                >
                  <DeleteOutlined />
                </button>
              </div>
            </div>
          ))}
        </div>

      
        <div className="w-full lg:w-[350px] bg-white shadow rounded-lg p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="text-gray-700 space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between font-bold text-yellow-600 text-lg">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
