import ibgroup from "/src/assets/images/stab-main.png";
import memento from "/src/assets/images/iphonemockup.png";
import blueprint from "/src/assets/images/blueprint.png";
import carsawa from "/src/assets/videos/carsawa.mp4";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://stab-tau.vercel.app/"
            img={ibgroup}
            alt="Stab mobile money platform"
            name="Stab application"
            type=" Mobile Application • Frontend Development"
            year="2025"
            tools="React native • TailwindCSS • solana"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link=""
            img={memento}
            alt="spotify stats"
            name="statify"
            type="Mobile Application • Frontend Development"
            year="2025"
            tools="React native • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://blueprintstudio.vercel.app/"
            img={blueprint}
            alt="blueprint studio project "
            name="BLUEPRINT STUDIO"
            type="Web Design • Frontend Development"
            year="2024"
            tools="Reactjs • TailwindCSS "
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://carsawadealerplatform.netlify.app"
            autoPlay
            muted
            loop
            playsInline
            playbackRate={2}
            video={carsawa}
            alt="carsawa dealer platform mockup"
            name="CARSAWA DEALER PLATFORM"
            type="Frontend Development"
            year="2025"
            tools="Reactjs • TailwindCSS • vite"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
