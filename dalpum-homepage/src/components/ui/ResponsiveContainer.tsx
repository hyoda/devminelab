'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centerContent?: boolean;
}

export default function ResponsiveContainer({
  children,
  className,
  maxWidth = 'lg',
  padding = 'md',
  centerContent = false
}: ResponsiveContainerProps) {

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  const paddingClasses = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-4 md:px-6',
    lg: 'px-4 md:px-6 lg:px-8',
    xl: 'px-4 md:px-6 lg:px-8 xl:px-12'
  };

  return (
    <div className={cn(
      'w-full mx-auto',
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      centerContent && 'text-center',
      className
    )}>
      {children}
    </div>
  );
}

// Responsive Grid Component
interface ResponsiveGridProps {
  children: ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function ResponsiveGrid({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
  className
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
    xl: 'gap-8 md:gap-10'
  };

  const gridColumns = [
    columns.mobile && `grid-cols-${columns.mobile}`,
    columns.tablet && `md:grid-cols-${columns.tablet}`,
    columns.desktop && `lg:grid-cols-${columns.desktop}`
  ].filter(Boolean).join(' ');

  return (
    <div className={cn(
      'grid',
      gridColumns,
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
}

// Responsive Text Component
interface ResponsiveTextProps {
  children: ReactNode;
  size?: {
    mobile?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
    tablet?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
    desktop?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  };
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'primary' | 'secondary';
  className?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function ResponsiveText({
  children,
  size = { mobile: 'base', tablet: 'lg', desktop: 'xl' },
  weight = 'normal',
  color = 'default',
  className,
  as: Component = 'p'
}: ResponsiveTextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl'
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colorClasses = {
    default: 'text-foreground',
    muted: 'text-muted',
    primary: 'text-primary',
    secondary: 'text-secondary'
  };

  const responsiveClasses = [
    size.mobile && sizeClasses[size.mobile],
    size.tablet && `md:${sizeClasses[size.tablet]}`,
    size.desktop && `lg:${sizeClasses[size.desktop]}`
  ].filter(Boolean).join(' ');

  return (
    <Component className={cn(
      responsiveClasses,
      weightClasses[weight],
      colorClasses[color],
      className
    )}>
      {children}
    </Component>
  );
}

// Responsive Stack Component
interface ResponsiveStackProps {
  children: ReactNode;
  direction?: {
    mobile?: 'column' | 'row';
    tablet?: 'column' | 'row';
    desktop?: 'column' | 'row';
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
}

export function ResponsiveStack({
  children,
  direction = { mobile: 'column', tablet: 'row', desktop: 'row' },
  gap = 'md',
  align = 'start',
  justify = 'start',
  className
}: ResponsiveStackProps) {
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
    xl: 'gap-8 md:gap-10'
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };

  const directionClasses = [
    direction.mobile === 'column' ? 'flex-col' : 'flex-row',
    direction.tablet && (direction.tablet === 'column' ? 'md:flex-col' : 'md:flex-row'),
    direction.desktop && (direction.desktop === 'column' ? 'lg:flex-col' : 'lg:flex-row')
  ].filter(Boolean).join(' ');

  return (
    <div className={cn(
      'flex',
      directionClasses,
      gapClasses[gap],
      alignClasses[align],
      justifyClasses[justify],
      className
    )}>
      {children}
    </div>
  );
}