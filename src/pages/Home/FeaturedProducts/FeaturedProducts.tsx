import React from 'react';

import AISOLOVE_01 from  "../../../assets/Lalin Photo/AISOLOVE noF5 price-2200taka.webp"
import AISOLOVE_02 from  "../../../assets/Lalin Photo/AISOLOVE noF5p max price-3000taka.webp"
import Awei_F30 from  "../../../assets/Lalin Photo/Awei-F30-Mini-Desktop-Fan-1800taka.avif"
import DP_7626 from  "../../../assets/Lalin Photo/DP-7626-Rechargeable-Table-Fan-With-Led-Light---4000Mah-box---700taka.jpg"
import Double_ended from  "../../../assets/Lalin Photo/Double ended spray fan - 2200 taka.png"
import Dp_duration from  "../../../assets/Lalin Photo/Dp duration power model-7638 --1400taka.webp"
import Dp_7627 from  "../../../assets/Lalin Photo/Dp_7627_rechargeable_Portable_Usb_Fan_Wi-Non_Brand-2116a---1900taka.png"
import FOLDING_FAN from  "../../../assets/Lalin Photo/FOLDING FAN MODEL-LR-2018--1000TAKA.jpg"
import JISULIFE_MODEL from  "../../../assets/Lalin Photo/JISULIFE MODEL--FA26 --1700taka.jpg"
import Led_fan from  "../../../assets/Lalin Photo/Led fan jr-2022 --1250taka.jpg"
import Xundd_XDOT from  "../../../assets/Lalin Photo/Xundd-XDOT-024-USB-Rechargeable-Oscillating-Fan---2700taka.jpg"
import air_cooler_fan from  "../../../assets/Lalin Photo/air cooler fan -1400taka.png"
import arter_circulation_fan from  "../../../assets/Lalin Photo/carter circulation fan --3200taka.webp"
import desktop_fan from  "../../../assets/Lalin Photo/desktop fan -2000taka.webp"
import esktop_fan_m321 from  "../../../assets/Lalin Photo/desktop fan m321 2000taka.webp"
import desktop_protocal from  "../../../assets/Lalin Photo/desktop protocal charger model-dp-7639---1250taka.jpg"
import dp_7624 from  "../../../assets/Lalin Photo/dp-7624.jpg"
import dp_7637_fan from  "../../../assets/Lalin Photo/dp-7637 fan -2000taka.webp"
import dp_7637_2000Taka from  "../../../assets/Lalin Photo/dp-7637-2000Taka.webp"
import dp_duration_power from  "../../../assets/Lalin Photo/dp-duration power-1800taka.jpg"
import handle_fan_model from  "../../../assets/Lalin Photo/handle fan model-F2d--1500taka.jpg"
import jisulife_table_fan from  "../../../assets/Lalin Photo/jisulife table fan7 m-FA13p --3600taka.jpg"
import joykali_smd_rechargeable from  "../../../assets/Lalin Photo/joykali smd rechargeable led mini fan model-yg-729 --1350taka.webp"
import jy_Super_jy_2218  from  "../../../assets/Lalin Photo/jy Super jy-2218   -1900taka.jpg"
import jy_super_model_jy_2523  from  "../../../assets/Lalin Photo/jy super model-jy-2523 --1400taka.avif"
import jy_1881_1100taka  from  "../../../assets/Lalin Photo/jy-1881 -1100taka.jpg"
import mini_handle_fan  from  "../../../assets/Lalin Photo/mini handle fan model-fa20 -- 1100taka.jpg"
import mini_turbo_fan  from  "../../../assets/Lalin Photo/mini turbo fan --model-ym88154-- 1550taka.jpg"
import supermoon_protable  from  "../../../assets/Lalin Photo/supermoon protable mini fan model-sm6615 --2500taka.jpg"
import xpower_6  from  "../../../assets/Lalin Photo/xpower 6'' mini fan taka-900.jpg"
import xpower_7 from  "../../../assets/Lalin Photo/xpower 7'' us mini fan--1050taka.jpg"
import xpower_wd_202 from  "../../../assets/Lalin Photo/xpower wd-202 -- 1350taka.webp"

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      title: 'AISOLOVE No F5',
      price: 2200.00,
      oldPrice: 2500.00,
      image: AISOLOVE_01,
      tag: 'POPULAR'
    },
    {
      title: 'AISOLOVE No F5P Max',
      price: 3000.00,
      oldPrice: 3500.00,
      image: AISOLOVE_02,
    },
    {
      title: 'Awei F30 Mini Desktop Fan',
      price: 1800.00,
      oldPrice: 2200.00,
      image: Awei_F30,
      tag: 'NEW'
    },
    {
      title: 'DP-7626 Rechargeable Table Fan With LED Light',
      price: 700.00,
      oldPrice: 950.00,
      image: DP_7626,
      tag: 'SALE'
    },
    {
      title: 'Double Ended Spray Fan',
      price: 2200.00,
      oldPrice: 2600.00,
      image: Double_ended,
    },
    {
      title: 'DP Duration Power Model-7638',
      price: 1400.00,
      oldPrice: 1600.00,
      image: Dp_duration,
      tag: 'NEW'
    },
    {
      title: 'DP-7627 Rechargeable Portable USB Fan',
      price: 1900.00,
      oldPrice: 2200.00,
      image: Dp_7627,
    },
    {
      title: 'Folding Fan Model LR-2018',
      price: 1000.00,
      oldPrice: 1350.00,
      image: FOLDING_FAN,
      tag: 'SALE'
    },
    {
      title: 'JISULIFE Model FA26',
      price: 1700.00,
      oldPrice: 1950.00,
      image: JISULIFE_MODEL,
    },
    {
      title: 'LED Fan JR-2022',
      price: 1250.00,
      oldPrice: 1500.00,
      image: Led_fan,
      tag: 'NEW'
    },
    {
      title: 'Xundd XDOT-024 USB Rechargeable Oscillating Fan',
      price: 2700.00,
      oldPrice: 3100.00,
      image: Xundd_XDOT,
    },
    {
      title: 'Air Cooler Fan',
      price: 1400.00,
      oldPrice: 1800.00,
      image: air_cooler_fan,
      tag: 'POPULAR'
    },
    {
      title: 'Carter Circulation Fan',
      price: 3200.00,
      oldPrice: 3600.00,
      image: arter_circulation_fan,
      tag: 'PREMIUM'
    },
    {
      title: 'Desktop Fan',
      price: 2000.00,
      oldPrice: 2300.00,
      image: desktop_fan,
    },
    {
      title: 'Desktop Fan M321',
      price: 2000.00,
      oldPrice: 2400.00,
      image: esktop_fan_m321,
    },
    {
      title: 'Desktop Protocol Charger Model-DP-7639',
      price: 1250.00,
      oldPrice: 1450.00,
      image: desktop_protocal,
      tag: 'NEW'
    },
    {
      title: 'DP-7624 Fan',
      price: 1800.00, 
      oldPrice: 2100.00,
      image: dp_7624,
    },
    {
      title: 'DP-7637 Fan',
      price: 2000.00,
      oldPrice: 2300.00,
      image: dp_7637_fan,
    },
    {
      title: 'DP-7637 Fan',
      price: 2000.00,
      oldPrice: 2350.00,
      image: dp_7637_2000Taka,
      tag: 'BESTSELLER'
    },
    {
      title: 'DP Duration Power Fan',
      price: 1800.00,
      oldPrice: 2050.00,
      image: dp_duration_power,
    },
    {
      title: 'Handle Fan Model-F2D',
      price: 1500.00,
      oldPrice: 1850.00,
      image: handle_fan_model,
      tag: 'POPULAR'
    },
    {
      title: 'Jisulife Table Fan 7 M-FA13P',
      price: 3600.00,
      oldPrice: 4000.00,
      image: jisulife_table_fan,
      tag: 'PREMIUM'
    },
    {
      title: 'Joykali SMD Rechargeable LED Mini Fan Model-YG-729',
      price: 1350.00,
      oldPrice: 1550.00,
      image: joykali_smd_rechargeable,
    },
    {
      title: 'JY Super JY-2218',
      price: 1900.00,
      oldPrice: 2150.00,
      image: jy_Super_jy_2218,
    },
    {
      title: 'JY Super Model-JY-2523',
      price: 1400.00,
      oldPrice: 1650.00,
      image: jy_super_model_jy_2523,
      tag: 'SALE'
    },
    {
      title: 'JY-1881 Fan',
      price: 1100.00,
      oldPrice: 1300.00,
      image: jy_1881_1100taka,
    },
    {
      title: 'Mini Handle Fan Model-FA20',
      price: 1100.00,
      oldPrice: 1350.00,
      image: mini_handle_fan,
      tag: 'SALE'
    },
    {
      title: 'Mini Turbo Fan Model-YM88154',
      price: 1550.00,
      oldPrice: 1800.00,
      image: mini_turbo_fan,
    },
    {
      title: 'Supermoon Portable Mini Fan Model-SM6615',
      price: 2500.00,
      oldPrice: 2900.00,
      image: supermoon_protable,
      tag: 'POPULAR'
    },
    {
      title: 'XPower 6" Mini Fan',
      price: 900.00,
      oldPrice: 1100.00,
      image: xpower_6,
      tag: 'SALE'
    },
    {
      title: 'XPower 7" US Mini Fan',
      price: 1050.00,
      oldPrice: 1250.00,
      image: xpower_7,
    },
    {
      title: 'XPower WD-202',
      price: 1350.00,
      oldPrice: 1600.00,
      image: xpower_wd_202,
      tag: 'NEW'
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