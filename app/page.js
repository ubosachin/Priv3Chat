import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanSection from "./components/Plans";
import Footer from "./components/Footer";
import Features  from "./components/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <PlanSection />
      <Footer/>
      
    </main>
  );
}
