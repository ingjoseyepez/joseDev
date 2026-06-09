import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; 
function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      {/* Aquí iremos añadiendo las demás secciones los próximos días */}
      <main style={{ minHeight: '100vh' }}>
        {/* Espacio temporal para ver el scroll */}
      </main>
    </div>
  );
}

export default App;