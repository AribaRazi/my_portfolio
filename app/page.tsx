import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { Hero } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Skills } from "./components/sections/skills";
import { Projects } from "./components/sections/projects";
import { Achievements } from "./components/sections/achievements";
import { Experience } from "./components/sections/experience";
import { Education } from "./components/sections/education";
import { Certifications } from "./components/sections/certifications";
import { Resume } from "./components/sections/resume";
import { Contact } from "./components/sections/contact";
import { Badges } from "./components/sections/badges";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Education />
        <Certifications />
        <Badges />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
