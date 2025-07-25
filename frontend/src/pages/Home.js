import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <div className="w-full bg-gray-900 text-white flex items-center justify-between px-10 md:px-40 py-4 fixed top-0 z-50 shadow-md">
        <div className="w-1/4">
          <img
            src="/images/jendyco-logo2.png"
            alt="Jendyco Logo"
            className="w-36 md:w-52 h-auto drop-shadow-[0_0_8px_white]"
          />
        </div>
        <div className="flex-1 flex justify-center space-x-6 md:space-x-10 font-bold text-sm md:text-base uppercase tracking-wide">
          <a href="#who-we-are" className="hover:text-orange-400 transition">Who We Are</a>
          <a href="/products" className="hover:text-orange-400 transition">Our Products</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact Us</a>
          <a href="/quote" className="hover:text-orange-400 transition">Request a Quote</a>
        </div>
        <div className="w-1/4" />
      </div>

      {/* Hero Section with Background Image */}
      <div
        className="h-[110vh] bg-cover bg-center bg-no-repeat relative -mt-[10vh] flex items-center justify-center px-8"
        style={{ backgroundImage: "url('/images/background_main2.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="text-center text-white px-6 max-w-4xl z-10">
          <p className="font-[Playfair] text-4xl md:text-5xl leading-snug font-semibold drop-shadow-md tracking-wide">
            Global Trade. Local Roots.
          </p>
          <p className="mt-4 text-lg md:text-xl font-light leading-relaxed drop-shadow-sm">
            We connect the world to premium Peruvian exports — coffee, cacao, cotton, and more. Built on trust, driven by integrity.
          </p>

          <p className="mt-6 text-base italic text-orange-200">“From Peru to the world — with purpose and precision.”</p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a
              href="/products"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              Explore Our Products
            </a>
            <a
              href="/quote"
              className="bg-white text-orange-500 font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
          {/* Bouncy Arrow */}
          <div className="mt-14 animate-bounce">
            <a href="#What-We-Offer" className="text-white text-6xl hover:text-orange-400 transition">
              ↓
            </a>
          </div>

        </div>
      </div>

      {/* What We Offer Cards */}
      <section id="What-We-Offer" className="bg-white px-10 py-20 text-gray-800 text-center pt-32 -mt-32">
        <h2 className="text-4xl font-bold mb-12 text-[#001f3f]-500">What-We-Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-orange-500 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Peruvian Sourcing</h3>
            <p className="text-gray-700">
              Access to high altitude Arabica coffee (87%+ purity), rich cacao, premium Pima cotton, and Camu Camu powder, all ethically and sustainably sourced.
            </p>
          </div>
          <div className="bg-white border-2 border-orange-500 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Trade & Logistics Mastery</h3>
            <p className="text-gray-700">
              Full-spectrum trade support including documentation, global shipping, and compliance. Whether from Peru or abroad, we ensure your delivery is on time and seamless.
            </p>
          </div>
          <div className="bg-white border-2 border-orange-500 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Custom Sourcing</h3>
            <p className="text-gray-700">
              Need baby alpaca, vicuña wool, or rare Andean and global goods? We connect you with verified sources, ethically and reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Why Peru Section */}
      <section className="bg-orange-50 px-10 py-20 text-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">Why Peru?</h2>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          Peru is home to unmatched biodiversity, rich climates, and deep-rooted cultural knowledge. From high altitude Arabica coffee to the rarest textiles, Peru offers global buyers a unique sourcing advantage rooted in sustainability and quality.
        </p>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="bg-white px-10 py-20 text-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">Who We Are</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Jendyco International is a family driven trade hub founded on the American Dream. We believe in building lasting relationships, creating transparent supply chains, and advocating for fair trade. With roots in Peru and operations in the U.S., we bring Latin America to the world.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white px-10 md:px-40 py-20 text-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#001f3f]-500">Contact Us</h2>
        <p className="text-lg mb-2">Have a question? We’re here to help.</p>
        <p className="text-xl mb-4">📧 <a href="mailto:info@jendyco.com" className="text-blue-600 underline">info@jendyco.com</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8 text-sm">
        <div className="mb-4 flex justify-center gap-8">
          <a href="https://www.instagram.com/jendyco_international" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-[#E1306C] text-2xl hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/in/jendyco-international-27647b36b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-[#0077B5] text-2xl hover:scale-110 transition" />
          </a>
        </div>
        © {new Date().getFullYear()} Jendyco International. All rights reserved.
      </footer>
    </div>
  );
}
