import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Global Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[60%] right-[5%] w-[600px] h-[600px] bg-brand-secondary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}

export default App;
