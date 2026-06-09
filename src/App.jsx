import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero/Hero';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;