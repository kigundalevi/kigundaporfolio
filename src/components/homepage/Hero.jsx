import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const component = useRef(null);
  const slider = useRef(null);
  const textLines = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
          duration: 1
        }
      });

      // Stagger the text lines from opacity 0 and different x positions
      tl.from(textLines.current, {
        opacity: 0,
        x: (index) => [100, -100, 100][index], // Alternate directions
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Add continuous floating animation
      textLines.current.forEach((line, index) => {
        gsap.to(line, {
          y: "10px",
          duration: 1.5 + index * 0.2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });
      });

    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={component}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#9a9a83] via-[#c5c5b8] to-white"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        {/* Text Container */}
        <div 
          ref={slider}
          className="flex flex-col items-center gap-4 px-4"
        >
          {[
            { text: "Hi, I'm Njuguna", className: "text-[#777764]" },
            { text: "Hi, I'm Njuguna", className: "font-outline-3 text-transparent" },
            { text: "Hi, I'm Njuguna", className: "text-secondary-700" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="title overflow-hidden py-2 2xl:py-4"
            >
              <h1 
                ref={el => textLines.current[index] = el}
                className={`font-grotesk text-[clamp(3rem,8vw,6rem)] font-bold uppercase tracking-tighter ${item.className}`}
              >
                {item.text}
              </h1>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-sm text-[#777764] font-medium">Scroll Down</span>
          <div className="relative h-14 w-[2px] overflow-hidden bg-[#777764]/20">
            <div className="absolute h-1/2 w-full bg-[#777764] animate-scrollDown"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
