import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TechnologieSection } from "@/sections/Technologies";
import { TestimonialsSection } from "@/sections/Testimonials";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TechnologieSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection/>
      <AboutSection />
      <ContactSection />
      <Footer/>
    </div>
  );
}
