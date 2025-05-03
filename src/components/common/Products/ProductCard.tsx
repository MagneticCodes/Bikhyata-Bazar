import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartItems, clearCart } from "../../../redux/features/cartSlice";
import Swal from "sweetalert2";
import { X, Minus, Plus } from "lucide-react";
import { useCreateAnOrderMutation } from "../../../redux/baseApi/baseApi";
// import { createAnOrder } from "../../../services/api"; // Make sure this import path is correct

interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: "NEW" | "SALE" | "HOT" | "POPULAR" | "PREMIUM" | "BESTSELLER";
}

interface ProductCardProps {
  product: Product;
}

interface CustomerInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  notes: string;
}

// Single-page Modal component for Quick Order
const ProductModal: React.FC<{
  open: boolean;
  handleClose: () => void;
  product: Product;
  handleAddToCart: (product: Product, quantity: number) => void;
}> = ({ open, handleClose, product, handleAddToCart }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState<CustomerInfo>({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "Dhaka",
    zipCode: "",
    notes: ""
  });

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const [createAnOrder] = useCreateAnOrderMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // First add the product to cart
    handleAddToCart(product, quantity);
    
    // Create the cart item for the API
    // const cartItem = {
    //   id: product.id,
    //   quantity: quantity,
    //   selling_price: product.price
    // };
    
    // Prepare the order data
    const newOrder = {
      customer_name: formData.fullName,
      phone_number: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      zip_code: formData.zipCode,
      notes: formData.notes,
      items: [{
        product_id: product.id,
        quantity: quantity,
        price: product.price,
      }],
    };

    try {
      const response = await createAnOrder(newOrder).unwrap();
      
      if (response?.totals) {
        Swal.fire({
          icon: "success",
          title: "Order placed successfully!",
          text: "Your order has been placed successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(clearCart());
        handleClose();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Order failed!",
        text: "There was an error placing your order.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (!open) return null;

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden shadow-xl animate-fadeIn max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h3 className="font-medium text-lg">Quick Order</h3>
          <p>Bkash Number: <span className="text-xl font-bold text-red-500">01731312086</span></p>
          <button 
            onClick={handleClose} 
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="overflow-y-auto p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Information Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0 relative rounded overflow-hidden">
                    <img 
                      src={`https://bikkhatobazar.magneticcodes.com/${product.image}`}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    {product.tag && (
                      <div className="absolute top-0 left-0 w-full bg-black bg-opacity-60 py-1">
                        <span className={`text-xs font-semibold tracking-wide text-white text-center block`}>
                          {product.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 mb-1">{product.title}</h5>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-lg font-bold text-gray-900">
                        {product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-500">Taka</span>
                      
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {product.oldPrice.toFixed(2)} Taka
                        </span>
                      )}
                      
                      {product.oldPrice && discountPercentage > 0 && (
                        <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                          {discountPercentage}% OFF
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center border border-gray-300 rounded-md w-32 h-9">
                        <button
                          type="button"
                          onClick={decreaseQuantity}
                          className="px-2 hover:bg-gray-50 text-gray-500 rounded-l-md transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="flex-1 text-center font-medium text-sm text-gray-700">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={increaseQuantity}
                          className="p-1 hover:bg-gray-50 text-gray-500 rounded-r-md transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Price Calculations */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Product Price:</span>
                    <span>{product.price.toFixed(2)} Taka</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Quantity:</span>
                    <span>× {quantity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>{(product.price * quantity).toFixed(2)} Taka</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping:</span>
                    <span>80.00 Taka</span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-200 mt-2">
                    <span>Total:</span>
                    <span className="text-emerald-600">{(product.price * quantity + 80).toFixed(2)} Taka</span>
                  </div>
                </div>
              </div>
              
              {/* Customer Information Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Order Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Special instructions for delivery"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2 pt-4 border-t flex justify-end gap-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                PLACE ORDER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleAddToCart = async (product: Product, quantity: number = 1) => {
    try {
      await dispatch(
        addToCartItems({
          id: product.id,
          name: product.title,
          price: product.price,
          oldPrice: product.oldPrice,
          image: product.image,
          tag: product.tag,
          quantity: quantity,
        })
      );
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Already in cart!",
        text: "This product is already in your shopping cart.",
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    }
  };

  // Calculate discount percentage if old price exists
  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <>
      <div className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 border border-gray-100 hover:border-emerald-200">
        {/* Product Image Section */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={`https://bikkhatobazar.magneticcodes.com/${product.image}`}
            alt={product.title}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-105"
          />
          
          {/* Floating action buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              onClick={() => setOpen(true)}
              aria-label="Quick order"
              className="w-10 h-10 rounded-full bg-white text-gray-800 shadow-md flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
          </div>

          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.tag && (
              <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
                <span className={`text-xs font-semibold tracking-wide
                  ${product.tag === "SALE" ? "text-red-600" : 
                    product.tag === "HOT" ? "text-orange-600" : 
                    product.tag === "POPULAR" ? "text-blue-600" : 
                    product.tag === "PREMIUM" ? "text-purple-600" : 
                    product.tag === "BESTSELLER" ? "text-amber-600" : 
                    "text-emerald-600"}`}
                >
                  {product.tag}
                </span>
              </div>
            )}
            
            {product.oldPrice && discountPercentage > 0 && (
              <div className="px-3 py-1.5 bg-red-50 border border-red-100 rounded-full shadow-sm">
                <span className="text-xs font-semibold text-red-600 tracking-wide">
                  {discountPercentage}% OFF
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="mb-4">
            <h3 className="font-medium text-gray-800 mb-1 line-clamp-1 group-hover:text-emerald-600 transition-colors">
              {product.title}
            </h3>
            
            <div className="flex items-baseline mt-2 space-x-2">
              <span className="text-xl font-bold text-gray-900">
                {product.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500">Taka</span>
              
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  {product.oldPrice.toFixed(2)} Taka
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full py-3 bg-gray-900 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>ORDER NOW</span>
            </span>
            <span className="absolute inset-0 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </button>
        </div>
      </div>

      {/* Single-page Modal */}
      <ProductModal 
        open={open}
        handleClose={handleClose}
        product={product}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default ProductCard;