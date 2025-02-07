import React from 'react';
import { Truck, Gift, DollarSign, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-emerald-400" />,
      title: 'FREE SHIPPING',
      description: 'Shipping in World for orders over $99'
    },
    {
      icon: <Gift className="w-8 h-8 text-emerald-400" />,
      title: 'SPECIAL GIFT',
      description: 'Give the perfect gift to your loved ones'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
      title: 'MONEY BACK',
      description: 'Not receiving an item applied to reward'
    },
    {
      icon: <Headphones className="w-8 h-8 text-emerald-400" />,
      title: 'SUPPORT 24/7',
      description: 'We are wait for you in 24 hours'
    }
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-lg">
              {feature.icon}
              <h3 className="mt-4 font-bold text-lg">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;