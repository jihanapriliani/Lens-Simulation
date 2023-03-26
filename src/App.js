import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ConvexLens from './pages/ConvexLens';
import ConcaveLens from './pages/ConcaveLens';
import ConvexMirror from './pages/ConvexMirror';
import ConcaveMirror from './pages/ConcaveMirror';


function App() {
  return (
  <div className='relative'>
   <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<ConvexLens />} />
        <Route path='/concave-lens' exact element={<ConcaveLens />} />
        <Route path='/convex-mirror' exact element={<ConvexMirror />} />
        <Route path='/concave-mirror' exact element={<ConcaveMirror />} />
      </Routes>
   </BrowserRouter>
  </div>
  );
}

export default App;
