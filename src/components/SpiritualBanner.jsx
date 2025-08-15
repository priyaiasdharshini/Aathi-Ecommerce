import React from "react";
import { motion } from "framer-motion";
import { FaOm, FaSpa, FaLeaf } from "react-icons/fa";

const SpiritualBanner = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-amber-50">
      {/* Background Image with Panning Animation */}
      <motion.div
        initial={{ scale: 1.2, x: "-5%" }}
        animate={{ scale: 1, x: "0%" }}
        transition={{ duration: 12, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img
          src="\public\sample.jpg"
          alt="Spiritual Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Light Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/40 to-amber-50/80"></div>

      {/* Floating Icons */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-16 left-10 text-amber-700 text-5xl"
      >
        <FaOm />
      </motion.div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [-15, 0, -15], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 right-14 text-amber-700 text-5xl"
      >
        <FaSpa />
      </motion.div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [-10, 0, -10], opacity: [0.4, 0.9, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 text-amber-700 text-5xl"
      >
        <FaLeaf />
      </motion.div>

      {/* Banner Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-6xl font-bold text-amber-900 drop-shadow-lg"
        >
          Embrace Spiritual Wellness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-amber-800 max-w-xl"
        >
          Discover peace, harmony, and balance through our sacred collection.
        </motion.p>
      </div>
    </div>
  );
};

export default SpiritualBanner;
