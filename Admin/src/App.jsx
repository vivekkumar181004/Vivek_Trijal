import React from 'react';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UploadHero from "./pages/UploadHero";
import UploadProducts from "./pages/UploadProducts";
import UploadServices from "./pages/UploadServices";
import AdminProducts from './pages/AdminProducts.jsx';
import AdminServices from './pages/AdminServices.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
    <BrowserRouter>
      <div className="flex min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload-hero" element={<UploadHero />} />
            <Route path="/upload-products" element={<UploadProducts />} />
            <Route path="/admin-products" element={<AdminProducts/>} />
            <Route path="/upload-services" element={<UploadServices />} />
            <Route path="/admin-services" element={<AdminServices />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>

    </div>
  );



}

export default App;
