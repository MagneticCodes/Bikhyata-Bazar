import React from "react";
import { useDispatch } from "react-redux";
import { addToCartItems } from "../../../redux/features/cartSlice";
// import { addItem } from "../../../redux/features/cartSlice";

// Define the product type
interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: "NEW" | "SALE" | "HOT";
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: any) => {
    // Convert the product to a CartItem format and add it to the cart
    dispatch(
      addToCartItems({
        ...product,
        quantity: 1,
      })
    );
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
