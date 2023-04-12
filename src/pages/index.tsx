import NavBar from "@/Components/NavBar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";

export default function Home() {
  return (
    <div className="mb-24">
      <NavBar />
      <div className="Container mt-40 px-40">
        <Hero />
        <About />
        {/* <Portfolio /> */}
        {/* <Experience /> */}
        {/* <Contact /> */}
      </div>
    </div>
  );
}
