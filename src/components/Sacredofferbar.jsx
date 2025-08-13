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

    const container = containerRef.current;
    const text = textRef.current;
    let reqId;
    let progress = 0;
    const speed = 1.5; // Slower speed for better readability

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
      className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white h-20 md:h-20 flex items-center border-y border-amber-400/30 shadow-lg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-amber-600/80 to-transparent"
          animate={{ x: [-20, 400, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-amber-500/30 to-transparent"
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
          className="whitespace-nowrap text-base md:text-lg font-medium flex items-center py-1 will-change-transform" //text size
          style={{ display: 'inline-flex' }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-6 md:mx-10">
              {offerText}
              <span className="inline-block ml-6 md:ml-10 px-2 py-1 bg-amber-500/20 rounded-md text-xs md:text-sm">
                New
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent"
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