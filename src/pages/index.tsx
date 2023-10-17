import NavBar from "@/Components/NavBar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Portfolio from "@/Components/Portfolio";
import Experience from "@/Components/Experience";
import Contact from "@/Components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <div className="mb-24">
      <Head>
        <title>Murad Kamali</title>
        <link rel="icon" href="/m.svg" />
      </Head>

      <NavBar />
      <div
        id="Home"
        className="flex flex-col px-4 pt-36 text-black md:px-40 md:pt-52 2xl:px-80"
      >
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
