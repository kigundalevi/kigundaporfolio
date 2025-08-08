import ibgroup from "/src/assets/images/stab-main.png";
import memento from "/src/assets/images/iphonemockup.png";
import blueprint from "/src/assets/images/blueprint.png";
import carsawaadminvid from "/src/assets/videos/carsawaadminvid.mp4";
import carsawaclient from "/src/assets/videos/carsawaclient.mp4";
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
            link="https://www.carsawa.africa/"
            autoPlay
            muted
            loop
            playsInline
            playbackRate={2}
            video={carsawaclient}
            alt="carsawa marketplace"
            name="CARSAWA MARKETPLACE"
            type="Frontend Development"
            year="2025"
            tools="Nextjs • TailwindCSS • Reactjs"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://admin.carsawa.africa"
            autoPlay
            muted
            loop
            playsInline
            playbackRate={2}
            video={carsawaadminvid}
            alt="carsawa admin"
            name="CARSAWA ADMIN"
            type="Frontend Development"
            year="2025"
            tools="Nextjs • TailwindCSS • Reactjs"
          />
         
        </div>
      </div>
    </section>
  );
}
