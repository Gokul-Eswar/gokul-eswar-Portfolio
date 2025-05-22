import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Ghost {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'left' | 'right';
  color: string;
  speed: number;
}

interface Pacman {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'left' | 'right';
  mouthOpen: boolean;
  speed: number;
}

const PacmanBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Initialize game elements
    const pacman: Pacman = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      direction: 'right',
      mouthOpen: true,
      speed: 2
    };
    
    // Create multiple ghosts with different colors
    const ghostColors = ['#FF0000', '#00FFDE', '#FFB8DE', '#FFB847'];
    const ghosts: Ghost[] = Array(4).fill(0).map((_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      direction: ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)] as 'up' | 'down' | 'left' | 'right',
      color: ghostColors[i],
      speed: 1.5 + Math.random()
    }));
    
    // Create dots spread across the screen
    const dots: { x: number, y: number, eaten: boolean }[] = [];
    const dotSpacing = 50;
    for (let x = dotSpacing; x < canvas.width; x += dotSpacing) {
      for (let y = dotSpacing; y < canvas.height; y += dotSpacing) {
        if (Math.random() > 0.3) { // 70% chance to place a dot
          dots.push({ x, y, eaten: false });
        }
      }
    }
    
    // Animation variables
    let animationFrameId: number;
    let mouthAnimationCounter = 0;
    let directionChangeCounter = 0;
    
    // Get theme-specific colors
    const getBackgroundColor = () => {
      switch (theme) {
        case 'dark': return 'rgba(18, 18, 18, 0.2)'; // Even more transparent
        case 'ocean': return 'rgba(12, 74, 110, 0.2)'; // Even more transparent
        default: return 'rgba(255, 255, 255, 0.2)'; // Even more transparent
      }
    };
    
    const getPacmanColor = () => {
      switch (theme) {
        case 'dark': return '#FFFF00';
        case 'ocean': return '#FFFF00';
        default: return '#FFFF00';
      }
    };
    
    const getDotColor = () => {
      switch (theme) {
        case 'dark': return '#FFFFFF';
        case 'ocean': return '#7DD3FC';
        default: return '#3B82F6';
      }
    };
    
    // Function to check if point is over a content section
    const isOverContentSection = (x: number, y: number): boolean => {
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (
          x >= rect.left && 
          x <= rect.right && 
          y >= rect.top && 
          y <= rect.bottom
        ) {
          return true;
        }
      }
      return false;
    };
    
    // Draw functions
    const drawPacman = () => {
      ctx.save();
      const isOverContent = isOverContentSection(pacman.x, pacman.y);
      ctx.fillStyle = getPacmanColor();
      // Make more transparent when over content
      ctx.globalAlpha = isOverContent ? 0.15 : 0.95; // Higher visibility when not over content
      ctx.beginPath();
      
      // Position and size
      const radius = 15;
      
      // Determine mouth angle based on direction and animation
      let startAngle = 0;
      let endAngle = 2 * Math.PI;
      const mouthSize = pacman.mouthOpen ? Math.PI / 4 : Math.PI / 10;
      
      switch (pacman.direction) {
        case 'right':
          startAngle = mouthSize;
          endAngle = 2 * Math.PI - mouthSize;
          break;
        case 'left':
          startAngle = Math.PI + mouthSize;
          endAngle = 3 * Math.PI - mouthSize;
          break;
        case 'up':
          startAngle = Math.PI * 1.5 + mouthSize;
          endAngle = Math.PI * 1.5 - mouthSize + 2 * Math.PI;
          break;
        case 'down':
          startAngle = Math.PI / 2 + mouthSize;
          endAngle = Math.PI / 2 - mouthSize + 2 * Math.PI;
          break;
      }
      
      ctx.arc(pacman.x, pacman.y, radius, startAngle, endAngle);
      ctx.lineTo(pacman.x, pacman.y);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };
    
    const drawGhost = (ghost: Ghost) => {
      ctx.save();
      const isOverContent = isOverContentSection(ghost.x, ghost.y);
      ctx.fillStyle = ghost.color;
      // Make more transparent when over content
      ctx.globalAlpha = isOverContent ? 0.15 : 0.95; // Higher visibility when not over content
      
      // Ghost body (semicircle on top of rectangle)
      const radius = 15;
      const height = radius * 1.5;
      
      // Draw the upper semicircle
      ctx.beginPath();
      ctx.arc(ghost.x, ghost.y - height/2, radius, Math.PI, 0, false);
      ctx.lineTo(ghost.x + radius, ghost.y + height/2);
      
      // Draw the wavy bottom
      const waveHeight = 4;
      const segments = 3;
      const segmentWidth = (radius * 2) / segments;
      
      for (let i = 0; i < segments; i++) {
        const waveY = i % 2 === 0 ? ghost.y + height/2 + waveHeight : ghost.y + height/2;
        ctx.lineTo(ghost.x + radius - (i + 1) * segmentWidth, waveY);
      }
      
      ctx.lineTo(ghost.x - radius, ghost.y + height/2);
      ctx.closePath();
      ctx.fill();
      
      // Draw eyes
      ctx.fillStyle = '#FFFFFF';
      const eyeRadius = radius / 3;
      const eyeOffset = radius / 2;
      
      ctx.beginPath();
      ctx.arc(ghost.x - eyeOffset, ghost.y - height/4, eyeRadius, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(ghost.x + eyeOffset, ghost.y - height/4, eyeRadius, 0, 2 * Math.PI);
      ctx.fill();
      
      // Draw pupils
      ctx.fillStyle = '#000000';
      const pupilRadius = eyeRadius / 2;
      let pupilOffsetX = 0;
      let pupilOffsetY = 0;
      
      // Move pupils based on direction
      switch (ghost.direction) {
        case 'left': pupilOffsetX = -pupilRadius/2; break;
        case 'right': pupilOffsetX = pupilRadius/2; break;
        case 'up': pupilOffsetY = -pupilRadius/2; break;
        case 'down': pupilOffsetY = pupilRadius/2; break;
      }
      
      ctx.beginPath();
      ctx.arc(ghost.x - eyeOffset + pupilOffsetX, ghost.y - height/4 + pupilOffsetY, pupilRadius, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(ghost.x + eyeOffset + pupilOffsetX, ghost.y - height/4 + pupilOffsetY, pupilRadius, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.restore();
    };
    
    const drawDots = () => {
      ctx.save();
      ctx.fillStyle = getDotColor();
      dots.forEach(dot => {
        if (!dot.eaten) {
          const isOverContent = isOverContentSection(dot.x, dot.y);
          // Make more transparent when over content
          ctx.globalAlpha = isOverContent ? 0.1 : 0.9; // Higher visibility when not over content
          
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 3, 0, 2 * Math.PI);
          ctx.fill();
        }
      });
      ctx.restore();
    };
    
    // Movement and collision detection
    const movePacman = () => {
      // Update position based on direction
      switch (pacman.direction) {
        case 'right': pacman.x += pacman.speed; break;
        case 'left': pacman.x -= pacman.speed; break;
        case 'up': pacman.y -= pacman.speed; break;
        case 'down': pacman.y += pacman.speed; break;
      }
      
      // Wrap around screen edges with buffer
      const buffer = 30;
      if (pacman.x > canvas.width + buffer) pacman.x = -buffer;
      if (pacman.x < -buffer) pacman.x = canvas.width + buffer;
      if (pacman.y > canvas.height + buffer) pacman.y = -buffer;
      if (pacman.y < -buffer) pacman.y = canvas.height + buffer;
      
      // Randomly change direction occasionally
      directionChangeCounter++;
      if (directionChangeCounter > 120) {
        if (Math.random() > 0.7) {
          const directions: ('up' | 'down' | 'left' | 'right')[] = ['up', 'down', 'left', 'right'];
          pacman.direction = directions[Math.floor(Math.random() * directions.length)];
        }
        directionChangeCounter = 0;
      }
      
      // Animate mouth
      mouthAnimationCounter++;
      if (mouthAnimationCounter > 10) {
        pacman.mouthOpen = !pacman.mouthOpen;
        mouthAnimationCounter = 0;
      }
      
      // Eat dots
      dots.forEach(dot => {
        if (!dot.eaten) {
          const distance = Math.sqrt(Math.pow(pacman.x - dot.x, 2) + Math.pow(pacman.y - dot.y, 2));
          if (distance < 15) {
            dot.eaten = true;
          }
        }
      });
      
      // If most dots are eaten, respawn them
      const eatenDotsCount = dots.filter(dot => dot.eaten).length;
      if (eatenDotsCount > dots.length * 0.7) {
        dots.forEach(dot => {
          dot.eaten = false;
        });
      }
    };
    
    const moveGhosts = () => {
      ghosts.forEach(ghost => {
        // Update position based on direction
        switch (ghost.direction) {
          case 'right': ghost.x += ghost.speed; break;
          case 'left': ghost.x -= ghost.speed; break;
          case 'up': ghost.y -= ghost.speed; break;
          case 'down': ghost.y += ghost.speed; break;
        }
        
        // Wrap around screen edges with buffer
        const buffer = 30;
        if (ghost.x > canvas.width + buffer) ghost.x = -buffer;
        if (ghost.x < -buffer) ghost.x = canvas.width + buffer;
        if (ghost.y > canvas.height + buffer) ghost.y = -buffer;
        if (ghost.y < -buffer) ghost.y = canvas.height + buffer;
        
        // Randomly change direction
        if (Math.random() < 0.01) {
          const directions: ('up' | 'down' | 'left' | 'right')[] = ['up', 'down', 'left', 'right'];
          ghost.direction = directions[Math.floor(Math.random() * directions.length)];
        }
        
        // Sometimes chase Pacman
        if (Math.random() < 0.03) {
          if (ghost.x < pacman.x) ghost.direction = 'right';
          else if (ghost.x > pacman.x) ghost.direction = 'left';
          else if (ghost.y < pacman.y) ghost.direction = 'down';
          else if (ghost.y > pacman.y) ghost.direction = 'up';
        }
      });
    };
    
    // Main game loop
    const render = () => {
      // Clear canvas with slight transparency to create trail effect
      ctx.fillStyle = getBackgroundColor();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      movePacman();
      moveGhosts();
      
      drawDots();
      drawPacman();
      ghosts.forEach(drawGhost);
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60" // Increased opacity even more for better visibility
    />
  );
};

export default PacmanBackground;
