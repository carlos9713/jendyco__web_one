import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  // --- Products refs and logic (keep exactly as is) ---
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

  // --- Quote form state & handlers (keep exactly as is) ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    products: [],
    details: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "products") {
      const updatedProducts = [...formData.products];
      if (checked) updatedProducts.push(value);
      else {
        const idx = updatedProducts.indexOf(value);
        if (idx > -1) updatedProducts.splice(idx, 1);
      }
      setFormData({ ...formData, products: updatedProducts });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/send-quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("✅ Your quote request has been sent successfully!");
        setFormData({ name: "", email: "", company: "", products: [], details: "" });
      } else {
        alert("❌ There was an error: " + data.error);
      }
    } catch (error) {
      alert("❌ Network error: " + error.message);
    }
  };

  // === Return the entire merged page JSX ===
  return (
    <>
      {/* === HOME SECTION === */}
      <div className="flex flex-col min-h-screen font-sans" id="home">
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
            <a href="#who-we-are" className="hover:text-orange-400 transition">
              Who We Are
            </a>
            <a href="#products" className="hover:text-orange-400 transition">
              Our Products
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact Us
            </a>
            <a href="#quote" className="hover:text-orange-400 transition">
              Request a Quote
            </a>
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
              We connect the world to premium Peruvian exports — coffee, cacao, cotton, and more. Built on trust,
              driven by integrity.
            </p>

            <p className="mt-6 text-base italic text-orange-200">“From Peru to the world — with purpose and precision.”</p>

            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <a
                href="#products"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                Explore Our Products
              </a>
              <a
                href="#quote"
                className="bg-white text-orange-500 font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
              >
                Request a Quote
              </a>
            </div>
            {/* Bouncy Arrow */}
            <div className="mt-14 animate-bounce">
              <a href="#who-we-are" className="text-white text-6xl hover:text-orange-400 transition">
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
                Access to high altitude Arabica coffee (87%+ purity), rich cacao, premium Pima cotton, and Camu Camu powder,
                all ethically and sustainably sourced.
              </p>
            </div>
            <div className="bg-white border-2 border-orange-500 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">Trade & Logistics Mastery</h3>
              <p className="text-gray-700">
                Full-spectrum trade support including documentation, global shipping, and compliance. Whether from Peru or abroad,
                we ensure your delivery is on time and seamless.
              </p>
            </div>
            <div className="bg-white border-2 border-orange-500 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">Custom Sourcing</h3>
              <p className="text-gray-700">
                Need baby alpaca, vicuña wool, or rare Andean and global goods? We connect you with verified sources, ethically and
                reliably.
              </p>
            </div>
          </div>
        </section>

        {/* Why Peru Section */}
        <section className="bg-orange-50 px-10 py-20 text-gray-800 text-center">
          <h2 className="text-4xl font-bold mb-6 text-orange-500">Why Peru?</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            Peru is home to unmatched biodiversity, rich climates, and deep-rooted cultural knowledge. From high altitude Arabica
            coffee to the rarest textiles, Peru offers global buyers a unique sourcing advantage rooted in sustainability and quality.
          </p>
        </section>

        {/* Who We Are */}
        <section id="who-we-are" className="bg-white px-10 py-20 text-gray-800 text-center">
          <h2 className="text-4xl font-bold mb-6 text-orange-500">Who We Are</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Jendyco International is a family driven trade hub founded on the American Dream. We believe in building lasting relationships,
            creating transparent supply chains, and advocating for fair trade. With roots in Peru and operations in the U.S., we bring
            Latin America to the world.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white px-10 md:px-40 py-20 text-gray-800 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#001f3f]-500">Contact Us</h2>
          <p className="text-lg mb-2">Have a question? We’re here to help.</p>
          <p className="text-xl mb-4">
            📧{" "}
            <a href="mailto:info@jendyco.com" className="text-blue-600 underline">
              info@jendyco.com
            </a>
          </p>
        </section>
      </div>

      {/* === PRODUCTS SECTION === */}
      <div id="products" className="min-h-screen bg-gray-100 text-gray-900">
        {/* Products content copied exactly from your Products.js */}
        <div className="pt-52 px-8 text-center">
          <h1 className="text-4xl font-bold text-[#002b5c] mb-12 tracking-wide">Our Products</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-10 mb-20">
          {[
            "Peruvian Arabica Coffee",
            "Cacao Beans",
            "Pima Cotton",
            "Camu Camu & Lucuma Powders",
          ].map((title, index) => {
            const descriptions = [
              "Sourced from high-altitude farms in Peru, our 87% purity Arabica coffee is handpicked and sun-dried for peak flavor. Each batch reflects generations of Peruvian expertise and a deep respect for the land.",
              "Rich in cocoa butter and low in acidity, our cacao beans come from fertile valleys in Peru. Ideal for premium chocolate production, our supply ensures traceability, quality, and ethical practices.",
              "Known for its long fibers and unparalleled softness, Peruvian Pima cotton is a luxury textile used by the world’s top fashion houses. Grown in coastal valleys and harvested with care.",
              "Camu Camu is one of the richest sources of vitamin C on Earth. Lucuma, known as the 'Gold of the Incas', brings natural sweetness to smoothies and desserts. Both grown deep in the Amazon and Andes.",
            ];
            return (
              <div
                key={index}
                className="bg-white border-2 border-orange-400 rounded-xl p-6 shadow-lg transition transform duration-300"
              >
                <h2 className="text-xl font-bold text-[#002b5c] mb-2">{title}</h2>
                <p className="text-sm text-[#002b5c] leading-relaxed mb-4">{descriptions[index]}</p>
                <a
                  href="#quote"
                  className="inline-block mt-2 text-sm text-orange-500 hover:underline font-semibold"
                >
                  Request This Product →
                </a>
                <p className="text-xs text-gray-500 italic mt-1">Minimum Order: 500kg • FOB Available</p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#fff8f0] px-12 py-32 text-center">
          <h2 className="text-5xl font-extrabold text-[#002b5c] mb-6 tracking-wide">Baby Alpaca Wool</h2>
          <p className="text-lg max-w-5xl mx-auto text-[#333] leading-loose font-medium">
            Discover the legacy of softness with Baby Alpaca wool — warmer than sheep wool, softer than cashmere, and completely
            hypoallergenic.
            <br />
            <br />
            <span className="text-orange-500 font-semibold">Royal Alpaca</span>: The top 1% of alpaca fleece. Ultra-fine and ideal for
            elite fashion.
            <br />
            <span className="text-orange-500 font-semibold">Baby Alpaca</span>: Premium texture and warmth, used in luxury apparel
            globally.
            <br />
            <span className="text-orange-500 font-semibold">Regular Alpaca</span>: Versatile, strong, and still more luxurious than most
            wools.
            <br />
            <br />
            Each thread supports Peru’s heritage, ethically sourced from trusted Andean herders.
          </p>
          <a href="#quote" className="inline-block mt-6 text-sm text-orange-500 hover:underline font-semibold">
            Request Baby Alpaca Wool →
          </a>
        </div>

        <div className="bg-[#f0f7ff] px-12 py-32 text-center">
          <h2 className="text-5xl font-extrabold text-[#002b5c] mb-6 tracking-wide">Vicuña Wool</h2>
          <p className="text-lg max-w-5xl mx-auto text-[#333] leading-loose font-medium">
            Once reserved for Incan royalty, Vicuña wool is the rarest, finest fiber on Earth. It is lightweight, breathable, and warmer
            than any other natural fiber.
            <br />
            <br />
            Sheared only every three years under strict conservation rules, this wool is extremely limited in supply.
            <br />
            While not in stock, Jendyco offers qualified sourcing for exclusive Vicuña wool upon request.
            <br />
            <br />
            <span className="text-orange-500 font-semibold">Luxury beyond compare — sourced ethically, delivered globally.</span>
          </p>
          <a href="#quote" className="inline-block mt-6 text-sm text-orange-500 hover:underline font-semibold">
            Request Vicuña Wool →
          </a>
        </div>

        {/* Slideshow */}
        <div className="bg-gray-100 px-8 py-20 overflow-hidden">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#002b5c]">
            Our Coffee & Cacao in Action — Jendy in Motion
          </h2>
          <div className="overflow-hidden" ref={row1Ref}>
            <div className="flex gap-6 w-max">
              {[
                "JendycoFields1.jpg",
                "Jendycoffee-Branch2.JPG",
                "Jendycoffee-branch.JPG",
                "Jendycocoffeebeans-closeup.JPG",
              ].map((filename, index) => (
                <img
                  key={`row1-${index}`}
                  src={`/images/${filename}`}
                  alt={`Jendyco ${index + 1}`}
                  className="w-[300px] h-[200px] object-cover rounded shadow-md"
                />
              ))}
            </div>
          </div>
          <div className="overflow-hidden mt-10" ref={row2Ref}>
            <div className="flex gap-6 w-max">
              {[
                "JendycoCoffee-Branch3.JPG",
                "JendycoCacao-Branch3.JPG",
                "JendycoCacao-Branch2.JPG",
                "JendycoCacao-Branch.JPG",
              ].map((filename, index) => (
                <img
                  key={`row2-${index}`}
                  src={`/images/${filename}`}
                  alt={`Jendyco ${index + 5}`}
                  className="w-[300px] h-[200px] object-cover rounded shadow-md"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#002b5c] text-white text-center py-16 px-6">
          <h2 className="text-3xl font-bold mb-4">Global Sourcing, Peruvian Expertise</h2>
          <p className="max-w-3xl mx-auto mb-6 text-lg">
            From superfoods to heritage crafts, if it's from Peru — we can find it. Our sourcing network covers everything rare and
            authentic Peru has to offer.
          </p>
          <a
            href="#quote"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            🔎 Request a Custom Product
          </a>
        </div>
      </div>

      {/* === QUOTE SECTION === */}
      <div id="quote" className="bg-white px-10 md:px-40 py-20">
        <h2 className="text-4xl font-bold mb-8 text-[#001f3f]">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">
              Name *
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email *
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="company">
              Company Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <fieldset>
              <legend className="block mb-1 font-semibold">Products Interested In</legend>
              {[
                "Arabica Coffee Beans",
                "Cacao Beans",
                "Pima Cotton",
                "Camu Camu Powder",
                "Lucuma Powder",
                "Baby Alpaca Wool - Royal",
                "Baby Alpaca Wool - Baby",
                "Baby Alpaca Wool - Regular",
                "Vicuña Wool",
                "Mixed Shipment",
                "Other / Custom",
              ].map((product) => (
                <label key={product} className="block">
                  <input
                    type="checkbox"
                    name="products"
                    value={product}
                    checked={formData.products.includes(product)}
                    onChange={handleChange}
                  />{" "}
                  {product}
                </label>
              ))}
            </fieldset>
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="details">
              Additional Details
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-[#002b5c] hover:bg-[#001f3f] text-white font-bold px-6 py-3 rounded"
          >
            Submit Quote Request
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-8 text-sm">
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
    </>
  );
}
