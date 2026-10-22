import { LanguageProvider } from './context/LanguageContext';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Terminal from './components/terminal';
import Contact from './components/contact';
import Footer from './components/footer';
import MouseFollower from './components/mouseFollower';

function App() {
  return (
    <LanguageProvider>
      <a href="#about" className="skipLink">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Terminal />
        <Contact />
      </main>
      <Footer />
      <MouseFollower />
    </LanguageProvider>
  );
}

export default App;
