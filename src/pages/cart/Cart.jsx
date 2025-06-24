import {
    decrementCart,
    incrementCart,
    removeCart,
  } from "@/redux/features/cart";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { DeleteOutlined } from "@ant-design/icons";
  
  const Cart = () => {
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
  
    return (
      <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold mb-6"> Shopping Cart</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cart.length === 0 ? (
               <div className='flex flex-col items-center justify-center h-screen'>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-4">Add products to your cart to see them here.</p>
               <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
             </div>
            ) : (
              cart.map((product) => (
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
                    >
                      –
                    </button>
                    <span className="text-sm font-semibold w-6 text-center">{product.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementCart(product))}
                      className="px-2 py-1 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeCart(product))}
                      className="p-1 text-red-500 hover:text-red-600"
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="text-gray-700 text-base">
              <p className="flex justify-between mb-2">
                <span>Total Items:</span>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </p>
              <p className="flex justify-between font-bold text-lg text-yellow-600">
                <span>Total:</span>
                <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
              </p>
            </div>
            <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;
  