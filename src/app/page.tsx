import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import Industries from "@/sections/Industries";
import Stats from "@/sections/Stats";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Industries />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
