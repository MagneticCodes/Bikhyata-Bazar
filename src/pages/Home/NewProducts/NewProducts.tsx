import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const NewProducts: React.FC = () => {
  const products = [
    {
      title: "Women White Backless Mini",
      price: 400.0,
      oldPrice: 580.0,
      image:
        "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
      tag: "SALE",
    },
    {
      title: "Women Totes Lady Handbag",
      price: 300.0,
      image:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    },
    {
      title: "Sexy Women Floral Embroidery",
      price: 600.0,
      image: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg",
      tag: "NEW",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">NEW PRODUCTS</h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-emerald-400",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
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
                        product.tag === "SALE" ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewProducts;
