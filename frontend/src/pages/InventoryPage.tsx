import React from "react";
import InStock from "../components/InStock";
import { Car } from "../types";

interface Props {
  cars: Car[];
  onCarClick: (car: Car) => void;
  onBookingClick: () => void;
}

const InventoryPage: React.FC<Props> = ({ cars, onCarClick, onBookingClick }) => (
  <main className="pt-10">
    <div className="max-w-7xl mx-auto px-6 mb-6">
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white">
        Browse Inventory
      </h1>
      <p className="text-vose-gray mt-2">Select a vehicle and book a test drive.</p>
    </div>
    <InStock cars={cars} onCarClick={onCarClick} onBookingClick={onBookingClick} maxCards={12} />
  </main>
);

export default InventoryPage;