import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface JustifiedImageGridProps {
  images: string[];
}

const JustifiedImageGrid: React.FC<JustifiedImageGridProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const targetHeight = 300; // Target height for each row
        const images = container.querySelectorAll('img');
        
        let currentRow: HTMLImageElement[] = [];
        let currentRowWidth = 0;
        
        images.forEach((img) => {
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          const width = targetHeight * aspectRatio;
          
          if (currentRowWidth + width > containerWidth) {
            // Calculate scale factor for current row
            const scale = containerWidth / currentRowWidth;
            currentRow.forEach((rowImg) => {
              const rowAspectRatio = rowImg.naturalWidth / rowImg.naturalHeight;
              const newWidth = targetHeight * rowAspectRatio * scale;
              rowImg.style.width = `${newWidth}px`;
              rowImg.style.height = `${targetHeight}px`;
            });
            
            currentRow = [img];
            currentRowWidth = width;
          } else {
            currentRow.push(img);
            currentRowWidth += width;
          }
        });
        
        // Handle last row
        if (currentRow.length > 0) {
          const scale = containerWidth / currentRowWidth;
          currentRow.forEach((rowImg) => {
            const rowAspectRatio = rowImg.naturalWidth / rowImg.naturalHeight;
            const newWidth = targetHeight * rowAspectRatio * scale;
            rowImg.style.width = `${newWidth}px`;
            rowImg.style.height = `${targetHeight}px`;
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden"
    >
      <div className="flex flex-wrap">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            style={{ flexGrow: 1 }}
          >
            <motion.img
              src={src}
              alt={`Outside work ${index + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JustifiedImageGrid; 