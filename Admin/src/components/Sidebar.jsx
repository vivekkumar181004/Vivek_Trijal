import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div>

      <div className="w-64 bg-green-700 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <ul className="space-y-6">

        <li>
          <Link to="/" className="hover:text-red-400">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/upload-hero" className="hover:text-red-400">
            Upload Hero Image
          </Link>
        </li>

        <li>
          <Link to="/upload-products" className="hover:text-red-400">
            Upload Product Images
          </Link>
        </li>

        <li>
          <Link to="/admin-products" className="hover:text-red-400">
            Get Admin Products
          </Link>
        </li>

        <li>
          <Link to="/upload-services" className="hover:text-red-400">
            Upload Services Images
          </Link>
        </li>
        <li>
          <Link to="/admin-services" className="hover:text-red-400">
           Get Admin Services
          </Link>
        </li>

      </ul>
    </div>
    </div>
  );
}

export default Sidebar;
