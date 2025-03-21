import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import AISOLOVE_01 from "../../../assets/Lalin Photo/AISOLOVE noF5 price-2200taka.webp";
import Awei_F30 from "../../../assets/Lalin Photo/Awei-F30-Mini-Desktop-Fan-1800taka.avif";
import Led_fan from "../../../assets/Lalin Photo/Led fan jr-2022 --1250taka.jpg";
import desktop_protocal from "../../../assets/Lalin Photo/desktop protocal charger model-dp-7639---1250taka.jpg";
import Dp_duration from "../../../assets/Lalin Photo/Dp duration power model-7638 --1400taka.webp";
import xpower_wd_202 from "../../../assets/Lalin Photo/xpower wd-202 -- 1350taka.webp";
import joykali_smd_rechargeable from "../../../assets/Lalin Photo/joykali smd rechargeable led mini fan model-yg-729 --1350taka.webp";
import jy_super_model_jy_2523 from "../../../assets/Lalin Photo/jy super model-jy-2523 --1400taka.avif";

const NewProducts: React.FC = () => {
  const products = [
    {
      title: "AISOLOVE No F5",
      price: 2200.00,
      oldPrice: 2500.00,
      image: AISOLOVE_01,
      tag: "POPULAR",
    },
    {
      title: "Awei F30 Mini Desktop Fan",
      price: 1800.00,
      oldPrice: 2200.00,
      image: Awei_F30,
      tag: "NEW",
    },
    {
      title: "LED Fan JR-2022",
      price: 1250.00,
      oldPrice: 1500.00,
      image: Led_fan,
      tag: "NEW",
    },
    {
      title: "Desktop Protocol Charger Model-DP-7639",
      price: 1250.00,
      oldPrice: 1450.00,
      image: desktop_protocal,
      tag: "NEW",
    },
    {
      title: "DP Duration Power Model-7638",
      price: 1400.00,
      oldPrice: 1600.00,
      image: Dp_duration,
      tag: "NEW",
    },
    {
      title: "XPower WD-202",
      price: 1350.00,
      oldPrice: 1600.00,
      image: xpower_wd_202,
      tag: "NEW",
    },
    {
      title: "Joykali SMD Rechargeable LED Mini Fan",
      price: 1350.00,
      oldPrice: 1550.00,
      image: joykali_smd_rechargeable,
      tag: "NEW",
    },
    {
      title: "JY Super Model-JY-2523",
      price: 1400.00,
      oldPrice: 1650.00,
      image: jy_super_model_jy_2523,
      tag: "NEW",
    }
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
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.tag && (
                    <span
                      className={`absolute top-4 left-4 px-4 py-1 rounded-full text-white text-sm font-medium ${
                        product.tag === "SALE" ? "bg-red-500" : 
                        product.tag === "NEW" ? "bg-green-500" : 
                        product.tag === "PREMIUM" ? "bg-purple-500" :
                        product.tag === "BESTSELLER" ? "bg-yellow-500" : "bg-blue-500"
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 h-14 overflow-hidden">{product.title}</h3>
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