import React from "react";
import { Car } from "../types";

interface InStockProps {
  cars: Car[];
  onCarClick: (car: Car) => void;
  onBookingClick: () => void;
}

const defaultCars: Car[] = [
  {
    id: 101,
    name: "2024 VOSE Phantom Edition",
    year: 2024,
    price: "R 89,900",
    image: "/images/instack2.jpg",
  } as Car,
  {
    id: 102,
    name: "2023 VOSE Midnight GT",
    year: 2023,
    price: "R 74,500",
    image: "/images/instack4.jpg",
  } as Car,
  {
    id: 103,
    name: "2022 VOSE Carbon S",
    year: 2022,
    price: "R 62,000",
    image: "/images/bg.jpg",
  } as Car,
  {
    id: 104,
    name: "2021 VOSE Apex R",
    year: 2021,
    price: "R 55,900",
    image: "/images/instock1.jpg",
  } as Car,
];

const fallbackImages = defaultCars.map((c) => c.image);

const InStock: React.FC<InStockProps> = ({ cars, onCarClick, onBookingClick }) => {
  const list =
    cars && cars.length >= 4
      ? cars.slice(0, 4).map((car, idx) => {
          const useFallback =
            !car.image ||
            car.image.includes("unsplash") ||
            car.image.includes("placeholder");
          const image = useFallback
            ? fallbackImages[idx % fallbackImages.length]
            : car.image;
          return { ...car, image };
        })
      : [...cars, ...defaultCars].slice(0, 4);

  return (
    <section id="in-stock" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white">
            Find My Car
          </h2>
          <p className="text-vose-gray max-w-xl mt-4 md:mt-0">
            Discover our curated collection of elite performance and luxury vehicles, inspected and ready for the road.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((car) => (
            <article
              key={car.id}
              className="bg-vose-black/40 border border-white/5 hover:border-vose-red/40 transition-all shadow-lg hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-56 object-cover"
                  onClick={() => onCarClick(car)}
                />
                <span className="absolute top-3 left-3 bg-vose-red text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wide">
                  {car.year} New
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-white font-display text-lg font-semibold">{car.name}</h3>
                <p className="text-vose-gray text-sm">Performance & Luxury</p>
                <div className="text-vose-red font-display text-xl font-bold">{car.price}</div>
                <button
                  onClick={onBookingClick}
                  className="mt-3 w-full bg-vose-red text-white font-bold py-2 tracking-wide hover:bg-white hover:text-vose-black transition-colors"
                >
                  Book a Test Drive
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InStock;