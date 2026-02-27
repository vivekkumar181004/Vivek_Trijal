import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Career from './components/Career';
import Contact from './pages/Contact';
import ProductAndServices from './components/ProductAndServices';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ProductAndServices />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
