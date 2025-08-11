import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-ocean-primary hover:bg-ocean-deep text-white shadow-md hover:shadow-lg active:scale-95',
    secondary: 'bg-emerald hover:bg-emerald/90 text-white shadow-md hover:shadow-lg active:scale-95',
    accent: 'bg-coral hover:bg-coral/90 text-white shadow-md hover:shadow-lg active:scale-95',
    ghost: 'bg-transparent hover:bg-surface text-foreground active:scale-95',
    outline: 'border border-stone hover:bg-surface text-foreground active:scale-95'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-6 py-2.5 text-base rounded-lg',
    lg: 'px-8 py-3.5 text-lg rounded-xl'
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}