'use client';

import { ReactNode, CSSProperties } from 'react';
import { motion, type Variants, type Easing } from 'framer-motion';
import { useInView } from '@/lib/hooks';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
  triggerOnce?: boolean;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className,
  style,
  triggerOnce = true
}: FadeInProps) {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const directionOffset = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 }
  };

  const easeCurve: Easing = [0.4, 0.0, 0.2, 1];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: directionOffset[direction].x,
      y: directionOffset[direction].y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: easeCurve,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : (triggerOnce ? 'hidden' : 'hidden')}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

// Preset components for common use cases
export function FadeInUp({ children, delay = 0, className }: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <FadeIn direction="up" delay={delay} className={className}>
      {children}
    </FadeIn>
  );
}

export function FadeInDown({ children, delay = 0, className }: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <FadeIn direction="down" delay={delay} className={className}>
      {children}
    </FadeIn>
  );
}

export function FadeInLeft({ children, delay = 0, className }: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <FadeIn direction="left" delay={delay} className={className}>
      {children}
    </FadeIn>
  );
}

export function FadeInRight({ children, delay = 0, className }: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <FadeIn direction="right" delay={delay} className={className}>
      {children}
    </FadeIn>
  );
}