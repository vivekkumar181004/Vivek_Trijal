// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {

//     const form = useRef();

//      const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//     return (
//             <>

//                 {/* HERO SECTION */}
//                 <div className="relative h-[60vh] w-full">
//                     <img
//                         src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
//                         alt="contact"
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                         <h1 className="text-white text-4xl md:text-6xl font-bold tracking-widest">
//                             CONTACT
//                         </h1>
//                     </div>
//                 </div>

//                 {/* INTRO TEXT */}
//                 <div className="bg-gray-100 py-10 px-6 text-center">
//                     <p className="max-w-3xl mx-auto text-gray-600 text-lg">
//                         Welcome to our Help Centre – your go-to resource for answers,
//                         assistance, and guidance. Discover comprehensive support, FAQs,
//                         and expert insights to ensure a seamless experience.
//                     </p>
//                 </div>

//                 {/* CONTACT SECTION */}
//                 <div className="bg-gray-100 py-12 px-6">
//                     <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

//                         {/* LEFT CARD */}
//                         <div className="bg-white rounded-xl shadow-md p-8">
//                             <h3 className="text-red-500 font-semibold mb-2">
//                                 Get in touch
//                             </h3>

//                             <h2 className="text-2xl font-bold mb-4 border-b-4 border-red-500 inline-block pb-2">
//                                 Contact our sales
//                             </h2>

//                             <div className="mt-6 space-y-4 text-gray-600">
//                                 <p className="hover:text-red-500 cursor-pointer">
//                                     sales@trijal.com
//                                 </p>
//                                 <p className="hover:text-red-500 cursor-pointer">
//                                     contact@trijal.com
//                                 </p>
//                                 <p>+91 8588878612</p>
//                                 <p>+91 8588878600</p>
//                             </div>
//                         </div>

//                         {/* RIGHT CARD */}
//                         <div className="bg-white rounded-xl shadow-md p-8">
//                             <h3 className="text-red-500 font-semibold mb-2">
//                                 Send us a message
//                             </h3>

//                             <h2 className="text-2xl font-bold mb-6 border-b-4 border-red-500 inline-block pb-2">
//                                 Contact our sales
//                             </h2>

//                             <form ref={form} onSubmit={sendEmail} className="space-y-4">
//                                 <div className="grid md:grid-cols-2 gap-4">
//                                     <input
//                                         type="text"
//                                         placeholder="Name"
//                                         className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                                     />
//                                     <input
//                                         type="text"
//                                         name='Company'
//                                         placeholder="Company"
//                                         className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                                     />
//                                 </div>

//                                 <div className="grid md:grid-cols-2 gap-4">
//                                     <input
//                                         type="text"
//                                         name='Phone Number'
//                                         placeholder="Phone"
//                                         className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                                     />
//                                     <input
//                                         type="email"
//                                         name='Email'
//                                         placeholder="Email"
//                                         className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                                     />
//                                 </div>

//                                 <textarea
//                                     rows="5"
//                                     name='Message'
//                                     placeholder="Message"
//                                     className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                                 ></textarea>

//                                 <button
//                                     type="submit"

//                                     className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
//                                 >
//                                     Send
//                                 </button>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </>
//     );
// }

// export default Contact;