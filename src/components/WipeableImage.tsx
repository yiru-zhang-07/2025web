import React, { useEffect, useRef, useState } from 'react';

interface WipeableImageProps {
  topImage: string;
  bottomContent: React.ReactNode;
  className?: string;
  containedMode?: boolean;
}

const WipeableImage: React.FC<WipeableImageProps> = ({
  topImage,
  bottomContent,
  className = '',
  containedMode = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const radiationRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile or tablet
  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // Handle image loading
  useEffect(() => {
    const image = new Image();
    image.src = topImage;
    image.onload = () => {
      setIsLoaded(true);
    };
  }, [topImage]);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isLoaded) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    
    setMousePosition({ x, y });

    if (radiationRef.current) {
      radiationRef.current.style.left = `${x}px`;
      radiationRef.current.style.top = `${y}px`;
      radiationRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (radiationRef.current) {
      radiationRef.current.style.opacity = '0';
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: '#f8fafc',
        backgroundImage: `
          radial-gradient(#e2e8f0 1px, transparent 1px),
          radial-gradient(#e2e8f0 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px'
      }}
    >
      {/* Background Image */}
      {isLoaded && (
        <img 
          src={topImage} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
      )}
      
      {/* Bottom content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {bottomContent}
      </div>
      
      {/* Radiation effect cursor */}
      <div
        ref={radiationRef}
        className="pointer-events-none absolute z-10 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out rounded-full"
        style={{
          width: '400px',
          height: '400px',
          background: `
            radial-gradient(circle at center,
              rgba(244, 114, 182, 0.6) 0%,
              rgba(168, 85, 247, 0.5) 20%,
              rgba(59, 130, 246, 0.4) 40%,
              rgba(34, 197, 94, 0.3) 60%,
              rgba(234, 179, 8, 0.2) 80%,
              transparent 100%
            ),
            radial-gradient(circle at center,
              rgba(239, 68, 68, 0.4) 0%,
              rgba(217, 70, 239, 0.3) 30%,
              rgba(14, 165, 233, 0.2) 60%,
              transparent 100%
            )
          `,
          opacity: 0,
          filter: 'blur(20px)',
          mixBlendMode: 'color-dodge'
        }}
      />
      
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse-slow w-6 h-6 bg-primary rounded-full" />
        </div>
      )}
    </div>
  );
};

export default WipeableImage;