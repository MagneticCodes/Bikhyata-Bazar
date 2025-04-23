import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { useGetAllProductsQuery } from "../../../redux/baseApi/baseApi";

const NewProducts: React.FC = () => {
  const { data: productsData } = useGetAllProductsQuery(undefined);
  const allProductsData = productsData?.product;

  return (
    <section id="special" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">NEW PRODUCTS</h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {allProductsData?.map((product: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={`https://bikkhatobazar.magneticcodes.com/${product.image}`}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.tag && (
                    <span
                      className={`absolute top-4 left-4 px-4 py-1 rounded-full text-white text-sm font-medium ${
                        product.tag === "SALE"
                          ? "bg-red-500"
                          : product.tag === "NEW"
                          ? "bg-green-500"
                          : product.tag === "PREMIUM"
                          ? "bg-purple-500"
                          : product.tag === "BESTSELLER"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 h-14 overflow-hidden">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button className="w-full mt-4 px-6 py-2 bg-gray-900 text-white rounded hover:bg-emerald-500 transition-colors duration-300">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewProducts;
