import React from 'react';

const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: 'Footwear',
      image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg',
      count: '230 Products'
    },
    {
      title: 'Clothing',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
      count: '189 Products'
    },
    {
      title: 'Accessories',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      count: '154 Products'
    }
  ];

  return (
    <section className="mb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">PRODUCT CATEGORIES</h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0  bg-opacity-10 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-80">{category.count}</p>
                <div className="mt-4 px-6 py-2 bg-emerald-400 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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