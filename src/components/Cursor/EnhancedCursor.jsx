import React, { useEffect, useRef, useState } from 'react';
import { useCursor } from '../../context/CursorContext';
import './EnhancedCursor.css';

const EnhancedCursor = () => {
  const mainCursor = useRef(null);
  const trailingCursor = useRef(null);
  const textCursor = useRef(null);
  const { cursorType, cursorText } = useCursor();
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Animation frame reference
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    // Mouse event listeners
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', () => setHidden(false));
      document.addEventListener('mouseleave', () => setHidden(true));
      document.addEventListener('mousedown', () => setClicked(true));
      document.addEventListener('mouseup', () => setClicked(false));
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', () => setHidden(false));
      document.removeEventListener('mouseleave', () => setHidden(true));
      document.removeEventListener('mousedown', () => setClicked(true));
      document.removeEventListener('mouseup', () => setClicked(false));
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Animation loop for trailing cursor
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        // Smooth trailing effect
        setTrailingPosition(prev => ({
          x: prev.x + (position.x - prev.x) * 0.15,
          y: prev.y + (position.y - prev.y) * 0.15
        }));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    addEventListeners();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      removeEventListeners();
      cancelAnimationFrame(requestRef.current);
    };
  }, [position]);

  // Hide on touch devices
  useEffect(() => {
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    };

    if (isTouchDevice()) {
      setHidden(true);
    }
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={mainCursor}
        className={`cursor-main ${cursorType} ${clicked ? 'clicked' : ''} ${hidden ? 'hidden' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
        {cursorText && (
          <div className="cursor-text">{cursorText}</div>
        )}
      </div>

      {/* Trailing Cursor */}
      <div
        ref={trailingCursor}
        className={`cursor-trailing ${cursorType} ${hidden ? 'hidden' : ''}`}
        style={{
          transform: `translate(${trailingPosition.x}px, ${trailingPosition.y}px)`
        }}
      />

      {/* Click Effect */}
      {clicked && (
        <div 
          className="cursor-click-effect"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        />
      )}
    </>
  );
};

export default EnhancedCursor;