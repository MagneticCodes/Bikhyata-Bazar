import React, { useState } from "react";
import {
  ShoppingCart,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const Cart = () => {
  // Static cart items data
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Minimalist Leather Watch",
      price: 129.99,
      image: "/api/placeholder/480/320",
      quantity: 1,
    },
    {
      id: "2",
      title: "Premium Wireless Headphones",
      price: 249.99,
      image: "/api/placeholder/480/320",
      quantity: 2,
    },
    {
      id: "3",
      title: "Organic Cotton T-shirt",
      price: 39.99,
      image: "/api/placeholder/480/320",
      quantity: 3,
    },
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Update quantity function
  const updateQuantity = (id: any, newQuantity: any) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item function
  const removeItem = (id: any) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <ShoppingCart className="mr-3" size={28} />
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart size={36} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-medium">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-6 px-6">Product</th>
                        <th className="text-center py-6 px-6">Quantity</th>
                        <th className="text-right py-6 px-6">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="border-b last:border-b-0">
                          <td className="py-6 px-6">
                            <div className="flex items-center">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="ml-4">
                                <h3 className="font-medium text-lg">
                                  {item.title}
                                </h3>
                                <p className="text-emerald-600 font-semibold mt-1">
                                  ${item.price.toFixed(2)}
                                </p>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="text-gray-500 hover:text-red-500 text-sm flex items-center mt-2"
                                >
                                  <Trash2 size={14} className="mr-1" /> Remove
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="py-6 px-6">
                            <div className="flex items-center justify-center">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                              >
                                <ChevronLeft size={16} />
                              </button>
                              <span className="w-12 text-center mx-2 font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                              >
                                <ChevronRight size={16} />
                              </button>
                            </div>
                          </td>
                          <td className="py-6 px-6 text-right font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-colors">
                    Apply
                  </button>
                </div>
                <button
                  onClick={() => setCartItems([])}
                  className="text-gray-600 hover:text-red-500 flex items-center"
                >
                  <X size={18} className="mr-1" />
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6 pb-4 border-b">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 bg-emerald-500 text-white font-medium py-3 rounded-lg hover:bg-emerald-600 transition-colors">
                  Proceed to Checkout
                </button>

                <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                  <ChevronLeft size={16} className="mr-1" />
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Continue Shopping
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                <h3 className="font-medium mb-4">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
