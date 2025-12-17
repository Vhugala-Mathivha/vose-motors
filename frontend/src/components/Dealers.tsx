import React from "react";
import { Dealer } from "../types";

interface DealersProps {
  dealers: Dealer[];
  onAction: (dealer: Dealer) => void; // expects dealer object
}

const defaultDealers: Dealer[] = [
  {
    id: 201,
    name: "VOSE Pretoria East",
    location: "Pretoria East, Gauteng",
    rating: 4.8,
    image: "/images/pretoria-dealer.jpg",
    contact: "pretoria@vosemotors.com | +27 12 000 0001",
  },
  {
    id: 202,
    name: "VOSE Sandton",
    location: "Sandton, Johannesburg",
    rating: 4.7,
    image: "/images/sandton-dealer.jpg",
    contact: "sandton@vosemotors.com | +27 11 000 0002",
  },
  {
    id: 203,
    name: "VOSE Cape Waterfront",
    location: "Waterfront, Cape Town",
    rating: 4.9,
    image: "/images/dealer2.jpg",
    contact: "cape@vosemotors.com | +27 21 000 0003",
  },
];

const fallbackDealerImages = defaultDealers.map((d) => d.image);

const Dealers: React.FC<DealersProps> = ({ dealers, onAction }) => {
  const list =
    dealers && dealers.length >= 3
      ? dealers.slice(0, 3).map((dealer, idx) => {
          const useFallback =
            !dealer.image ||
            dealer.image.includes("unsplash") ||
            dealer.image.includes("placeholder");
          const image = useFallback
            ? fallbackDealerImages[idx % fallbackDealerImages.length]
            : dealer.image;
          return { ...dealer, image };
        })
      : [...dealers, ...defaultDealers].slice(0, 3);

  return (
    <section id="dealers" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white">
            Select Dealer
          </h2>
          <p className="text-vose-gray max-w-xl mt-4 md:mt-0">
            Choose from our trusted VOSE partner locations for premium service and delivery.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((dealer) => (
            <article
              key={dealer.id}
              className="bg-vose-black/40 border border-white/5 hover:border-vose-red/40 transition-all shadow-lg hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dealer.image}
                  alt={dealer.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-white font-display text-lg font-semibold">
                  {dealer.name}
                </h3>
                <p className="text-vose-gray text-sm">{dealer.location}</p>
                <div className="text-vose-red font-display text-sm font-bold">
                  Rating: {dealer.rating}
                </div>
                <button
                  onClick={() => onAction(dealer)} // pass dealer object
                  className="mt-3 w-full bg-vose-red text-white font-bold py-2 tracking-wide hover:bg-white hover:text-vose-black transition-colors"
                >
                  Choose Dealer
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dealers;