import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Resume from './components/Resume.jsx';
import Certifications from './components/Certifications.jsx';
import CursorTrail from './components/CursorTrail.jsx';

const Home = () => (
  <main className="relative">
    <Hero />
    <About />
    <Skills />
    <Certifications />
    <Projects />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col selection:bg-brand-primary selection:text-white overflow-x-hidden bg-surface-900">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        <Footer />

        {/* Global Background Blobs */}
        <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />
          <div className="absolute top-[60%] right-[5%] w-[600px] h-[600px] bg-brand-secondary/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full" />
        </div>

        {/* Global Cursor Trail */}
        <CursorTrail />
      </div>
    </Router>
  );
}

export default App;

