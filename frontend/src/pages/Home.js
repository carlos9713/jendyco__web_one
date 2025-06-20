import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* ✅ Top Nav Bar */}
      <div className="w-full bg-gray-900 text-white flex items-center justify-between px-40 py-4 fixed top-0 z-50 shadow-md">
        <div className="w-1/9iok" />

        <div className="flex-1 flex justify-center space-x-10 font-bold text-base uppercase tracking-wide">
          <a href="#who-we-are" className="hover:text-orange-400 transition">Who We Are</a>
          <a href="/products" className="hover:text-orange-400 transition">Our Products</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact Us</a>
          <a href="/quote" className="hover:text-orange-400 transition">Request a Quote</a>
        </div>

        <div className="w-1/4 flex justify-end">
          <img
            src="/Jendyco-Logo2.png"
            alt="Jendyco Logo"
            className="w-60 h-auto drop-shadow-[0_0_8px_white]"
          />
        </div>
      </div>

   {/* ✅ Hero Background Section */}
   <div
  className="h-[110vh] bg-cover bg-center bg-no-repeat relative -mt-[10vh] flex items-center justify-center px-8"
  style={{
    backgroundImage: "url('/background_main1.png')",
  }}
>
  {/* Text background fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-0" />

  {/* Centered message content */}
  <div className="text-center text-white px-6 max-w-4xl z-10">
    <p className="font-[Playfair] text-4xl md:text-5xl leading-snug font-semibold drop-shadow-md tracking-wide">
      Family-Owned. Globally Trusted.
    </p>
    <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-white drop-shadow-sm">
      Delivering premium coffee, cacao, and Latin American exports with care, precision, and a legacy of integrity.
    </p>

    {/* ✅ Chips */}
 {/* ✅ Highlighted Product Chips with Explore Button */}
<div className="mt-12 flex flex-col items-center space-y-8">
  <div className="flex flex-wrap justify-center gap-6">
    <a
      href="/products"
      className="bg-white/30 text-white border-2 border-white px-6 py-3 rounded-full text-lg font-semibold backdrop-blur-md shadow-lg hover:bg-white/40 transition"
    >
      Arabica Coffee
    </a>
    <a
      href="/products"
      className="bg-white/30 text-white border-2 border-white px-6 py-3 rounded-full text-lg font-semibold backdrop-blur-md shadow-lg hover:bg-white/40 transition"
    >
      Cacao Beans
    </a>
    <a
      href="/products"
      className="bg-white/30 text-white border-2 border-white px-6 py-3 rounded-full text-lg font-semibold backdrop-blur-md shadow-lg hover:bg-white/40 transition"
    >
      Pima Cotton
    </a>lasting
  </div>

  <a
    href="/products"
    className="mt-6 bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
  >
    Explore Our Products →
  </a>
</div>



    {/* ✅ Scroll Arrow */}
    <div className="mt-20 animate-bounce">
      <a href="#who-we-are" className="text-white text-5xl">↓</a>
    </div>
  </div>
</div>



      {/* ✅ Who We Are Section */}
      <section id="who-we-are" className="bg-white px-10 py-20 text-gray-800 text-center">
        <h2 className="text-5xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg max-w-3xl mx-auto">
        At Jendyco, we go beyond shipping — we’re a family-driven business rooted in the American Dream. 
        Our mission is to build lasting partnerships while streamlining global trade for businesses across the U.S., ensuring smooth, ethical, and sustainable import/export experiences.

        </p>
      </section>

      

      {/* ✅ Contact Section */}
      <section id="contact" className="bg-white px-40 py-20 text-gray-800 text-center">
        <h2 className="text-5xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-2">Have a question? We’re here to help.</p>
        <p className="text-3 xl mb-4">📧 <a href="mailto:info@jendyco.com" className="text-blue-600 underline">info@jendyco.com</a></p>
      </section>

      {/* ✅ Quote Section */}
      <section id="quote" className="bg-gray-100 px-10 py-20 text-gray-800 text-center">
        <h2 className="text-5xl font-bold mb-6">Request a Quote</h2>
        <p className="text-lg max-w-2xl mx-auto mb-4">
          Let us know what you need. Whether you're importing or exporting, we’ll prepare a custom quote to make your supply chain seamless.
        </p>
        <a
          href="/quote"
          className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-600 transition"
        >
          Get Started
        </a>
      </section>
      <footer className="bg-gray-300 text-center py-8 text-sm text-gray-600">
  <div className="mb-4 flex justify-center gap-8">
    <a
      href="https://www.instagram.com/jendyco_international"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram className="text-[#E1306C] text-2xl hover:scale-110 transition" />
    </a>
    <a
      href="https://www.linkedin.com/in/jendyco-international-27647b36b"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin className="text-[#0077B5] text-2xl hover:scale-110 transition" />
    </a>
  </div>
  © {new Date().getFullYear()} Jendyco International. All rights reserved.
</footer>
    </div>
  );
}
