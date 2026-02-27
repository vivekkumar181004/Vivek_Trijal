import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const ProductAndServices = () => {
  return (
    <>
    <Navbar/>

      <div className="pt-24 space-y-12 bg-white text-gray-800">
        <section>
          <div className="container mx-auto px-6 md:px-10 lg:px-32 xl:max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              ProductAndServices
            </h1>

            <p className="px-8 mt-8 mb-12 text-lg text-gray-700">
              Trijal ElectriKals Pvt. Ltd. is a prominent manufacturer and supplier
              of high-quality electrical products and solutions. Based in Faridabad,
              Haryana, our company specializes in custom-built power distribution
              panels, LT switchgear, control panels, and electrical EPC services.
            </p>

            <p className="px-8 mt-4 mb-12 text-lg text-gray-700">
              With a focus on precision, quality, and timely delivery, we cater to
              the diverse needs of industrial and commercial clients. Our expert
              team ensures seamless integration of design, manufacturing, and
              installation processes to provide robust, reliable, and cost-effective
              solutions.
            </p>

            <div className="flex flex-wrap justify-center mt-8">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-red-600 text-white hover:bg-red-700 transition">
                Explore Products
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ProductAndServices;
