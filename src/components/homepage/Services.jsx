import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Mobile app development",
    "Backend development", 
    "Blockchain development", 
    "Web Development",
    "Web Design",
    "Branding",
  ];

  const toolBoxItems = [
    "JavaScript",
    "Reactjs",
    "React native",
    "Flutter",
    "Rust",
    "TailwindCSS",
    "Figma",
    "Nodejs",
    ,
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things Mobile and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
