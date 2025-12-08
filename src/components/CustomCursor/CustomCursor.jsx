import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      // Automatically detect all clickable elements
      const clickableElements = [
        'a', 'button', 'input[type="submit"]', 
        'input[type="button"]', '.btn', '[role="button"]',
        'select', 'textarea', 'input', 'label'
      ];
      
      clickableElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.addEventListener('mouseenter', () => setLinkHover(true));
          el.addEventListener('mouseleave', () => setLinkHover(false));
        });
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorClasses = [
    'custom-cursor',
    hidden && 'cursor-hidden',
    clicked && 'cursor-clicked',
    linkHover && 'cursor-hover'
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default CustomCursor;