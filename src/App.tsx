import React from 'react';
import { VisualCanvaDeck } from './components/VisualCanvaDeck';

export function App() {
  return (
    <div className="min-h-screen bg-mesh-soft text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
      <VisualCanvaDeck />
    </div>
  );
}

export default App;
