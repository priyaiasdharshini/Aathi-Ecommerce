// src/components/HeroSection.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "SACRED RUDRAKSHA",
      description: "Blessed beads for divine protection",
      image: "/images/rudraksha-banner.jpg",
      link: "/rudraksha",
      color: "from-amber-600 to-amber-800"
    },
    {
      title: "PURE SANDALWOOD",
      description: "Natural fragrance for spiritual growth",
      image: "/images/sandalwood-banner.jpg",
      link: "/sandalwood",
      color: "from-green-600 to-green-800"
    },
    {
      title: "AUTHENTIC GEMSTONES",
      description: "Energized crystals for cosmic balance",
      image: "/images/gemstone-banner.jpg",
      link: "/gemstones",
      color: "from-purple-600 to-purple-800"
    }
  ];

  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[400px] md:h-[500px]">
      {/* Animated Background Banners */}
      {banners.map((banner, index) => (
        <div 
          key={banner.title}
          className={`absolute inset-0 bg-gradient-to-r ${banner.color} transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          {/* Floating Om Symbol Animation */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="text-white text-6xl opacity-20">ॐ</div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-float-delay">
            <div className="text-white text-6xl opacity-20">ॐ</div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          {banners[currentBanner].title}
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 mb-8 animate-fade-in-delay">
          {banners[currentBanner].description}
        </p>
        <Link 
          to={banners[currentBanner].link}
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 animate-bounce-in shadow-lg"
        >
          SHOP NOW ►
        </Link>
      </div>

      {/* Banner Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentBanner ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>

      {/* Add these to your Tailwind config */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
        .animate-bounce-in { animation: bounce-in 0.8s ease-out 0.6s both; }
      `}</style>
    </div>
  );
};

export default HeroSection;