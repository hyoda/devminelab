'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, type Variants, type Easing } from 'framer-motion';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string | ReactNode;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  scrollIndicator?: boolean;
  className?: string;
  contentClassName?: string;
  size?: 'default' | 'compact' | 'full';
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  overlay = true,
  overlayOpacity = 0.3,
  primaryAction,
  secondaryAction,
  scrollIndicator = true,
  className,
  contentClassName,
  size = 'default'
}: HeroSectionProps) {
  const sizeClasses = {
    default: 'min-h-screen py-20',
    compact: 'min-h-[60vh] py-16',
    full: 'h-screen py-0'
  };

  const easeCurve: Easing = [0.4, 0.0, 0.2, 1];
  const containerAnimations: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: easeCurve
      }
    }
  };

  const itemAnimations: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeCurve }
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={cn(
      'relative flex items-center justify-center overflow-hidden',
      sizeClasses[size],
      className
    )}>
      {/* Background */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-ocean-primary to-emerald"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald/20 to-ocean-light/20 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-coral/20 to-lime/20 rounded-full blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className={cn(
          'relative z-10 text-center max-w-5xl mx-auto px-6',
          contentClassName
        )}
        variants={containerAnimations}
        initial="initial"
        animate="animate"
      >
        {subtitle && (
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
            variants={itemAnimations}
          >
            <span className="w-2 h-2 bg-emerald rounded-full mr-2 animate-pulse"></span>
            {subtitle}
          </motion.div>
        )}

        <motion.h1
          className={cn(
            'text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-8',
            'text-white drop-shadow-2xl',
            'text-balance leading-tight'
          )}
          style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
          }}
          variants={itemAnimations}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.div
            className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{
              textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
            }}
            variants={itemAnimations}
          >
            {description}
          </motion.div>
        )}

        {(primaryAction || secondaryAction) && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemAnimations}
          >
            {primaryAction && (
              <Button
                variant="primary"
                size="lg"
                onClick={primaryAction.onClick}
                className="bg-white text-ocean-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl min-w-[200px]"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="lg"
                onClick={secondaryAction.onClick}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm min-w-[200px]"
              >
                {secondaryAction.label}
              </Button>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      {scrollIndicator && (
        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ChevronDown className="w-6 h-6" />
          <span className="sr-only">다음 섹션으로 스크롤</span>
        </motion.button>
      )}
    </section>
  );
}