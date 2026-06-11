import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Services from './sections/Services/Services';
import Portfolio from './sections/Portfolio/Portfolio';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;