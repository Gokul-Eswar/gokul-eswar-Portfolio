
import { useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Ghost {
  x: number;
  y: number;
  color: string;
  direction: number;
}

const PacmanBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Game state
    let pacman: Position = { x: 50, y: canvas.height / 2 };
    let ghosts: Ghost[] = [
      { x: 200, y: canvas.height / 2, color: '#FF0000', direction: 0 },
      { x: 250, y: canvas.height / 2, color: '#FFB8FF', direction: 0 },
      { x: 300, y: canvas.height / 2, color: '#00FFFF', direction: 0 },
      { x: 350, y: canvas.height / 2, color: '#FFB852', direction: 0 }
    ];
    
    let dots: Position[] = [];
    let pacmanDirection = 0; // 0: right, 1: down, 2: left, 3: up
    let mouthAngle = 0;
    let gameSpeed = 2;
    
    // Generate dots in a grid pattern
    const generateDots = () => {
      dots = [];
      for (let x = 30; x < canvas.width; x += 40) {
        for (let y = 30; y < canvas.height; y += 40) {
          dots.push({ x, y });
        }
      }
    };
    
    generateDots();
    
    // Draw functions
    const drawPacman = (x: number, y: number) => {
      ctx.fillStyle = '#FFFF00';
      ctx.beginPath();
      
      const startAngle = (pacmanDirection * Math.PI / 2) + (mouthAngle * Math.PI / 4);
      const endAngle = (pacmanDirection * Math.PI / 2) - (mouthAngle * Math.PI / 4);
      
      ctx.arc(x, y, 15, startAngle, endAngle);
      ctx.lineTo(x, y);
      ctx.fill();
    };
    
    const drawGhost = (ghost: Ghost) => {
      ctx.fillStyle = ghost.color;
      ctx.beginPath();
      ctx.arc(ghost.x, ghost.y - 5, 12, Math.PI, 0);
      ctx.rect(ghost.x - 12, ghost.y - 5, 24, 20);
      
      // Ghost bottom wave
      for (let i = 0; i < 3; i++) {
        ctx.lineTo(ghost.x - 12 + (i * 8) + 4, ghost.y + 15 - (i % 2 * 6));
      }
      ctx.lineTo(ghost.x - 12, ghost.y + 15);
      ctx.fill();
      
      // Eyes
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(ghost.x - 5, ghost.y - 3, 3, 0, Math.PI * 2);
      ctx.arc(ghost.x + 5, ghost.y - 3, 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(ghost.x - 5, ghost.y - 3, 1.5, 0, Math.PI * 2);
      ctx.arc(ghost.x + 5, ghost.y - 3, 1.5, 0, Math.PI * 2);
      ctx.fill();
    };
    
    const drawDot = (dot: Position) => {
      ctx.fillStyle = '#FFFF00';
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
      ctx.fill();
    };
    
    const animate = () => {
      // Clear canvas with very low opacity black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update mouth animation
      mouthAngle = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
      
      // Move Pacman
      const directions = [
        { x: gameSpeed, y: 0 }, // right
        { x: 0, y: gameSpeed }, // down
        { x: -gameSpeed, y: 0 }, // left
        { x: 0, y: -gameSpeed }  // up
      ];
      
      pacman.x += directions[pacmanDirection].x;
      pacman.y += directions[pacmanDirection].y;
      
      // Pacman wall collision and direction change
      if (pacman.x > canvas.width + 20) {
        pacman.x = -20;
      } else if (pacman.x < -20) {
        pacman.x = canvas.width + 20;
      }
      
      if (pacman.y > canvas.height + 20) {
        pacman.y = -20;
      } else if (pacman.y < -20) {
        pacman.y = canvas.height + 20;
      }
      
      // Random direction change occasionally
      if (Math.random() < 0.002) {
        pacmanDirection = Math.floor(Math.random() * 4);
      }
      
      // Move ghosts
      ghosts.forEach(ghost => {
        const ghostDirections = [
          { x: gameSpeed * 0.8, y: 0 },
          { x: 0, y: gameSpeed * 0.8 },
          { x: -gameSpeed * 0.8, y: 0 },
          { x: 0, y: -gameSpeed * 0.8 }
        ];
        
        ghost.x += ghostDirections[ghost.direction].x;
        ghost.y += ghostDirections[ghost.direction].y;
        
        // Ghost wall collision
        if (ghost.x > canvas.width + 20) {
          ghost.x = -20;
        } else if (ghost.x < -20) {
          ghost.x = canvas.width + 20;
        }
        
        if (ghost.y > canvas.height + 20) {
          ghost.y = -20;
        } else if (ghost.y < -20) {
          ghost.y = canvas.height + 20;
        }
        
        // Random direction change
        if (Math.random() < 0.003) {
          ghost.direction = Math.floor(Math.random() * 4);
        }
      });
      
      // Draw dots
      dots.forEach(dot => drawDot(dot));
      
      // Draw ghosts
      ghosts.forEach(ghost => drawGhost(ghost));
      
      // Draw Pacman
      drawPacman(pacman.x, pacman.y);
      
      // Dot collision detection
      dots = dots.filter(dot => {
        const distance = Math.sqrt(
          Math.pow(pacman.x - dot.x, 2) + Math.pow(pacman.y - dot.y, 2)
        );
        return distance > 20;
      });
      
      // Regenerate dots if all eaten
      if (dots.length < 10) {
        generateDots();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
        opacity: 0.15,
        background: 'transparent'
      }}
    />
  );
};

export default PacmanBackground;
