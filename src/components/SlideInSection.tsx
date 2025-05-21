
import { useEffect, useRef, useState } from 'react';

interface SlideInSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
}

const SlideInSection = ({ children, direction = 'left', className = '' }: SlideInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section becomes 20% visible, trigger the animation
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's been seen, no need to watch anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.2, // 20% of the item is visible
        rootMargin: '0px' // No margin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationClass = direction === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right';

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default SlideInSection;
