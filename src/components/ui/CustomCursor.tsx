import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports hover
    const mediaQuery = window.matchMedia('(hover: none)');
    if (mediaQuery.matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('a') !== null ||
          target.closest('button') !== null ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer') ||
          target.classList.contains('hover-trigger');

        setIsHovered(!!isClickable);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer fluid trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-teal-500/60 dark:border-teal-400/60 backdrop-blur-[1px] mix-blend-difference"
        animate={{
          x: position.x - (isHovered ? 28 : 18),
          y: position.y - (isHovered ? 28 : 18),
          scale: isMouseDown ? 0.8 : isHovered ? 1.5 : 1,
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          backgroundColor: isHovered
            ? 'rgba(20, 184, 166, 0.15)'
            : 'rgba(20, 184, 166, 0)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      />

      {/* Inner solid dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-teal-500 dark:bg-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.8)]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isMouseDown ? 0.6 : isHovered ? 0 : 1,
          width: 8,
          height: 8,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 800,
        }}
      />
    </>
  );
};
