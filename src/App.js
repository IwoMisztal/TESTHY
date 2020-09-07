import React from 'react';
import GifGrid from './GifGrid/GifGrid';
import './App.scss';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <GifGrid />
    </div>
  );
}

export default App;
