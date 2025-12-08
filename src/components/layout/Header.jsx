 import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Animated Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>
      <div className="bubble bubble-6"></div>
      <div className="bubble bubble-7"></div>
      <div className="bubble bubble-8"></div>
      
      <div className="header-content">
        <h1>Blog</h1>
       </div>

      <style jsx>{`
        .header {
          text-align: center;
          margin-bottom: 40px;
          padding: 60px 20px;
          background: #fb6d55;
          color: white;
          border-radius: 16px;
          margin: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 40px  #fb6d55;
        }

        .header-content {
          position: relative;
          z-index: 2;
        }

        .header-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
        }

        .header-content p {
          font-size: 1.3rem;
          opacity: 0.95;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .header-content h1 {
            font-size: 2.5rem;
          }
          
          .header {
            margin: 15px;
            padding: 40px 20px;
          }

          .header-content p {
            font-size: 1.1rem;
          }

          /* Smaller bubbles on mobile */
          .bubble-1, .bubble-2, .bubble-3, 
          .bubble-4, .bubble-5, .bubble-6,
          .bubble-7, .bubble-8 {
            transform: scale(0.7);
          }
        }

        @media (max-width: 480px) {
          .header-content h1 {
            font-size: 2rem;
          }

          .header {
            margin: 10px;
            padding: 30px 15px;
          }

          .header-content p {
            font-size: 1rem;
          }

          /* Even smaller bubbles on very small screens */
          .bubble-1, .bubble-2, .bubble-3, 
          .bubble-4, .bubble-5, .bubble-6,
          .bubble-7, .bubble-8 {
            transform: scale(0.5);
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .bubble {
            animation: none;
            opacity: 0.1;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;