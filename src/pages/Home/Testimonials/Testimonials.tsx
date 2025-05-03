import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import CeoImg from "../../../assets/Images/Ceo/ceo.jpeg";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Lalin Sarker",
      position: "CO-FOUNDER / CEO",
      company: "Bikhyata Bazar.com",
      image: CeoImg,
      text: "Working with this team has transformed our business operations completely. Their attention to detail and commitment to excellence is unmatched in the industry.",
    },
    
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-gray-800">
              Client <span className="text-emerald-500">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mb-4"></div>
            <p className="text-gray-600 max-w-lg">
              Hear what our clients have to say about their experience working with us
            </p>
          </div>
          <div className="flex mt-6 md:mt-0 space-x-4">
            <button className="swiper-button-prev !static !w-12 !h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-200 hover:bg-emerald-500 hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="swiper-button-next !static !w-12 !h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-200 hover:bg-emerald-500 hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active bg-emerald-500",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="!overflow-visible"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="pb-14">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-8 relative flex-1 flex flex-col">
                  <div className="absolute -top-8 left-8 bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    <FaQuoteLeft className="text-white text-xl" />
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-base flex-1">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">{testimonial.position}</p>
                    <p className="text-emerald-500 font-medium text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="flex justify-center mt-12">
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg">
            Share Your Experience
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;