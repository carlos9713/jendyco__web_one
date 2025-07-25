import React, { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const imageBasePath = "/images/";

export default function Products() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const scrollRow = (ref) => {
      if (!ref.current) return;
      const container = ref.current;
      let scrollAmount = 0;
      const scrollStep = 1;

      const slide = setInterval(() => {
        container.scrollLeft += scrollStep;
        scrollAmount += scrollStep;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, 40);

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
      {/* NAVBAR */}
      <div className="w-full bg-gray-900 text-white flex items-center justify-between px-40 py-4 fixed top-0 z-50 shadow-md">
        <div className="text-sm font-bold uppercase">
          <a href="/" className="hover:underline text-orange-400">Home</a>
        </div>
        <div className="flex-1 flex justify-center space-x-10 font-bold text-base uppercase">
          <a href="/products" className="hover:text-orange-400">Our Products</a>
          <a href="/#who-we-are" className="hover:underline">Contact Us</a>
          <a href="/quote" className="hover:underline text-orange-400">Request a Quote</a>
        </div>
        <div className="w-1/4 flex justify-end">
          <img
            src={`${imageBasePath}jendyco-logo2.png`}
            alt="Jendyco Logo"
            className="w-40 h-auto drop-shadow-[0_0_8px_white]"
          />
        </div>
      </div>

      {/* HEADER */}
      <div className="pt-52 px-8 text-center">
        <h1 className="text-4xl font-bold text-[#002b5c] mb-12 tracking-wide">Our Products</h1>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-10 mb-20">
        {["Peruvian Arabica Coffee", "Cacao Beans", "Pima Cotton", "Camu Camu & Lucuma Powders"].map((title, index) => {
          const descriptions = [
            "Sourced from high-altitude farms in Peru, our 87% purity Arabica coffee is handpicked and sun-dried for peak flavor. Each batch reflects generations of Peruvian expertise and a deep respect for the land.",
            "Rich in cocoa butter and low in acidity, our cacao beans come from fertile valleys in Peru. Ideal for premium chocolate production, our supply ensures traceability, quality, and ethical practices.",
            "Known for its long fibers and unparalleled softness, Peruvian Pima cotton is a luxury textile used by the world’s top fashion houses. Grown in coastal valleys and harvested with care.",
            "Camu Camu is one of the richest sources of vitamin C on Earth. Lucuma, known as the 'Gold of the Incas', brings natural sweetness to smoothies and desserts. Both grown deep in the Amazon and Andes."
          ];
          return (
            <div
              key={index}
              className="bg-white border-2 border-orange-400 rounded-xl p-6 shadow-lg transition transform duration-300"
            >
              <h2 className="text-xl font-bold text-[#002b5c] mb-2">{title}</h2>
              <p className="text-sm text-[#002b5c] leading-relaxed mb-4">{descriptions[index]}</p>
              <a
                href={`/quote?product=${encodeURIComponent(title)}`}
                className="inline-block mt-2 text-sm text-orange-500 hover:underline font-semibold"
              >
                Request This Product →
              </a>
              <p className="text-xs text-gray-500 italic mt-1">Minimum Order: 500kg • FOB Available</p>
            </div>
          );
        })}
      </div>

      {/* BABY ALPACA SECTION */}
      <div className="bg-[#fff8f0] px-12 py-32 text-center">
        <h2 className="text-5xl font-extrabold text-[#002b5c] mb-6 tracking-wide">Baby Alpaca Wool</h2>
        <p className="text-lg max-w-5xl mx-auto text-[#333] leading-loose font-medium">
          Discover the legacy of softness with Baby Alpaca wool — warmer than sheep wool, softer than cashmere, and completely hypoallergenic.
          <br /><br />
          <span className="text-orange-500 font-semibold">Royal Alpaca</span>: The top 1% of alpaca fleece. Ultra-fine and ideal for elite fashion.
          <br />
          <span className="text-orange-500 font-semibold">Baby Alpaca</span>: Premium texture and warmth, used in luxury apparel globally.
          <br />
          <span className="text-orange-500 font-semibold">Regular Alpaca</span>: Versatile, strong, and still more luxurious than most wools.
          <br /><br />
          Each thread supports Peru’s heritage, ethically sourced from trusted Andean herders.
        </p>
        <a
          href="/quote?product=Baby Alpaca Wool"
          className="inline-block mt-6 text-sm text-orange-500 hover:underline font-semibold"
        >
          Request Baby Alpaca Wool →
        </a>
      </div>

      {/* VICUÑA SECTION */}
      <div className="bg-[#f0f7ff] px-12 py-32 text-center">
        <h2 className="text-5xl font-extrabold text-[#002b5c] mb-6 tracking-wide">Vicuña Wool</h2>
        <p className="text-lg max-w-5xl mx-auto text-[#333] leading-loose font-medium">
          Once reserved for Incan royalty, Vicuña wool is the rarest, finest fiber on Earth. It is lightweight, breathable, and warmer than any other natural fiber.
          <br /><br />
          Sheared only every three years under strict conservation rules, this wool is extremely limited in supply.
          <br />
          While not in stock, Jendyco offers qualified sourcing for exclusive Vicuña wool upon request.
          <br /><br />
          <span className="text-orange-500 font-semibold">Luxury beyond compare — sourced ethically, delivered globally.</span>
        </p>
        <a
          href="/quote?product=Vicuña Wool"
          className="inline-block mt-6 text-sm text-orange-500 hover:underline font-semibold"
        >
          Request Vicuña Wool →
        </a>
      </div>

      {/* SLIDESHOW */}
      <div className="bg-gray-100 px-8 py-20 overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-12 text-[#002b5c]">
          Our Coffee & Cacao in Action — Jendy in Motion
        </h2>
        <div className="overflow-hidden" ref={row1Ref}>
          <div className="flex gap-6 w-max">
            {["JendycoFields1.jpg", "Jendycoffee-Branch2.JPG", "Jendycoffee-branch.JPG", "Jendycocoffeebeans-closeup.JPG"].map((filename, index) => (
              <img
                key={`row1-${index}`}
                src={`${imageBasePath}${filename}`}
                alt={`Jendyco ${index + 1}`}
                className="w-[300px] h-[200px] object-cover rounded shadow-md"
              />
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-10" ref={row2Ref}>
          <div className="flex gap-6 w-max">
            {["JendycoCoffee-Branch3.JPG", "JendycoCacao-Branch3.JPG", "JendycoCacao-Branch2.JPG", "JendycoCacao-Branch.JPG"].map((filename, index) => (
              <img
                key={`row2-${index}`}
                src={`${imageBasePath}${filename}`}
                alt={`Jendyco ${index + 5}`}
                className="w-[300px] h-[200px] object-cover rounded shadow-md"
              />
            ))}
          </div>
        </div>
      </div>

      {/* CUSTOM SOURCING CTA */}
      <div className="bg-[#002b5c] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Global Sourcing, Peruvian Expertise</h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          From superfoods to heritage crafts, if it's from Peru — we can find it. Our sourcing network covers everything rare and authentic Peru has to offer.
        </p>
        <a
          href="/quote"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
        >
          🔎 Request a Custom Product
        </a>
      </div>

      {/* QUOTE BUTTON */}
      <a
        href="/quote"
        className="fixed bottom-6 right-6 bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-orange-600 z-50 transition"
      >
        📦 Request a Quote
      </a>

      {/* FOOTER */}
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
