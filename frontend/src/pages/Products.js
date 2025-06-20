import React, { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Products() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // ⏩ Auto-scroll logic
  useEffect(() => {
    const scrollRow = (ref) => {
      if (!ref.current) return;
      const container = ref.current;
      let scrollAmount = 0;
      const scrollStep = 1;

      const slide = setInterval(() => {
        container.scrollLeft += scrollStep;
        scrollAmount += scrollStep;

        // Reset when reaching the end
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, 40); // Adjust for speed

      return () => clearInterval(slide);
    };

    const stop1 = scrollRow(row1Ref);
    const stop2 = scrollRow(row2Ref);

    return () => {
      stop1 && stop1();
      stop2 && stop2();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* 🔹 Top Nav Bar */}
      <div className="w-full bg-gray-900 text-white flex items-center justify-between px-40 py-4 fixed top-0 z-50 shadow-md">
        <div className="text-sm font-bold uppercase">
          <a href="/" className="hover:underline text-orange-400">Home</a>
        </div>
        <div className="flex-1 flex justify-center space-x-10 font-bold text-base uppercase">
          <a href="/products" className="hover:text-orange-400">Our Products</a>
          <a href="/#contact" className="hover:underline">Contact Us</a>
          <a href="/quote" className="hover:underline text-orange-400">Request a Quote</a>
        </div>
        <div className="w-1/4 flex justify-end">
          <img
            src="/Jendyco-Logo2.png"
            alt="Jendyco Logo"
            className="w-40 h-auto drop-shadow-[0_0_8px_white]"
          />
        </div>
      </div>

      {/* 🔸 Title */}
      <div className="pt-52 px-8 text-center">
        <h1 className="text-4xl font-bold text-[#002b5c] mb-12 tracking-wide">Our Products</h1>
      </div>

      {/* 🔸 3 Feature Cards with Hover Expand */}
      <div className="grid md:grid-cols-3 gap-12 px-10 mb-5">
        {/* ☕ Coffee */}
        <div className="group bg-[#002b5c] text-white p-8 min-h-[320px] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:z-10 relative overflow-hidden">
          <h2 className="text-xl font-bold mb-2">Coffee Beans</h2>
          <p className="text-sm leading-relaxed group-hover:hidden">
            Smooth, aromatic, high-altitude Arabica.
          </p>
          <div className="hidden group-hover:block absolute inset-0 bg-[#002b5c] bg-opacity-95 p-6">
            <h3 className="text-xl font-bold mb-2">Coffee Beans</h3>
            <p className="text-sm leading-relaxed">
              Handpicked from high-altitude Peruvian farms, our 87% Organic Arabica beans offer rich, smooth flavors with ethical sourcing and export-grade consistency.
            </p>
          </div>
        </div>

        {/* 🍫 Cacao */}
        <div className="group bg-[#ff6f00] text-white p-8 min-h-[320px] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:z-10 relative overflow-hidden">
          <h2 className="text-xl font-bold mb-2">Cacao Beans</h2>
          <p className="text-sm leading-relaxed group-hover:hidden">
            Deep chocolate tones. Ethical harvest.
          </p>
          <div className="hidden group-hover:block absolute inset-0 bg-[#ff6f00] bg-opacity-95 p-8 min-h-[320px]">
            <h3 className="text-xl font-bold mb-2">Cacao Beans</h3>
            <p className="text-sm leading-relaxed">
              Sourced from Peru’s fertile valleys, our cacao is known for its high butter content, low acidity, and unmatched flavor profile. Ideal for bean-to-bar makers and chocolatiers.
            </p>
          </div>
        </div>

        {/* 👕 Cotton */}
        <div className="group bg-[#002b5c] text-white p-8 min-h-[320px] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:z-10 relative overflow-hidden">
          <h2 className="text-xl font-bold mb-2">Pima Cotton</h2>
          <p className="text-sm leading-relaxed group-hover:hidden">
            Luxuriously soft. Sustainably grown.
          </p>
          <div className="hidden group-hover:block absolute inset-0 bg-[#002b5c] bg-opacity-95 p-8 min-h-[320px]">
            <h3 className="text-xl font-bold mb-2">Pima Cotton</h3>
            <p className="text-sm leading-relaxed">
              Peru’s signature textile, Pima cotton is prized for its extraordinary softness, strength, and sheen. Available through our network of trusted textile exporters.
            </p>
          </div>
        </div>
      </div>

{/* 🖼️ Auto-Sliding Gallery Section with Two Rows */}
<div className="bg-gray-100 px-8 py-20 overflow-hidden">
  <h2 className="text-2xl font-bold text-center mb-12 text-[#002b5c]">
    Our Coffee & Cacao in Action — Jendy in Motion
  </h2>

  {/* 🔁 First Row - Left to Right Loop */}
  <div className="overflow-hidden">
    <div className="flex gap-6 animate-slide-left w-max">
      {[
        "JendycoFields1.jpg",
        "Jendycoffee-Branch2.JPG",
        "Jendycoffee-branch.JPG",
        "Jendycocoffeebeans-closeup.JPG",
      ].concat([
        "JendycoFields1.jpg",
        "Jendycoffee-Branch2.JPG",
        "Jendycoffee-branch.JPG",
        "Jendycocoffeebeans-closeup.JPG",
      ]).map((filename, index) => (
        <img
          key={`row1-${index}`}
          src={`/${filename}`}
          alt={`Jendyco ${index + 1}`}
          className="w-[300px] h-[200px] object-cover rounded shadow-md"
        />
      ))}
    </div>
  </div>

  {/* 🔁 Second Row - Right to Left Loop */}
  <div className="overflow-hidden mt-10">
    <div className="flex gap-6 animate-slide-right w-max">
      {[
        "JendycoCoffee-Branch3.JPG",
        "JendycoCacao-Branch3.JPG",
        "JendycoCacao-Branch2.JPG",
        "JendycoCacao-Branch.JPG",
      ].concat([
        "JendycoCoffee-Branch3.JPG",
        "JendycoCacao-Branch3.JPG",
        "JendycoCacao-Branch2.JPG",
        "JendycoCacao-Branch.JPG",
      ]).map((filename, index) => (
        <img
          key={`row2-${index}`}
          src={`/${filename}`}
          alt={`Jendyco ${index + 5}`}
          className="w-[300px] h-[200px] object-cover rounded shadow-md"
        />
      ))}
    </div>
  </div>
</div>



      {/* 📩 Floating Quote Button */}
      <a
        href="/quote"
        className="fixed bottom-6 right-6 bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-orange-600 z-50 transition"
      >
        📦 Request a Quote
      </a>

      {/* 🔻 Footer */}
      <footer className="bg-gray-200 text-center py-8 text-sm text-gray-600">
  <div className="mb-4 flex justify-center gap-6">
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
