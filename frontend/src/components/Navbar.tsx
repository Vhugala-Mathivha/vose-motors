import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "In Stock", to: "/inventory" },
  { label: "Sell", to: "/sell" },
  { label: "Select Dealer", to: "/dealers" },
  { label: "Contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-vose-red text-white font-black px-2 py-1 text-sm rounded-sm">V</span>
          <span className="text-white font-display font-bold text-lg tracking-wide">VOSE MOTORS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-display uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-white/90 hover:text-vose-red transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col justify-center items-center h-10 w-10 gap-1.5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur border-t border-white/5 transition-all duration-200 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-3 text-sm font-display uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-white/90 hover:text-vose-red transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;