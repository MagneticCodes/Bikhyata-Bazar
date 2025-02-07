import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";

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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <Container>
        <nav className="bg-transparent">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-4xl font-bold">
                <span className="text-black">ESHOP</span>
                <span className="text-emerald-400">SPOT</span>
              </span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-emerald-400 px-3 py-2 text-lg font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
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