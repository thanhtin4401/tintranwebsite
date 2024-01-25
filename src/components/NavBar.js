import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 20,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 400px",
        end: "bottom 500px",
        markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "black" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(navBar.current, { background: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });
  });

  return (
    <header
      ref={navBar}
      className="mx-auto text-black fixed z-50 flex w-full -translate-y-full items-center justify-between px-5 py-3 border rounded-2xl"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <div className=" justify-start items-center gap-[5px] inline-flex">
          <div className="text-white text-[36px] font-extrabold font-general leading-[46px]">
            TINTRAN
          </div>
          <div className="w-3 h-3 bg-lime-400 rounded-full" />
        </div>
      </a>
      <nav className=" space-x-7 hidden xl:block text-body-2 text-white font-general">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-primary-color duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-primary-color duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-primary-color duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>set-up</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-primary-color duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>blog</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-primary-color duration-300 ease-in-out group-hover:w-full"></span>
        </a>
      </nav>
      <div className="flex gap-2">
        <div
          className="py-2 px-3 bg-lime-400 hidden xl:flex rounded-full justify-start items-center gap-2 duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_#FFFFFF]
  transition"
        >
          <div className="bg-white rounded-full p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <g clipPath="url(#clip0_3310_1321)">
                <path
                  d="M4.6665 9.5V5.5H3.1665C2.76868 5.5 2.38715 5.65804 2.10584 5.93934C1.82454 6.22064 1.6665 6.60218 1.6665 7V16C1.66725 16.0929 1.69384 16.1837 1.74329 16.2623C1.79275 16.3409 1.86311 16.4041 1.9465 16.445C2.02684 16.4815 2.11542 16.4962 2.20324 16.4874C2.29106 16.4786 2.37499 16.4467 2.4465 16.395L5.0215 14.5H11.7415C11.931 14.5056 12.1196 14.4722 12.2957 14.402C12.4718 14.3317 12.6316 14.226 12.7652 14.0915C12.8988 13.957 13.0033 13.7965 13.0724 13.6199C13.1414 13.4433 13.1734 13.2545 13.1665 13.065V12.5H7.6665C6.87085 12.5 6.10779 12.1839 5.54518 11.6213C4.98257 11.0587 4.6665 10.2956 4.6665 9.5Z"
                  fill="#B9F207"
                />
                <path
                  d="M15.6665 6.75C15.0884 6.75139 14.5178 6.61874 13.9996 6.36247C13.4814 6.1062 13.0297 5.73329 12.6799 5.27302C12.3301 4.81276 12.0918 4.27766 11.9836 3.70977C11.8754 3.14187 11.9004 2.55663 12.0565 2H7.6665C7.26868 2 6.88715 2.15804 6.60584 2.43934C6.32454 2.72064 6.1665 3.10218 6.1665 3.5V9.5C6.1665 9.89782 6.32454 10.2794 6.60584 10.5607C6.88715 10.842 7.26868 11 7.6665 11H14.4415L16.8315 12.855C16.9026 12.9075 16.9863 12.9403 17.0741 12.95C17.1619 12.9596 17.2507 12.9458 17.3315 12.91C17.4166 12.8695 17.4885 12.8057 17.5389 12.7261C17.5893 12.6465 17.6162 12.5542 17.6165 12.46V6.185C17.0314 6.55025 16.3563 6.74585 15.6665 6.75Z"
                  fill="#B9F207"
                />
                <path
                  d="M15.6665 5.5C17.0472 5.5 18.1665 4.38071 18.1665 3C18.1665 1.61929 17.0472 0.5 15.6665 0.5C14.2858 0.5 13.1665 1.61929 13.1665 3C13.1665 4.38071 14.2858 5.5 15.6665 5.5Z"
                  fill="#B9F207"
                />
              </g>
              <defs>
                <clipPath id="clip0_3310_1321">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0.666504)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="text-white text-[1.2rem] font-extrabold font-general">
            let's talk
          </h3>
        </div>
        <div className="w-[50px] h-[50px] pl-[7.82px] pr-[6.71px] py-[8.94px] rounded border border-lime-400 justify-center items-center inline-flex">
          <div className="w-[23.47px] h-[20.12px] flex-col justify-between items-center inline-flex">
            <div className="self-stretch h-1 bg-lime-400 rounded-[20px]" />
            <div className="self-stretch h-1 bg-lime-400 rounded-[20px]" />
            <div className="self-stretch h-1 bg-lime-400 rounded-[20px]" />
          </div>
        </div>
      </div>
    </header>
  );
}
