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
      <div className="flex flex-col items-center justify-center mt-20 space-y-4 p-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-4">Add products to your cart to see them here.</p>
        <img
          src="https://w7.pngwing.com/pngs/675/43/png-transparent-empty-cart-illustration-thumbnail.png"
          alt="Empty cart"
          className="w-64 h-auto"
        />
        <button
          onClick={() => navigate("/shop")}
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded font-semibold"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Math.floor(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <p className="text-yellow-600 font-bold mt-1">
                    ${product.price} × {product.quantity} = ${product.price * product.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decrementCart(product))}
                  disabled={product.quantity <= 1}
                  className="px-2 py-1 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300 disabled:opacity-40"
                >–</button>
                <span className="text-sm font-semibold w-6 text-center">{product.quantity}</span>
                <button
                  onClick={() => dispatch(incrementCart(product))}
                  className="px-2 py-1 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300"
                >+</button>
                <button
                  onClick={() => dispatch(removeCart(product))}
                  className="p-1 text-red-500 hover:text-red-600"
                >
                  <DeleteOutlined />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white shadow rounded-lg p-6 h-[250px]">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="text-gray-700 text-base">
            <p className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </p>
            <p className="flex justify-between font-bold text-lg text-yellow-600">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </p>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;