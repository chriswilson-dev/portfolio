import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import LightAnimatedBackground from "@/components/LightAnimatedBackground";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === 'dark' ? <AnimatedBackground /> : <LightAnimatedBackground />}
      <Navigation />
      <main className="min-h-screen relative z-10">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
