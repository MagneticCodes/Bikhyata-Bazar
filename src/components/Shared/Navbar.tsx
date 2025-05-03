import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Container from "../common/Container";
import logo from "../../assets/logo/bigkhato_bazar_logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";

interface NavItem {
  label: string;
  href: string;
  scrollTo?: string; // ID of the section to scroll to
  isScroll?: boolean; // Flag to determine if this is a scroll link or regular link
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/", scrollTo: "hero", isScroll: true },
  { label: "PRODUCTS", href: "/products", scrollTo: "products", isScroll: true },
  { label: "ABOUT US", href: "/about", scrollTo: "about", isScroll: true },
  { label: "SPECIAL", href: "/special", scrollTo: "special", isScroll: true },
  { label: "TESTIMONIALS", href: "/testimonials", scrollTo: "testimonials", isScroll: true },
  { label: "CONTACT", href: "/contact", scrollTo: "contact", isScroll: true },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const cartItems = useSelector((state: any) => state?.cart?.cartItems);

  useEffect(() => {
    // Initialize scrollspy
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    // Handle scroll event to change navbar appearance on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up event listeners
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-0" : "bg-white/80 py-1"
    }`}>
      <Container>
        <nav className="bg-transparent">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="BigKhato Bazar" className="h-48" />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                item.isScroll ? (
                  // @ts-ignore
                  <ScrollLink
                    key={item.label}
                    to={item.scrollTo || ""}
                    spy={true}
                    smooth={true}
                    offset={-80} // Adjust offset based on your navbar height
                    duration={500}
                    onSetActive={() => handleSetActive(item.scrollTo || "")}
                    className={`cursor-pointer text-lg font-medium px-3 py-2 transition-colors duration-200 ${
                      activeLink === item.scrollTo 
                        ? "text-emerald-500 border-b-2 border-emerald-500" 
                        : "text-gray-600 hover:text-emerald-400"
                    }`}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-600 hover:text-emerald-400 px-3 py-2 text-lg font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              ))}

              {/* Cart Icon with Badge */}
              <Link
                to="/add-to-cart"
                className="text-gray-600 relative ml-4 hover:text-emerald-400 transition-colors duration-200 p-2"
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
                  {cartItems?.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      {cartItems?.length > 9 ? "9+" : cartItems?.length}
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
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md">
              <Container>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    item.isScroll ? (
                      // @ts-ignore
                      <ScrollLink
                        key={item.label}
                        to={item.scrollTo || ""}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                        className="block text-gray-600 hover:text-emerald-400 px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer"
                      >
                        {item.label}
                      </ScrollLink>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={closeMenu}
                        className="block text-gray-600 hover:text-emerald-400 px-3 py-2 text-base font-medium transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    )
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