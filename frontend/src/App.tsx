import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api";
import { Car, Dealer } from "./types";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import DealerPage from "./pages/DealersPage";
import SellPage from "./pages/SellPage";
import ContactPage from "./pages/ContactPage";

const DealerEmailPrompt: React.FC<{
  dealer: Dealer;
  onDone: (email: string) => void;
}> = ({ dealer, onDone }) => {
  const [email, setEmail] = useState("");
  return (
    <div className="text-black space-y-3">
      <p className="font-semibold">
        Thank you, {dealer.name} will get in touch. Leave your email address with us:
      </p>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          onDone(email);
        }}
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full text-white font-bold py-2 rounded shadow-md
                     bg-gradient-to-r from-[#d43232] to-black hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [carsRes, dealersRes] = await Promise.all([
          api.get<Car[]>("/cars/"),
          api.get<Dealer[]>("/dealers/"),
        ]);
        setCars(carsRes.data);
        setDealers(dealersRes.data);
      } catch (err) {
        console.error("Failed to load data", err);
      }
    };
    load();
  }, []);

  const openMessage = (title: string, body: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(<div className="text-black">{body}</div>);
    setModalOpen(true);
  };

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    openMessage("Vehicle Selected", `You selected ${car.name}.`);
  };

  // Updated: show service unavailable message instead of posting a lead
  const handleBookingClick = () => {
    openMessage("Service currently not available", "Please check back later.");
  };

  const handleSellLead = async (payload: { message: string; contact?: string }) => {
    await api.post("/leads/", {
      lead_type: "sell",
      message: payload.message,
      contact: payload.contact ?? "",
    });
    openMessage("Sell Request Sent", "We received your sell inquiry.");
  };

  const handleContactLead = async (payload: { message: string; contact?: string }) => {
    await api.post("/leads/", {
      lead_type: "contact",
      message: payload.message,
      contact: payload.contact ?? "",
    });
    openMessage("Thank you", "We received your message.");
  };

  const handleDealerAction = (dealer: Dealer) => {
    setModalTitle("Dealer");
    setModalContent(
      <DealerEmailPrompt
        dealer={dealer}
        onDone={(email) =>
          openMessage("Dealer", `Thanks! ${dealer.name} will reach out to ${email || "your email"}.`)
        }
      />
    );
    setModalOpen(true);
  };

  return (
    <Router>
      <div className="bg-vose-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                cars={cars}
                dealers={dealers}
                onCarClick={handleCarClick}
                onBookingClick={handleBookingClick}
                onSellLead={handleSellLead}
                onContactLead={handleContactLead}
                onDealerAction={handleDealerAction}
              />
            }
          />
          <Route
            path="/inventory"
            element={
              <InventoryPage
                cars={cars}
                onCarClick={handleCarClick}
                onBookingClick={handleBookingClick}
              />
            }
          />
          <Route
            path="/dealers"
            element={<DealerPage dealers={dealers} onDealerAction={handleDealerAction} />}
          />
          <Route path="/sell" element={<SellPage onSellLead={handleSellLead} />} />
          <Route path="/contact" element={<ContactPage onContactLead={handleContactLead} />} />
        </Routes>
        <Footer />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
          {modalContent}
        </Modal>
      </div>
    </Router>
  );
};

export default App;