import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Container from "../common/Container";
import logo from "../../assets/logo/bigkhato_bazar_logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "PRODUCTS", href: "/products" },
  { label: "ABOUT US", href: "/about" },
  { label: "SPECIAL", href: "/special" },
  { label: "TESTIMONIALS", href: "/testimonials" },
  { label: "CONTACT", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useSelector((state: any) => state?.cart?.cartItems);
  // console.log(cartItems);

  // @ts-ignore
  const [cartItemCount, setCartItemCount] = useState(3); // Example cart count, replace with your actual cart state

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <Container>
        <nav className="bg-transparent">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <img src={logo} alt="BigKhato Bazar" className="h-48" />
              </a>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-600 hover:text-emerald-400 px-3 py-2 text-lg font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}

              {/* Cart Icon with Badge */}
              {/* <div className="relative ml-4"> */}
              <Link
                to={"/add-to-cart"}
                className="text-gray-600 relative ml-4  hover:text-emerald-400 transition-colors duration-200 p-2"
              >
                <ShoppingCart size={30} />
                {cartItems?.length > 0 ? (
                  <span className="absolute top-[3px] -right-1 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems?.length}
                  </span>
                ) : (
                  <span className="absolute top-[3px] -right-1 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                )}
              </Link>
              {/* </div> */}
            </div>

            {/* Mobile menu button and cart icon */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Cart Icon with Badge for mobile */}
              <div className="relative">
                <Link
                  to="/add-to-cart"
                  className="text-gray-600 hover:text-emerald-400 transition-colors duration-200 p-1"
                >
                  <ShoppingCart size={22} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      {cartItemCount > 9 ? "9+" : cartItemCount}
                    </span>
                  )}
                </Link>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-emerald-400 transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md">
              <Container>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-gray-600 hover:text-emerald-400 px-3 py-2 text-base font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </Container>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
