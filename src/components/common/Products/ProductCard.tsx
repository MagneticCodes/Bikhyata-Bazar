import React from "react";
import { useDispatch } from "react-redux";
import { addToCartItems } from "../../../redux/features/cartSlice";
import Swal from "sweetalert2";

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = async (product: Product) => {
    try {
      // Dispatch the action and wait for it to complete
      // Fix: Map the title property to name property as required by CartItem
      await dispatch(
        addToCartItems({
          id: product.id,
          name: product.title, // This is the key fix - map title to name
          price: product.price,
          oldPrice: product.oldPrice,
          image: product.image,
          tag: product.tag,
          quantity: 1,
        })
      );

      // Show success message if added to cart
      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      // console.log(error);
      // Show error message if product already in cart
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

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {product.tag && (
          <span
            className={`absolute top-4 left-4 px-4 py-1 rounded-full text-white text-sm font-medium
                  ${
                    product.tag === "SALE"
                      ? "bg-red-500"
                      : product.tag === "HOT"
                      ? "bg-orange-500"
                      : product.tag === "POPULAR"
                      ? "bg-blue-500"
                      : product.tag === "PREMIUM"
                      ? "bg-purple-500"
                      : product.tag === "BESTSELLER"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
          >
            {product.tag}
          </span>
        )}
      </div>

      <h3 className="text-lg font-medium mb-2">{product.title}</h3>
      <div className="flex items-center gap-2">
        <span className="text-emerald-600 font-bold">
          {product.price.toFixed(2)} Taka
        </span>
        {product.oldPrice && (
          <span className="text-gray-400 line-through">
            {product.oldPrice.toFixed(2)} Taka
          </span>
        )}
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="w-full mt-4 px-6 py-2 bg-gray-900 text-white rounded hover:bg-emerald-500 transition-colors duration-300"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
