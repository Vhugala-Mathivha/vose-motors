import React from "react";
import Dealers from "../components/Dealers";
import { Dealer } from "../types";

interface Props {
  dealers: Dealer[];
  onDealerAction: (dealer: Dealer) => void;
}

const DealerPage: React.FC<Props> = ({ dealers, onDealerAction }) => (
  <main className="pt-10">
    <div className="max-w-7xl mx-auto px-6 mb-6">
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white">
        Select Dealer
      </h1>
      <p className="text-vose-gray mt-2">Choose a VOSE partner location.</p>
    </div>
    <Dealers dealers={dealers} onAction={onDealerAction} />
  </main>
);

export default DealerPage;