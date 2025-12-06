import React from 'react';
import { useCursor } from '../../context/CursorContext';

// Hover Button Component
export const HoverButton = ({ children, className = '', ...props }) => {
  const { changeCursor, resetCursor } = useCursor();

  return (
    <button
      className={`hover-btn ${className}`}
      onMouseEnter={() => changeCursor('pointer', 'Click')}
      onMouseLeave={resetCursor}
      {...props}
    >
      {children}
    </button>
  );
};

// Hover Link Component
export const HoverLink = ({ children, className = '', ...props }) => {
  const { changeCursor, resetCursor } = useCursor();

  return (
    <a
      className={`hover-link ${className}`}
      onMouseEnter={() => changeCursor('pointer', 'Visit')}
      onMouseLeave={resetCursor}
      {...props}
    >
      {children}
    </a>
  );
};

// Hover Text Component
export const HoverText = ({ children, className = '', ...props }) => {
  const { changeCursor, resetCursor } = useCursor();

  return (
    <span
      className={`hover-text ${className}`}
      onMouseEnter={() => changeCursor('text', 'Read')}
      onMouseLeave={resetCursor}
      {...props}
    >
      {children}
    </span>
  );
};

// Hover Card Component
export const HoverCard = ({ children, className = '', ...props }) => {
  const { changeCursor, resetCursor } = useCursor();

  return (
    <div
      className={`hover-card ${className}`}
      onMouseEnter={() => changeCursor('zoom', 'View')}
      onMouseLeave={resetCursor}
      {...props}
    >
      {children}
    </div>
  );
};