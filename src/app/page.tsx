import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Capabilities from "@/sections/Capabilities";
import WhyUs from "@/sections/WhyUs";
import Timeline from "@/sections/Timeline";
import Partners from "@/sections/Partners";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <WhyUs />
        <Timeline />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
