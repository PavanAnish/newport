import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import GitHubSection from './components/GitHubSection';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import bgImage from './assets/bg.png';

function App() {
  return (
    <div className="relative selection:bg-blue-100 min-h-screen isolate bg-primary overflow-hidden">
      {/* Background Image covering Hero and the section below */}
      <div className="absolute top-0 left-0 w-full h-[200vh] -z-20 pointer-events-none">
        <img src={bgImage} alt="" className="w-full h-full object-cover opacity-50" />
      </div>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Projects />
        <Services />
        <GitHubSection />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;