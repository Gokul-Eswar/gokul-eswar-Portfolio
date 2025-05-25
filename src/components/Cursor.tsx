
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update CSS variables for spotlight effect
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, .cursor-hover')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHovering ? '60px' : '20px',
          height: isHovering ? '60px' : '20px',
          backgroundColor: isHovering ? 'rgba(255, 107, 53, 0.8)' : '#ff6b35',
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHovering ? '80px' : '40px',
          height: isHovering ? '80px' : '40px',
        }}
      />
      <div className="spotlight-overlay" />
    </>
  );
};

export default Cursor;
