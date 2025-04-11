import React, { useState } from "react";
import { ArrowRight, ShoppingCart, CreditCard } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// image
import heroImg1 from "../../../assets/Images/HeroImg/hero_img_01.jpg";
import heroImg2 from "../../../assets/Images/HeroImg/hero_img_02.png";
import heroImg3 from "../../../assets/Images/HeroImg/hero_img_03.webp";
import heroImg4 from "../../../assets/Images/HeroImg/hero_img_04.jpg";

import "swiper/swiper-bundle.css";

interface SlideType {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: SlideType[] = [
  {
    image: heroImg1,
    title: "Best",
    subtitle: "Shop",
    description: "Experience seamless shopping with our integrated cart system",
  },
  {
    image: heroImg2,
    title: "Smart",
    subtitle: "Shopping",
    description: "Discover the future of online shopping with us",
  },
  {
    image: heroImg3,
    title: "Secure",
    subtitle: "Payments",
    description: "Shop with confidence using our secure payment system",
  },
];

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden mt-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (_index: number, className: string) => {
              return `<span class="${className} bg-emerald-400"></span>`;
            },
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 z-10">
                  <div
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="text-emerald-600 text-sm font-medium">
                      Smart Shopping Experience
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 text-emerald-600 transition-transform duration-300 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                    />
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight lg:text-7xl">
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      {slide.title}
                    </span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                      {slide.subtitle}
                    </span>
                  </h1>

                  <p className="text-gray-600 text-lg sm:text-xl max-w-2xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#products"
                      className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-400 hover:bg-emerald-500 rounded-lg transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg"
                    >
                      Explore Products
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2 text-gray-600">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="hidden sm:inline">Smart Cart</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <CreditCard className="w-5 h-5" />
                        <span className="hidden sm:inline">Secure Pay</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4">
                    <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-emerald-400 to-cyan-400" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
                    <img
                      src={slide.image}
                      alt={`${slide.title} ${slide.subtitle}`}
                      className=" h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
