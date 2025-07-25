import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    products: [],
    details: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "products") {
      const updatedProducts = [...formData.products];
      if (checked) {
        updatedProducts.push(value);
      } else {
        const index = updatedProducts.indexOf(value);
        if (index > -1) updatedProducts.splice(index, 1);
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
        setFormData({
          name: "",
          email: "",
          company: "",
          products: [],
          details: "",
        });
      } else {
        alert("❌ There was an error: " + data.error);
      }
    } catch (error) {
      alert("❌ Network error: " + error.message);
    }
  };

  const productOptions = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
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
            src="/images/jendyco-logo2.png"
            alt="Jendyco Logo"
            className="w-40 h-auto drop-shadow-[0_0_8px_white]"
          />
        </div>
      </div>

      <div className="pt-52 px-6 md:px-40 py-16 bg-white">
        <div className="flex justify-center mb-10">
          <img
            src="/images/jendyco-logo2.png"
            alt="Jendyco Logo Feature"
            className="w-32 h-auto drop-shadow-[0_0_8px_#002b5c]"
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-[#002b5c] mb-10">Request a Quote</h1>
        <p className="text-center text-gray-700 max-w-xl mx-auto mb-12">
          Share your needs for coffee, cacao, alpaca, or Peruvian exports. We’ll get back to you within 24–48 hours with a customized quote.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800"
        >
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">Products of Interest</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white p-3 border border-gray-300 rounded max-h-64 overflow-y-auto">
              {productOptions.map((product) => (
                <label key={product} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    name="products"
                    value={product}
                    checked={formData.products.includes(product)}
                    onChange={handleChange}
                    className="accent-orange-500"
                  />
                  <span>{product}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">Additional Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="5"
              className="p-3 rounded border border-gray-300"
              placeholder="Volume, timeline, delivery port, certifications needed..."
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-[#ff6f00] hover:bg-orange-600 text-white font-bold px-8 py-3 rounded shadow transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>

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
