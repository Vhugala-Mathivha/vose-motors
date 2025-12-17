import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-vose-red text-white font-black px-2 py-1 text-sm">V</span>
          <span className="text-white font-display font-bold text-lg">VOSE MOTORS</span>
        </Link>
        <div className="flex gap-6 text-sm font-display uppercase tracking-wide">
          <Link to="/" className="hover:text-vose-red">Home</Link>
          <Link to="/inventory" className="hover:text-vose-red">In Stock</Link>
          <Link to="/sell" className="hover:text-vose-red">Sell</Link>
          <Link to="/dealers" className="hover:text-vose-red">Select Dealer</Link>
          <Link to="/contact" className="hover:text-vose-red">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;