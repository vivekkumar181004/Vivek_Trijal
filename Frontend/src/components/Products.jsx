import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products/all"
      );
      setProducts(res.data.result);
    } catch (error) {
      console.log("Product fetch error:", error);
    }
  };

  return (
    <div>
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-gray-700">
            PRODUCTS
          </h2>
          <p className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">
          Explore our meticulously crafted range of products, designed to elevate your experience and meet your diverse needs. Backed by years of industry expertise and a commitment to quality, each product reflects our dedication to perfection. Discover the difference with our exceptional offerings.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {products.length === 0 && (
            <p className="text-center col-span-3">
              No products available
            </p>
          )}

          {products.map((item) => (
            <div key={item._id} className="group">
              <img
                src={`http://localhost:5000/products/${item.image}`}
                alt={item.title}
                className="rounded-lg h-64 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <h3 className="text-2xl font-bold text-center mt-4 text-black">
                {item.title}
              </h3>
              <p className="text-center text-xl text-gray-600 mt-2">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Products;