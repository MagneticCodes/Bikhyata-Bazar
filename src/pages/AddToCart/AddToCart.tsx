import React from "react";
import { X, Minus, Plus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  cartRemoveItems,
  updateCartQuantity,
} from "../../redux/features/cartSlice";

interface CartItem {
  id: string | number;
  name: string;
  quantity: number;
  selling_price?: number;
  image?: string;
  [key: string]: any;
}

const AddToCart: React.FC = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state?.cart?.cartItems);

  // const [orderInfo, setOrderInfo] = useState<Record<string, any>>({});
  // const [open, setOpen] = useState<boolean>(false);

  // const handleOpen = (): void => setOpen(true);
  // const handleClose = (): void => setOpen(false);

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

  // Calculate totals with proper type checking
  const subtotal = cartItems.reduce(
    (sum: number, item: CartItem) =>
      sum + (item.selling_price || 0) * item.quantity,
    0
  );
  const shippingCost = 80;
  const total = subtotal + shippingCost;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold my-10 text-center">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-4 gap-4 mb-4 font-semibold">
            <div className="col-span-2">PRODUCT</div>
            <div>PRICE</div>
            <div>SUBTOTAL</div>
          </div>

          {cartItems?.length > 0 ? (
            cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="grid grid-cols-4 gap-4 items-center py-4 border-t"
              >
                <div className="col-span-2 flex items-center gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                  <img
                    src={`https://shop24api.magneticcodes.com/${item?.image}`}
                    alt={item.name || "Product"}
                    className="w-20 h-20 object-cover"
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <div className="text-gray-600">৳ {item.selling_price}</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center border rounded-md w-24">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="flex-1 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-red-500">
                    ৳ {(item.selling_price || 0) * item.quantity}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              Your cart is empty
            </div>
          )}
        </div>

        {/* Cart Totals */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">CART TOTALS</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳ {subtotal}</span>
              </div>

              <div className="flex justify-between items-start">
                <span>Shipping</span>
                <div className="text-right">
                  <div>Inside Dhaka: ৳ {shippingCost}</div>
                  <div className="text-gray-600">Shipping to Dhaka.</div>
                  <button className="text-red-500 text-sm">
                    Change address
                  </button>
                </div>
              </div>

              <div className="flex justify-between font-bold pt-4 border-t">
                <span>Total</span>
                <span className="text-red-500">৳ {total}</span>
              </div>

              <button
                className={`w-full py-3 bg-red-500 text-white rounded hover:bg-red-600 ${
                  !cartItems?.length ? "opacity-50 cursor-not-allowed" : ""
                }`}
                // onClick={handleOpen}
                disabled={!cartItems?.length}
              >
                PROCEED TO CHECKOUT
              </button>

              {/* Uncomment when CheckoutModal is available
              <CheckoutModal
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                handleOpen={handleOpen}
                carts={carts}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
