// src/components/Header.jsx
import { Search, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = ({cartItems}) => {
  const [showOffer, setShowOffer] = useState(true);
  const [cartCount, setCartCount] = useState(0)
  const [currentOffer, setCurrentOffer] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const offers = [
    "🌟 Free Shipping on Orders Over $50",
    "🕉️ Special 10% Off on Rudraksha Malas",
    "✨ Buy 2 Get 1 Free on Gemstones",
    "🙏 Extra 15% Off for First-Time Buyers"
  ];

  useEffect(()=>{
    setCartCount(cartItems.length)
  },[cartItems])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setShowMobileSearch(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate offers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee:hover { animation-play-state: paused; }
        @media (max-width: 480px) {
          .offer-text { font-size: 11px; }
        }
      `}</style>

      {/* Offer Bar */}
      {showOffer && (!isMobile || !showMobileSearch) && (
        <div style={{
          background: 'linear-gradient(to right, #d97706, #92400e)',
          color: 'white',
          padding: '6px 12px',
          overflow: 'hidden',
          fontSize: isMobile ? '12px' : '14px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ 
              flex: 1, 
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}>
              <div 
                className="marquee"
                style={{
                  display: 'inline-block',
                  animation: 'marquee 20s linear infinite',
                  paddingRight: '100%'
                }}
              >
                {offers.map((offer, index) => (
                  <span 
                    key={index}
                    className="offer-text"
                    style={{
                      marginRight: isMobile ? '24px' : '32px',
                      display: 'inline-block',
                      transition: 'all 0.5s',
                      fontWeight: index === currentOffer ? 'bold' : 'normal',
                      transform: index === currentOffer ? 'scale(1.05)' : 'scale(1)',
                      opacity: index === currentOffer ? 1 : 0.7
                    }}
                  >
                    {offer}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={() => setShowOffer(false)}
              style={{
                marginLeft: '8px',
                padding: '2px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo - Always visible */}
          <Link 
            to="/" 
            style={{
              fontSize: isMobile ? '18px' : '22px',
              fontWeight: 'bold',
              color: '#92400e',
              textDecoration: 'none',
              flexShrink: 0,
              marginRight: '12px'
            }}
          >
            AATHILIFE
          </Link>

          {/* Search Bar - Desktop */}
          {!isMobile && (
            <div style={{
              flex: 1,
              maxWidth: '500px',
              margin: '0 12px',
              position: 'relative'
            }}>
              <input
                type="text"
                placeholder="Search spiritual products..."
                style={{
                  width: '100%',
                  padding: '8px 32px 8px 12px',
                  fontSize: '14px',
                  border: '1px solid #d1d5db',
                  borderRadius: '20px',
                  outline: 'none'
                }}
              />
              <Search 
                size={16} 
                color="#6b7280"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            </div>
          )}

          {/* Mobile Search Toggle */}
          {isMobile && (
            <button 
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              style={{
                marginLeft: 'auto',
                padding: '6px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Search size={20} color="#4b5563" />
            </button>
          )}

          {/* Cart Icon - Always visible */}
          <Link 
            to="/cart" 
            style={{
              marginLeft: isMobile ? '8px' : '12px',
              padding: '6px',
              position: 'relative',
              display: 'flex'
            }}
          >
            <ShoppingCart size={20} color="#4b5563" />
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              backgroundColor: '#d97706',
              color: 'white',
              fontSize: '10px',
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {cartCount}
            </span>
          </Link>
        </div>

        {/* Mobile Search Panel */}
        {isMobile && showMobileSearch && (
          <div style={{
            padding: '8px 12px 12px',
            width: '100%',
            backgroundColor: '#f9fafb'
          }}>
            <div style={{ 
              position: 'relative',
              width: '100%'
            }}>
              <input
                type="text"
                placeholder="Search sacred items..."
                style={{
                  width: '100%',
                  padding: '8px 32px 8px 12px',
                  fontSize: '14px',
                  border: '1px solid #d1d5db',
                  borderRadius: '20px',
                  backgroundColor: 'white'
                }}
              />
              <Search 
                size={16} 
                color="#6b7280"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;