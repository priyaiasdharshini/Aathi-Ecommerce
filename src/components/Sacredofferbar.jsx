// src/components/SacredOfferBar.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SacredOfferBar = () => {
  const [visible] = useState(true);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  
  const sacredOffers = [
    "🕉️ Limited Time: 15% off on all Rudraksha Malas | Code: DIVINE15",
    "🌟 Buy 2 God Idols, Get 1 Free Puja Kit | Temple Blessed Items",
    "✨ Free Sacred Energization on orders above ₹1999 | Ends Soon",
    "📿 Special Discount on Navaratna Gemstones | Authentic & Certified"
  ];

  const offerText = sacredOffers.join('  •••  ');

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const text = textRef.current;
    let reqId;
    let progress = 0;
    const speed = 1.5;

    const animate = () => {
      progress += speed;
      if (progress >= text.scrollWidth / 2) {
        progress = 0;
      }
      text.style.transform = `translateX(-${progress}px)`;
      reqId = requestAnimationFrame(animate);
    };

    reqId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(reqId);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-r from-[#FDBA74] via-[#FBBF24] to-[#FDE68A] text-[#4B2E05] h-20 md:h-20 flex items-center border-y border-[#FCD34D]/50 shadow-lg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FDBA74]/80 to-transparent"
          animate={{ x: [-20, 400, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FCD34D]/30 to-transparent"
          animate={{ x: [-32, 450, -32] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      {/* Sacred symbols animation */}
      <motion.div
        className="absolute left-4 text-3xl opacity-20"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        ॐ
      </motion.div>

      <motion.div
        className="absolute right-8 text-2xl opacity-20"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -360, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
      >
        ☸️
      </motion.div>

      {/* Main scrolling text */}
      <div className="w-full overflow-hidden">
        <motion.div
          ref={textRef}
          className="whitespace-nowrap text-base md:text-lg font-medium flex items-center py-1 will-change-transform"
          style={{ display: 'inline-flex' }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-6 md:mx-10">
              {offerText}
              <span className="inline-block ml-6 md:ml-10 px-2 py-1 bg-[#FBBF24]/30 rounded-md text-xs md:text-sm text-[#4B2E05]">
                New
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FDE68A]/20 to-transparent"
          animate={{
            backgroundPositionX: ['0%', '100%', '0%']
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default SacredOfferBar;
