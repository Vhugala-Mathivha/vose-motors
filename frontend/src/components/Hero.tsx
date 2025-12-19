import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(true);

  useEffect(() => {
    let idleTimer: number;
    const handleMouseMove = (e: MouseEvent) => {
      setIsIdle(false);
      clearTimeout(idleTimer);
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * -15;
      setMousePos({ x, y });
      idleTimer = window.setTimeout(() => setIsIdle(true), 2500);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleTimer);
    };
  }, []);

  const carTransform = isIdle
    ? undefined
    : `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg) scale(1.2)`;
  const overlayTransform = isIdle
    ? undefined
    : `rotateY(${mousePos.x * 1.8}deg) rotateX(${mousePos.y * 1.8}deg) translateZ(80px)`;

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-vose-black flex items-center justify-center perspective-container"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center" style={{ perspective: "2000px" }}>
        <div
          className={`relative w-[115%] h-[115%] bg-cover bg-center transition-all duration-700 ease-out ${
            isIdle ? "animate-vose-3d-idle" : ""
          }`}
          style={{
            backgroundImage: 'url("/images/one.jpg")',
            transform: carTransform,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-vose-black via-transparent to-vose-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-vose-red/10 mix-blend-overlay" />
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
            style={{
              opacity: isIdle ? 0.2 : 0.7,
              background: `radial-gradient(circle at ${50 + mousePos.x}% ${
                50 - mousePos.y
              }%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
            }}
          />
          <div
            className={`absolute inset-0 z-10 pointer-events-none transition-all duration-700 ease-out ${
              isIdle ? "animate-vose-overlay-idle" : ""
            }`}
            style={{ transform: overlayTransform, transformStyle: "preserve-3d" }}
          >
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-vose-red/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-vose-red/30 to-transparent animate-vose-glimmer-1" />
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-vose-glimmer-2" />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 pointer-events-none">
        <h2 className="text-vose-red font-display text-xs md:text-lg font-bold tracking-[0.6em] mb-4 opacity-0 animate-[vose-fade-in_1.5s_ease-out_forwards]">
          DRIVE THE EXTRAORDINARY
        </h2>
        <h1 className="text-white font-display text-6xl md:text-9xl font-extrabold mb-8 leading-none tracking-tighter opacity-0 animate-[vose-fade-down_1s_ease-out_0.5s_forwards] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          VOSE MOTORS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-[vose-fade-up_1s_ease-out_1s_forwards] pointer-events-auto">
          <Link
            to="/inventory"
            className="group relative px-12 py-4 bg-vose-red text-white font-bold tracking-widest overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">BROWSE INVENTORY</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="absolute inset-0 flex items-center justify-center text-vose-black font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              BROWSE INVENTORY
            </span>
          </Link>
          <a
            href="#sell"
            className="px-12 py-4 border border-white/20 backdrop-blur-md text-white font-bold tracking-widest hover:border-vose-red transition-all transform hover:scale-105"
          >
            SELL YOUR CAR
          </a>
        </div>
      </div>

      <style>{`
        @keyframes vose-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes vose-fade-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes vose-fade-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes vose-3d-idle {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg) scale(1.15); }
          25% { transform: rotateY(5deg) rotateX(2deg) scale(1.18); }
          50% { transform: rotateY(-3deg) rotateX(-4deg) scale(1.15); }
          75% { transform: rotateY(2deg) rotateX(3deg) scale(1.18); }
        }
        @keyframes vose-overlay-idle {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg) translateZ(80px); }
          25% { transform: rotateY(8deg) rotateX(4deg) translateZ(100px); }
          50% { transform: rotateY(-5deg) rotateX(-6deg) translateZ(80px); }
          75% { transform: rotateY(4deg) rotateX(5deg) translateZ(100px); }
        }
        @keyframes vose-glimmer-1 {
          0% { transform: translateX(-150%) skewX(-45deg); opacity: 0; }
          20% { opacity: 0.6; }
          40% { transform: translateX(150%) skewX(-45deg); opacity: 0; }
          100% { transform: translateX(150%) skewX(-45deg); opacity: 0; }
        }
        @keyframes vose-glimmer-2 {
          0% { transform: translateX(150%) skewX(45deg); opacity: 0; }
          50% { opacity: 0; }
          70% { opacity: 0.4; }
          90% { transform: translateX(-150%) skewX(45deg); opacity: 0; }
          100% { transform: translateX(-150%) skewX(45deg); opacity: 0; }
        }
        .animate-vose-3d-idle { animation: vose-3d-idle 15s infinite ease-in-out; }
        .animate-vose-overlay-idle { animation: vose-overlay-idle 15s infinite ease-in-out; }
        .animate-vose-glimmer-1 { animation: vose-glimmer-1 12s infinite linear; }
        .animate-vose-glimmer-2 { animation: vose-glimmer-2 18s infinite linear; }
      `}</style>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] text-white/40 tracking-[0.4em] font-bold mb-4 uppercase">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-vose-red via-vose-red/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;