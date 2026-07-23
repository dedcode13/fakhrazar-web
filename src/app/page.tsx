import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import Process from "@/sections/Process";
import Comparison from "@/sections/Comparison";
import Industries from "@/sections/Industries";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import QuoteForm from "@/sections/QuoteForm";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Process />
        <Comparison />
        <Industries />
        <Stats />
        <Testimonials />
        <CTA />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
