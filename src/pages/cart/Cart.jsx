import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCart, incrementCart, removeCart } from "@/redux/features/cart";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Math.floor(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
        <p className="text-gray-500 mt-2 mb-4">Add some products to get started.</p>
        <img
          src="https://w7.pngwing.com/pngs/675/43/png-transparent-empty-cart-illustration-thumbnail.png"
          alt="Empty cart"
          className="w-52 mb-4"
        />
        <button
          onClick={() => navigate("/shop")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
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
                <p className="text-yellow-600 font-semibold">
                  ${product.price} × {product.quantity} = ${product.price * product.quantity}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2">
           <div className="flex items-center gap-2">
             
           <button
                onClick={() => dispatch(decrementCart(product))}
                disabled={product.quantity <= 1}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >−</button>
              <span className="w-6 text-center font-semibold">{product.quantity}</span>
              <button
                onClick={() => dispatch(incrementCart(product))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >+</button>
           </div>
              <button
                onClick={() => dispatch(removeCart(product))}
                className="text-red-500 hover:text-red-600"
              >
                <DeleteOutlined />
              </button>
            </div>
          </div>
        ))}
      </div>

    
      <div className="bg-white p-4 rounded-lg shadow mt-8">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <div className="flex justify-between mb-1">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between font-bold text-yellow-600 text-lg">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
