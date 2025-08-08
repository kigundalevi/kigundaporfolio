import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";
import { FaReact, FaMobile, FaFigma, FaNodeJs, FaRust, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs,SiMongodb,SiExpress,SiTypescript } from "react-icons/si";
export default function Services() {
  const expertiseItems = [
    { 
      title: "Mobile app development", 
      description: "Creating intuitive, high-performance mobile applications for iOS and Android platforms.",
      icon: <FaMobile className="text-3xl text-blue-600" />, // Using default color
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    { 
      title: "Backend development", 
      description: "Building robust server-side applications and APIs to power your digital solutions.",
      icon: <FaNodeJs className="text-3xl text-green-600" />, // Using default color
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    { 
      title: "Blockchain development", 
      description: "Developing secure, decentralized applications and smart contracts.",
      icon: <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">B</div>,
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    { 
      title: "Web App Development", 
      description: "Crafting responsive, fast, and accessible websites with modern frameworks.",
      icon: <FaHtml5 className="text-3xl text-orange-600" />, // Using default color
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    { 
      title: "Web Design", 
      description: "Designing beautiful, user-centric interfaces that engage and convert.",
      icon: <FaFigma className="text-3xl text-pink-500" />, // Using default color
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    },
    { 
      title: "Branding", 
      description: "Creating memorable brand identities that resonate with your target audience.",
      icon: <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold">B</div>,
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
  ];
  
  const toolBoxItems = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Reactjs", icon: <FaReact className="text-blue-400" /> },
    { name: "Nextjs", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Flutter", icon: <div className="text-blue-500 font-bold">F</div> },
    { name: "Rust", icon: <FaRust className="text-orange-600" /> },
    { name: "TailwindCSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Nodejs", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDb", icon: <SiMongodb className="text-green-600" /> },
    { name: "ReactNative", icon: <FaReact className="text-blue-400" /> },
    { name: "Expressjs", icon: <SiExpress className="text-green-600" /> },
    { name: "Typescript", icon: <SiTypescript className="text-blue-600" /> },
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things Mobile and web related. With each of my services, my goal is to deliver an impactful and elevating experience for everyone."
          items={expertiseItems}
          variant="expertise"
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
          variant="toolbox"
        />
      </div>
    </section>
  );
}