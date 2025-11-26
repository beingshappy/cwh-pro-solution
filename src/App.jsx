import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Industries from './components/Industries';
import Achievements from './components/Achievements';
import Process from './components/Process';
import Technologies from './components/Technologies';
import GlobalPresence from './components/GlobalPresence';
import ClientTestimonials from './components/ClientTestimonials';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Achievements />
      <Process />
      <Technologies />
      <GlobalPresence />
      <ClientTestimonials />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
