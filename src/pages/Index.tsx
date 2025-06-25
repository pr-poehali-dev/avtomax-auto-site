import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceCalculator from "@/components/ServiceCalculator";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ServiceCalculator />
      <BookingForm />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
