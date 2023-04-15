import NavBar from "@/Components/NavBar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Portfolio from "@/Components/Portfolio";
import Experience from "@/Components/Experience";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <div className="mb-24">
      <NavBar />
      <div id="Home" className="Container px-40 pt-40 text-black">
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
