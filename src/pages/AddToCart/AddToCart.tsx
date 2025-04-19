import React, { useEffect, useState } from "react";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  cartRemoveItems,
  updateCartQuantity,
} from "../../redux/features/cartSlice";
import CheckoutModal from "../../components/common/Modal/CheckoutModal/CheckoutModal";

interface CartItem {
  id: string | number;
  name: string;
  quantity: number;
  selling_price?: number;
  price?: number; // Added price as an alternative to selling_price
  image?: string;
  [key: string]: any;
}

const AddToCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state?.cart?.cartItems);
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log(cartItems, 27);

  // State for totals to ensure they're properly calculated and displayed
  const [totals, setTotals] = useState({
    subtotal: 0,
    shippingCost: 80,
    total: 0,
  });

  // Calculate totals whenever cart items change
  useEffect(() => {
    // Calculate subtotal with proper type checking - handle both selling_price and price fields
    const calculatedSubtotal = cartItems.reduce(
      (sum: number, item: CartItem) => {
        const price = item.selling_price || item.price || 0;
        return sum + price * item.quantity;
      },
      0
    );

    // Update totals
    setTotals({
      subtotal: calculatedSubtotal,
      shippingCost: 80,
      total: calculatedSubtotal + 80,
    });
  }, [cartItems]);

  // Type-safe updateQuantity function
  const updateQuantity = (id: string | number, delta: number): void => {
    const item = cartItems.find((item: CartItem) => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      dispatch(updateCartQuantity({ id, quantity: newQuantity }));
    }
  };

  // Type-safe removeItem function
  const removeItem = (id: string | number): void => {
    dispatch(cartRemoveItems(id));
  };

  // Helper function to get item price (handles both selling_price and price properties)
  const getItemPrice = (item: CartItem): number => {
    return item.selling_price || item.price || 0;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold my-10 text-center">Shopping Cart</h1>

      {cartItems?.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="flex justify-center mb-4">
            <ShoppingCart size={64} className="text-gray-300" />
          </div>
          <h2 className="text-xl font-medium text-gray-600 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <a
            href="/"
            className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-4 gap-4 mb-4 font-semibold bg-gray-50 p-4 rounded">
              <div className="col-span-2">PRODUCT</div>
              <div>PRICE</div>
              <div>SUBTOTAL</div>
            </div>

            {cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="grid grid-cols-4 gap-4 items-center py-4 border-b"
              >
                <div className="col-span-2 flex items-center gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                  <img
                    src={item.image}
                    alt={item.name || "Product"}
                    className="w-20 h-20 object-cover rounded border"
                    onError={(e) => {
                      // Fallback image if the original fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/80x80?text=Product";
                    }}
                  />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <div className="text-gray-600">
                  ৳ {getItemPrice(item).toFixed(2)}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center border rounded-md w-24">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 hover:bg-gray-100 text-gray-500"
                      aria-label="Decrease quantity"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="flex-1 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-gray-100 text-gray-500"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-emerald-600 font-medium">
                    ৳ {(getItemPrice(item) * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 shadow-sm bg-white sticky top-6">
              <h2 className="text-xl font-bold mb-6 border-b pb-4">
                CART TOTALS
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    ৳ {totals.subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-start py-2 border-b">
                  <span className="text-gray-600">Shipping</span>
                  <div className="text-right">
                    <div className="font-medium">
                      ৳ {totals.shippingCost.toFixed(2)}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">
                      Shipping to Dhaka.
                    </div>
                    <button className="text-emerald-600 text-sm mt-1 hover:text-emerald-700">
                      Change address
                    </button>
                  </div>
                </div>

                <div className="flex justify-between font-bold py-3 text-lg">
                  <span>Total</span>
                  <span className="text-emerald-600">
                    ৳ {totals.total.toFixed(2)}
                  </span>
                </div>

                <button onClick={() => setOpen(true)} className="w-full py-3 bg-[#E95827] text-white rounded-md transition-colors font-medium mt-4">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <CheckoutModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default AddToCart;
