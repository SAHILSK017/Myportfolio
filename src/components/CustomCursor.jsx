import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Ring */}
      <motion.div
        className="absolute w-8 h-8 border-2 border-primary rounded-full -ml-4 -mt-4"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-primary rounded-full -ml-1 -mt-1"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {/* Glow Effect */}
      <motion.div
        className="absolute w-12 h-12 bg-primary/20 rounded-full blur-xl -ml-6 -mt-6"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
