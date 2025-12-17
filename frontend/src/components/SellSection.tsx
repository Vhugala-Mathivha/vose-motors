import React from "react";

interface SellSectionProps {
  onSellClick: () => void;
}

const SellSection: React.FC<SellSectionProps> = ({ onSellClick }) => {
  return (
    <section
      id="sell"
      className="relative overflow-hidden bg-[#f3f5f8] py-16 md:py-20 lg:py-24"
    >
      {/* angled accent on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[#f4eaed] skew-x-[-12deg] translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="inline-block px-4 py-1 bg-[#d43232] text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-sm shadow-sm">
          Instant Quote
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-[38px] font-black uppercase tracking-wide text-[#151515]">
          <span className="mr-2">Sell Your Car</span>
          <span className="text-[#d43232]">Today, Now!</span>
        </h2>

        <p className="text-[15px] md:text-base text-[#4f5a63] max-w-2xl mx-auto leading-relaxed">
          We offer the most competitive market prices for high-end vehicles. Get an
          evaluation in minutes and cash in hours.
        </p>

        <div>
          <button
            onClick={onSellClick}
            className="px-10 py-3 bg-black text-white font-bold tracking-[0.2em] uppercase shadow-lg hover:shadow-xl hover:-translate-y-[1px] transition-all duration-150"
          >
            Sell
          </button>
        </div>
      </div>
    </section>
  );
};

export default SellSection;