import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
 
  CreditCard,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  const links = {
    information: [
      "About Us",
      "Contact Us",
      "Terms & Conditions",
      "Returns & Exchanges",
      "Shipping & Delivery",
    ],
    account: [
      "My Account",
      "My Cart",
      "Wishlist",
      "Order History",
      "Track Order",
    ],
    newsletter: {
      title: "Sign up for Newsletter",
      description:
        "Subscribe to our newsletter and get 10% off your first purchase",
    },
    payment: ["visa", "mastercard", "paypal"],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Information */}
          <div>
            <h3 className="text-white font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              {links.information.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white font-bold mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2">
              {links.account.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">NEWSLETTER</h3>
            <p className="mb-4 text-sm">{links.newsletter.description}</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-l focus:outline-none"
              />
              <button className="px-4 py-2 bg-emerald-400 text-white rounded-r hover:bg-emerald-500">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Social & Payment */}
          <div>
            <h3 className="text-white font-bold mb-4">CONNECT WITH US</h3>
            <div className="flex space-x-4 mb-6">
              <Facebook className="w-5 h-5 hover:text-emerald-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-emerald-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-emerald-400 cursor-pointer" />
            
            </div>
            <h3 className="text-white font-bold mb-4">PAYMENT METHODS</h3>
            <div className="flex space-x-4">
              <CreditCard className="w-8 h-8" />
              <CreditCard className="w-8 h-8" />
              <CreditCard className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 Your Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
