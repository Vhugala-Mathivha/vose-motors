import React from "react";
import Hero from "../components/Hero";
import InStock from "../components/InStock";
import SellSection from "../components/SellSection";
import Dealers from "../components/Dealers";
import Contact from "../components/Contact";
import { Car, Dealer } from "../types";

interface Props {
  cars: Car[];
  dealers: Dealer[];
  onCarClick: (car: Car) => void;
  onBookingClick: () => void;
  onSellLead: (p: { message: string; contact?: string }) => Promise<void>;
  onContactLead: (p: { message: string; contact?: string }) => Promise<void>;
  onDealerAction: (dealer: Dealer) => void;
}

const HomePage: React.FC<Props> = ({
  cars,
  dealers,
  onCarClick,
  onBookingClick,
  onSellLead,
  onContactLead,
  onDealerAction,
}) => {
  return (
    <>
      <Hero />
      <InStock cars={cars} onCarClick={onCarClick} onBookingClick={onBookingClick} />
      <SellSection onSellClick={() => onSellLead({ message: "Sell my car inquiry" })} />
      <Dealers dealers={dealers} onAction={onDealerAction} />
      <Contact onContact={() => onContactLead({ message: "General contact inquiry" })} />
    </>
  );
};

export default HomePage;