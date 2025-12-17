import React from 'react';

interface ContactProps {
  onContact?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onContact }) => {
  return (
    <section id="contact" className="bg-vose-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 items-center">
        <div className="space-y-10">
          <div>
            <span className="text-vose-red font-display font-bold tracking-widest text-sm uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
              CONTACT US
            </h2>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center border border-vose-red/50 text-vose-red">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-vose-gray text-[11px] font-bold tracking-widest uppercase mb-1">Email Address</p>
                <p className="text-lg font-bold">info@vosemotors.co.za</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center border border-vose-red/50 text-vose-red">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-vose-gray text-[11px] font-bold tracking-widest uppercase mb-1">Phone Number</p>
                <p className="text-lg font-bold">+27 (012) 555-VOSE</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center border border-vose-red/50 text-vose-red">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-vose-gray text-[11px] font-bold tracking-widest uppercase mb-1">Main Location</p>
                <p className="text-lg font-bold leading-snug">
                  100 Luxury Lane, Pretoria East, Gauteng, South Africa
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onContact}
            className="px-8 py-3 bg-vose-red text-white font-bold tracking-widest uppercase hover:bg-red-600 transition-all"
          >
            Send Message
          </button>
        </div>

        <div className="relative h-[360px] lg:h-[420px]">
          <div className="absolute inset-0 bg-[url('https://your-hosted-url/contact-map.jpg')] bg-cover bg-center grayscale contrast-125 opacity-90" />
          <div className="absolute bottom-[32%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-2">
            <div className="bg-vose-red text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-vose-red/40 whitespace-nowrap">
              SOUTH AFRICA HQ
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-vose-red/40 rounded-full animate-ping absolute -top-2 -left-2" />
              <div className="w-6 h-6 bg-vose-red rounded-full relative z-10 border-4 border-white shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;