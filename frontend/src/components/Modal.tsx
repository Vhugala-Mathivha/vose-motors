import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-vose-black/80 backdrop-blur-sm animate-[vose-fade-in_0.3s_ease-out]"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-2xl shadow-2xl animate-[vose-scale-up_0.3s_ease-out] overflow-hidden">
        <div className="bg-vose-black px-6 py-4 flex justify-between items-center border-b border-white/10">
          <h3 className="text-white font-display font-bold tracking-widest uppercase text-sm">{title}</h3>
          <button onClick={onClose} className="text-white hover:text-vose-red transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
      <style>{`
        @keyframes vose-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes vose-scale-up { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default Modal;