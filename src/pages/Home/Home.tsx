import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ProductCategories from "./ProductCategories/ProductCategories";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import NewProducts from "./NewProducts/NewProducts";
import Testimonials from "./Testimonials/Testimonials";
import Features from "./Features/Features";
import ContactSection from "./ContactSection/ContactSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <NewProducts />
      <Testimonials />
      <Features />
      <ContactSection />
    </div>
  );
};

export default Home;
