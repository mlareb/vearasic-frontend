import React from 'react';
import Home from './pages/Home';
export default function App(){
  return (
    <div className="min-h-screen">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-bold">VEARASIC</h1>
      </header>
      <main className="p-4">
        <Home/>
      </main>
    </div>
  );
}
