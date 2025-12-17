import React, { useState } from "react";

interface Props {
  onSellLead: (p: { message: string; contact?: string }) => Promise<void>;
}

const SellPage: React.FC<Props> = ({ onSellLead }) => {
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("I want to sell my car.");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await onSellLead({ message, contact });
    setSubmitting(false);
  };

  return (
    <main className="pt-10 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-4">
        Sell Your Car
      </h1>
      <p className="text-vose-gray mb-6">
        Get an instant quote. We’ll reach out to finalize details.
      </p>
      <form onSubmit={submit} className="space-y-4 bg-vose-black/40 p-6 border border-white/5">
        <input
          className="w-full bg-black/40 border border-white/10 px-4 py-2 text-white"
          placeholder="Your contact (email or phone)"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <textarea
          className="w-full bg-black/40 border border-white/10 px-4 py-2 text-white min-h-[120px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-vose-red text-white font-bold px-6 py-2 uppercase tracking-wide hover:bg-white hover:text-vose-black transition"
        >
          {submitting ? "Sending..." : "Send Sell Request"}
        </button>
      </form>
    </main>
  );
};

export default SellPage;