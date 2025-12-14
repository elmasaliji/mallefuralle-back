// src/components/AnimatedSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ease-out opacity-0 translate-y-10 ${inView ? 'opacity-100 translate-y-0' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
