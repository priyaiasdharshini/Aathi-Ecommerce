// src/components/SpiritualStore.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const SpiritualStore = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Updated color palette to match Home.jsx
  const colors = {
    base: {
      cream: 'bg-[#FFF9E6]', // Main page background
      lightCream: 'bg-[#FFF6E1]', // Card backgrounds
    },
    amber: {
      light: 'bg-[#FDE68A]',
      medium: 'bg-[#FDBA74]',
      dark: 'bg-[#F59E0B]',
    },
    green: {
      medium: 'bg-[#16A34A]',
    },
    text: {
      dark: 'text-[#78350F]',
      medium: 'text-[#A16207]',
    },
    border: {
      amber: 'border-[#FCD34D]',
    }
  };

  const sacredFeatures = [
    {
      icon: '🕉️',
      title: 'Sanctified Items',
      description: 'Puja-blessed spiritual tools',
      bg: `bg-gradient-to-br from-[#FDBA74] to-[#FDE68A]`
    },
    {
      icon: '📿',
      title: 'Divine Energy',
      description: 'Energized by Vedic rituals',
      bg: `${colors.base.lightCream} border ${colors.border.amber}`
    },
    {
      icon: '🪔',
      title: 'Sacred Fire',
      description: 'Homa-consecrated objects',
      bg: `bg-gradient-to-br from-[#F59E0B] to-[#D97706]`
    },
    {
      icon: '🌿',
      title: 'Holy Herbs',
      description: 'Tulsi, Bilva & Vedic plants',
      bg: `bg-gradient-to-br from-[#16A34A] to-[#15803D]`
    }
  ];

  const sacredCategories = [
    'Rudraksha Beads', 'Yantras', 'Vedic Idols', 
    'Puja Kits', 'God Idols', 'Mala Strings',
    'Sacred Scriptures', 'Temple Bells', 'Consecrated Jewelry',
    'Divine Incense', 'Murti Vigrahas'
  ];

  const newSacredArrivals = [
    'Shiva Lingams', 'Murugan Vel', 'Narmada Shilas',
    'Saligram Stones', 'Sphatik Items', 'Gemstone Talismans',
    'Sacred Threads', 'Divya Aushadhis', 'Mantra-Infused Items'
  ];

  return (
    <div className={`relative overflow-hidden py-16 ${colors.base.cream}`}>
      {/* Floating Divine Symbols */}
      <motion.div 
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, -5, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-6xl text-[#FDBA74]/20"
      >
        ॐ
      </motion.div>
      
      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 text-7xl text-[#16A34A]/20"
      >
        ✸
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Title & Categories */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.h2 
            animate={{
              textShadow: ["0 0 8px rgba(245, 158, 11, 0.2)", "0 0 12px rgba(245, 158, 11, 0.3)", "0 0 8px rgba(245, 158, 11, 0.2)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`text-4xl md:text-5xl font-bold ${colors.text.dark} mb-6 font-serif`}
          >
            Divine Sanctified Collections
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {sacredCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(253, 186, 116, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 ${colors.base.lightCream} shadow-md text-sm font-medium ${colors.text.medium} border ${colors.border.amber} cursor-pointer hover:border-amber-200 transition-all`}
              >
                {category}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sacred Features */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.2 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sacredFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.2)' }}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
              className={`${feature.bg} p-6 rounded-xl shadow-lg text-center ${feature.bg.includes('gradient') ? '' : `border ${colors.border.amber}`}`}
            >
              <motion.div
                animate={{ scale: hoveredItem === index ? [1, 1.2, 1] : 1, rotate: hoveredItem === index ? [0, 15, -15, 0] : 0 }}
                transition={{ duration: 1.5, repeat: hoveredItem === index ? Infinity : 0 }}
                className="text-6xl mb-5"
              >
                {feature.icon}
              </motion.div>
              <h3 className={`text-xl font-bold ${feature.bg.includes('gradient') ? 'text-white' : colors.text.dark} mb-2`}>
                {feature.title}
              </h3>
              <p className={feature.bg.includes('gradient') ? 'text-[#FFF9E6]' : colors.text.medium}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* New Sacred Arrivals */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className={`${colors.base.lightCream} p-8 rounded-2xl border ${colors.border.amber} shadow-sm`}>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <motion.h3 
                animate={{ textShadow: ["0 0 5px rgba(245, 158, 11, 0.1)", "0 0 10px rgba(245, 158, 11, 0.2)", "0 0 5px rgba(245, 158, 11, 0.1)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`text-2xl font-bold ${colors.text.dark} font-serif`}
              >
                New Sacred Arrivals
              </motion.h3>
              <p className={`${colors.text.medium}`}>Blessed by temple priests</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#D97706' }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 ${colors.amber.dark} text-white rounded-lg font-medium shadow-md hover:shadow-amber-500/20 transition-all flex items-center gap-2`}
            >
              View All
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                →
              </motion.span>
            </motion.button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newSacredArrivals.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: 'rgba(253, 186, 116, 0.2)' }}
                className={`${colors.base.lightCream} p-4 rounded-lg shadow-sm text-center cursor-pointer hover:shadow-md transition-all border ${colors.border.amber}`}
              >
                <div className={`w-12 h-12 ${colors.amber.light} rounded-full flex items-center justify-center mb-3 text-2xl mx-auto`}>
                  {index % 3 === 0 ? '🪔' : index % 3 === 1 ? '📿' : '🕉️'}
                </div>
                <p className={`text-sm font-medium ${colors.text.dark}`}>{item}</p>
                <motion.div whileHover={{ scale: 1.1 }} className={`mt-2 text-xs ${colors.text.medium}`}>
                  View Details
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divine Promise */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-16 text-center">
          <motion.div animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity }} className="text-6xl mb-4 text-[#F59E0B]">
            ॐ
          </motion.div>
          <h3 className={`text-2xl font-bold ${colors.text.dark} mb-4 font-serif`}>Our Divine Promise</h3>
          <p className={`${colors.text.medium} max-w-3xl mx-auto mb-6`}>
            Every item in our store is sanctified through ancient Vedic rituals, 
            ensuring divine energy flows through each spiritual product to enhance 
            your sacred practices.
          </p>
          <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)' }} whileTap={{ scale: 0.95 }} className={`px-8 py-3 ${colors.amber.dark} text-white rounded-full font-medium shadow-lg transition-all`}>
            Learn Sanctification Process
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SpiritualStore;
