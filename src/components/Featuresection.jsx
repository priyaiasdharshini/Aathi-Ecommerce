import React from "react";
import { FaLeaf, FaHandsHelping, FaSpa, FaFeatherAlt, FaRecycle } from "react-icons/fa";

const RunningFeatureBar = () => {
  const features = [
    { icon: <FaLeaf className="text-3xl text-amber-800" />, title: "100% Authentic" },
    { icon: <FaHandsHelping className="text-3xl text-amber-800" />, title: "Locally Sourced" },
    { icon: <FaSpa className="text-3xl text-amber-800" />, title: "Inspired from Yogic Wisdom" },
    { icon: <FaFeatherAlt className="text-3xl text-amber-800" />, title: "Traditional Craftmanship" },
    { icon: <FaRecycle className="text-3xl text-amber-800" />, title: "Eco Friendly Products" },
  ];

  const scrollingItems = [...features, ...features];

  return (
    <div className="w-full bg-amber-50 overflow-hidden">
      <div className="flex gap-10 animate-marquee whitespace-nowrap py-8">
        {scrollingItems.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[140px] text-center transform transition duration-500 hover:scale-110"
          >
            <div
              className="rounded-full w-20 h-20 flex items-center justify-center shadow-lg animate-aura"
              style={{ backgroundColor: "#FDE68A" }}
            >
              <span className="animate-breathe">{feature.icon}</span>
            </div>
            <p className="mt-3 text-sm font-medium text-gray-800">{feature.title}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          /* Marquee movement */
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Default (desktop) speed */
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }

          /* Mobile: slightly faster */
          @media (max-width: 640px) {
            .animate-marquee {
              animation: marquee 14s linear infinite;
            }
          }

          /* Gentle aura glow */
          @keyframes aura {
            0%, 100% { box-shadow: 0 0 8px rgba(253, 230, 138, 0.6), 0 0 20px rgba(253, 230, 138, 0.4); }
            50% { box-shadow: 0 0 14px rgba(253, 230, 138, 0.9), 0 0 28px rgba(253, 230, 138, 0.7); }
          }
          .animate-aura {
            animation: aura 4s ease-in-out infinite;
          }

          /* Breathing animation */
          @keyframes breathe {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.08) rotate(3deg); }
          }
          .animate-breathe {
            animation: breathe 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default RunningFeatureBar;
