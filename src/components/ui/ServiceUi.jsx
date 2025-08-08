import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

export default function ServiceUi({ title, description, items, variant = "default" }) {
  const serviceUi = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);
  const services = useRef(null);
  const line = useRef(null);
      
  useEffect(() => {
    ScrollTrigger.create({
      trigger: serviceUi.current,
      start: "150px bottom",
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2)
        .to(line.current, { width: "100%", ease: "power4.inOut", duration: 1.5 }, 0.2)
        .to(services.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25}, 0.5),
      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [serviceUi]);

  // Expertise cards rendering
  const renderExpertiseItems = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${item.bgColor || 'bg-gray-50 dark:bg-gray-800'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-100/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-white dark:text-black">{item.description}</p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent-100/20 dark:bg-accent-100/10 group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    );
  };

  // Toolbox grid rendering
  const renderToolboxItems = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="text-center font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div ref={serviceUi} className="mt-10">
      <div className="space-y-6 mb-10">
        <div className="space-y-3 2xl:space-y-10">
          <h3 ref={heading} className="text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0">
            {title}
          </h3>
          <p ref={body} className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl translate-y-10 opacity-0">
            {description}
          </p>
        </div>
        <div ref={line} className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"></div>
      </div>
      
      <div ref={services} className="translate-y-10 opacity-0">
        {variant === "expertise" ? renderExpertiseItems() : renderToolboxItems()}
      </div>
    </div>
  );
}