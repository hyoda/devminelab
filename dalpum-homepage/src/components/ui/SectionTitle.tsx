import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={cn('mb-16', alignmentClasses[align], className)}>
      {subtitle && (
        <div className={cn(
          'inline-flex items-center px-4 py-2 mb-4 text-sm font-medium bg-surface text-primary rounded-full border border-primary/10',
          subtitleClassName
        )}>
          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
          {subtitle}
        </div>
      )}
      
      <h2 className={cn(
        'text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance',
        'bg-gradient-to-r from-ocean-deep via-ocean-primary to-emerald bg-clip-text text-transparent',
        titleClassName
      )}>
        {title}
      </h2>

      {description && (
        <div className={cn(
          'text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed',
          align === 'left' && 'mx-0',
          align === 'right' && 'ml-auto mr-0',
          descriptionClassName
        )}>
          {description}
        </div>
      )}
    </div>
  );
}