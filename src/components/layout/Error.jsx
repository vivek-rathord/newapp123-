import React from 'react';

const Error = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h2>Oops! Something went wrong</h2>
        <p className="error-message">{message}</p>
        <div className="error-actions">
          <button onClick={onRetry} className="retry-btn">
            🔄 Try Again
          </button>
          <button onClick={() => window.location.reload()} className="reload-btn">
            🔃 Reload Page
          </button>
        </div>
        <div className="error-tips">
          <h4>Quick checks:</h4>
          <ul>
            <li>✅ Check your internet connection</li>
            <li>✅ Make sure Laravel server is running</li>
            <li>✅ Verify the API endpoint is accessible</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .error-container {
          text-align: center;
          padding: 40px 20px;
          background: white;
          border-radius: 12px;
          margin: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid #fecaca;
        }

        .error-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .error-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        h2 {
          color: #dc2626;
          margin-bottom: 16px;
          font-size: 1.8rem;
        }

        .error-message {
          color: #6b7280;
          margin-bottom: 30px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .error-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .retry-btn, .reload-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .retry-btn {
          background: #3b82f6;
          color: white;
        }

        .retry-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .reload-btn {
          background: #6b7280;
          color: white;
        }

        .reload-btn:hover {
          background: #4b5563;
          transform: translateY(-2px);
        }

        .error-tips {
          text-align: left;
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }

        .error-tips h4 {
          color: #1f2937;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .error-tips ul {
          list-style: none;
          padding: 0;
        }

        .error-tips li {
          padding: 6px 0;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .error-container {
            margin: 10px;
            padding: 30px 15px;
          }
          
          .error-actions {
            flex-direction: column;
          }
          
          .retry-btn, .reload-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Error;