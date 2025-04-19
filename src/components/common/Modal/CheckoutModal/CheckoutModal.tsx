import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { clearCart } from "../../../../redux/features/cartSlice";

interface CartItem {
  id: string | number;
  name: string;
  quantity: number;
  selling_price?: number;
  price?: number;
  image?: string;
  [key: string]: any;
}

interface CheckoutModalProps {
  open: boolean;
  handleClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ open, handleClose }) => {
  const cartItems = useSelector((state: any) => state?.cart?.cartItems || []);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "Dhaka",
    zipCode: "",
    notes: "",
  });

  const [totals, setTotals] = useState({
    subtotal: 0,
    shippingCost: 80,
    total: 0,
  });

  // Calculate totals whenever cart items change
  useEffect(() => {
    const calculatedSubtotal = cartItems.reduce(
      (sum: number, item: CartItem) => {
        const price = item.selling_price || item.price || 0;
        return sum + price * item.quantity;
      },
      0
    );

    setTotals({
      subtotal: calculatedSubtotal,
      shippingCost: 80,
      total: calculatedSubtotal + 80,
    });
  }, [cartItems]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the order with formData and cartItems
    console.log("Order details:", {
      customer: formData,
      items: cartItems,
      totals,
    });
    // Here you would typically send this data to your backend
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Order placed successfully!",
      text: "Your order has been placed successfully.",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // Clear the cart after successful order placement
      dispatch(clearCart());
      handleClose();
    });
  };

  // Helper function to get item price
  const getItemPrice = (item: CartItem): number => {
    return item.selling_price || item.price || 0;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Customer Information Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Delivery Address*
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Order Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Special instructions for delivery"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="border rounded-lg p-4 bg-gray-50">
              {/* Cart Items Summary */}
              <div className="max-h-60 overflow-y-auto mb-4">
                {cartItems.map((item: CartItem) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 py-2 border-b"
                  >
                    <div className="w-12 h-12 rounded border overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://placehold.co/80x80?text=Product";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">
                          {item.name}{" "}
                          <span className="text-gray-500">
                            x{item.quantity}
                          </span>
                        </p>
                        <p className="text-sm font-medium">
                          ৳ {(getItemPrice(item) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">
                        ৳ {getItemPrice(item).toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 py-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>৳ {totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>৳ {totals.shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t mt-2">
                  <span>Total</span>
                  <span className="text-emerald-600">
                    ৳ {totals.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full mt-6 py-3 bg-[#E95827] text-white rounded-md hover:bg-opacity-90 transition-colors font-medium"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
