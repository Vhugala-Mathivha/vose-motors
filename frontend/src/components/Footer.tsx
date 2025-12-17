import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-vose-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-vose-red flex items-center justify-center rounded-sm rotate-45">
              <span className="text-white font-display font-bold text-sm -rotate-45">V</span>
            </div>
            <span className="text-white font-display font-bold text-xl tracking-tighter">
              VOSE <span className="text-vose-red">MOTORS</span>
            </span>
          </div>

          <div className="flex space-x-8 text-vose-gray text-sm">
            <a href="#" className="hover:text-vose-red transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-vose-red transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-vose-red transition-colors">COOKIE POLICY</a>
          </div>

          <div className="text-vose-gray text-xs">
            © {new Date().getFullYear()} VOSE MOTORS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;