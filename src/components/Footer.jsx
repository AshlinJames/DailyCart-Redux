import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
     <footer className="bg-purple-900 text-white py-10 px-6 mt-5">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <i className="fa-solid fa-truck-fast"></i> Daily Cart
          </h2>
          <p className="mt-3 text-sm leading-6">
            Designed and built with all the love in the world by the Luminar team
            with the help of our contributors.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home Page</Link></li>
            <li><Link to="/wishlist" className="hover:underline">Wishlist Page</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart Page</Link></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Guides</h3>
          <ul className="space-y-2">
            <li><a href="https://react.dev/" className="hover:underline">React</a></li>
            <li><a href="https://react-bootstrap.netlify.app/" className="hover:underline">React Bootstrap</a></li>
            <li><a href="https://reactrouter.com/" className="hover:underline">React Router</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-2 rounded-l-lg w-full bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-4 rounded-r-lg hover:bg-gray-200 transition"
            >
              →
            </button>
          </form>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-200"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm border-t border-purple-400 pt-4">
        © 2025 Daily Cart | Built with React & Redux by <span className="font-semibold">Ashlin James</span>.
      </div>
    </footer>
  );
}

export default Footer;
