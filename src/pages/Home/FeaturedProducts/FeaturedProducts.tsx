import React from "react";

import ProductCard from "../../../components/common/Products/ProductCard";
import { useGetAllProductsQuery } from "../../../redux/baseApi/baseApi";

const FeaturedProducts: React.FC = () => {
  const { data: productsData } = useGetAllProductsQuery(undefined);
  const allProductsData = productsData?.product;

  return (
    <section id="products" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          FEATURED PRODUCTS
        </h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProductsData?.map((product: any) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
