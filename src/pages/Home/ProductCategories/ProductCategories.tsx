import React from "react";

// category img
import categoryImg1 from "../../../assets/Images/CateogryImg/smart_fan.webp";
import categoryImg2 from "../../../assets/Proudct Gallery/watch.png";
import categoryImg3 from "../../../assets/Images/CateogryImg/regular_fan.avif";

const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: "Smart Fan",
      image: categoryImg1,
      count: "230 Products",
    },
    {
      title: "Smart Watch",
      image: categoryImg2,
      count: "189 Products",
    },
    {
      title: "Regular Fan",
      image: categoryImg3,
      count: "154 Products",
    },
  ];

  return (
    <section className="mb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          PRODUCT CATEGORIES
        </h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-[300px] w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{category.title}</h3>
                <p className="text-sm opacity-90 drop-shadow-md">{category.count}</p>
                <div className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-pointer shadow-md">
                  Shop Now
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;