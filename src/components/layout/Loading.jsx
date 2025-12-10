import React from 'react';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="spinner"></div>
        <h3>Loading Blogs</h3>
        <p>Fetching the latest content...</p>
      </div>

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .loading-content {
          text-align: center;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 1px solid #e5e7eb;
        }

        .spinner {
          width: 60px;
          height: 60px;
          border: 4px solid #3b82f6;
          border-top: 4px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        h3 {
          color: #1f2937;
          margin-bottom: 8px;
          font-size: 1.5rem;
        }

        p {
          color: #6b7280;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Loading;