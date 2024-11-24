import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import ProgramTypes from './components/ProgramTypes';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <ProgramTypes />
        <Impact />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  );
}

export default App;