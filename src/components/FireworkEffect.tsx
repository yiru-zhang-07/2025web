import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

const FireworkEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const colorIndex = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create gradient colors array
    const createGradientColors = (count: number) => {
      const colors: string[] = [];
      const colorSets = [
        // Pink, Purple, Blue
        ['rgb(244, 114, 182)', 'rgb(168, 85, 247)', 'rgb(59, 130, 246)'],
        // Green, Yellow, Orange
        ['rgb(34, 197, 94)', 'rgb(234, 179, 8)', 'rgb(249, 115, 22)'],
        // Cyan, Indigo, Violet
        ['rgb(6, 182, 212)', 'rgb(99, 102, 241)', 'rgb(139, 92, 246)'],
        // Rose, Fuchsia, Sky
        ['rgb(244, 63, 94)', 'rgb(217, 70, 239)', 'rgb(14, 165, 233)']
      ];
      
      const currentSet = colorSets[colorIndex.current % colorSets.length];
      colorIndex.current++;
      
      for (let i = 0; i < count; i++) {
        const color = currentSet[i % currentSet.length].replace('rgb(', 'rgba(').replace(')', ', 0.8)');
        colors.push(color);
      }
      return colors;
    };

    // Handle click
    const handleClick = (e: MouseEvent) => {
      const colors = createGradientColors(3);
      const burstCount = 1; // Single burst
      
      // Create particles for the burst
      const particleCount = 30 + Math.floor(Math.random() * 10);
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.3;
        const speed = 0.3 + Math.random() * 0.5;
        const color = colors[i % colors.length];
        const size = 1 + Math.random() * 2;

        // Get the canvas position relative to the viewport
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          life: 1,
          size,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }
    };

    window.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.01;
        p.life -= 0.001;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        ctx.beginPath();
        if (Math.random() < 0.3) {
          // Draw star
          for (let j = 0; j < 5; j++) {
            const angle = (j * Math.PI * 2) / 5;
            const x = Math.cos(angle) * p.size * 1.5;
            const y = Math.sin(angle) * p.size * 1.5;
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        } else {
          // Draw circle
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        }
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
        ctx.restore();

        if (p.life <= 0) {
          particles.current.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="firework-canvas absolute inset-0 w-full h-full pointer-events-none z-20" 
      style={{ 
        background: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default FireworkEffect; 