import BrandSection from "../components/Brands/BrandSection";
import ContactSection from "../components/Contact/ContactSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ServiceSection from "../components/Services/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BrandSection/>
      <ServiceSection/>
      <ContactSection/>
    </div>
  );
};

export default Home;
