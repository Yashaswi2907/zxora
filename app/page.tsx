import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import Transformation from "../components/Transformation";
import TrainingEnvironment from "../components/TrainingEnvironment";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";
import TrustBar from "../components/TrustBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustBar />

      <About />

      <WhyChoose />

      <Services />

      <Transformation />

      <TrainingEnvironment />

      <Pricing />

      <Testimonials />

      <Contact />

      <Footer />
      
      <WhatsAppButton />
    </>
  );
}