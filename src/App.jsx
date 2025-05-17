import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import SectionDivider from "./components/SectionDivider";
import ContactSection from "./components/ContactSection";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,       
      delay: 100,        
      duration: 800,     
      easing: 'ease-out',
      once: false,       
      mirror: true
    });
  }, []);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth sm:block">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

export default App;
