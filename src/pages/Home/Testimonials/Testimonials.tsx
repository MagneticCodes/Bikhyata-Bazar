import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import CeoImg from "../../../assets/Images/Ceo/ceo.jpeg";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Lalin sarker",
      position: "CO-FOUNDER / CEO",
      company: "Bikhyata Bazar.",
      image: CeoImg,
    },
    // {
    //   name: "SARAH CHEN",
    //   position: "CREATIVE DIRECTOR",
    //   company: "DESIGN STUDIO",
    //   image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    //   text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // },
    // {
    //   name: "JAMES WILSON",
    //   position: "MARKETING HEAD",
    //   company: "BRAND INC.",
    //   image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    //   text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    // },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">TESTIMONIALS</h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-emerald-400",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                <p className="text-gray-600 mb-1">{testimonial.position}</p>
                <p className="text-emerald-500 mb-6">{testimonial.company}</p>
                {/* <p className="text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev !text-emerald-500"></div>
        <div className="swiper-button-next !text-emerald-500"></div>
      </div>
    </section>
  );
};

export default Testimonials;
