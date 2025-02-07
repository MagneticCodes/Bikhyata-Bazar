import React from 'react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      title: 'Winter Long Sleeve Black White',
      price: 400.00,
      oldPrice: 580.00,
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
      tag: 'SALE'
    },
    {
      title: 'Women Totes Lady Handbag',
      price: 300.00,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    },
    {
      title: 'Lace Water Soluble Sexy Dress',
      price: 600.00,
      image: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg',
      tag: 'NEW'
    },
    {
      title: 'Casual Summer Dress',
      price: 450.00,
      oldPrice: 599.00,
      image: 'https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg',
      tag: 'SALE'
    },
    {
      title: 'Leather Crossbody Bag',
      price: 350.00,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      tag: 'NEW'
    },
    {
      title: 'Evening Cocktail Dress',
      price: 750.00,
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">FEATURED PRODUCTS</h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {product.tag && (
                  <span className={`absolute top-4 left-4 px-4 py-1 rounded-full text-white text-sm font-medium
                    ${product.tag === 'SALE' ? 'bg-red-500' : 'bg-green-500'}`}>
                    {product.tag}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-medium mb-2">{product.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                )}
              </div>
              
              <button className="w-full mt-4 px-6 py-2 bg-gray-900 text-white rounded hover:bg-emerald-500 transition-colors duration-300">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;