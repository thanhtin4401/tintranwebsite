import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import "./App.css";
import Contact from "./components/Contact";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TopHeader from "./components/TopHeader";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]); // Creating a sectionRefs array

  // Scrub animation of section headings
  useEffect(() => {
    //TODO Learn useContext and useRef here
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 250px",
          end: "bottom 550px",
          markers: true,
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
      });
    });
  }, []);
  return (
    <div className="App bg-black ">
      <NavBar sectionRefs={sectionRefs.current} />
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        <TopHeader />
        <TopHeader />

        <Heading title="Contact" />
        <TopHeader />
        <TopHeader />
        <TopHeader />

        <Heading title="Contact" />
        <TopHeader />
        <TopHeader />
        <Contact />
      </main>
    </div>
  );
}

export default App;
