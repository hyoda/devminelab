import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Calendar, ExternalLink } from 'lucide-react';
import Button from './Button';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  date?: string;
  category?: string;
  href?: string;
  downloadUrl?: string;
  isExternal?: boolean;
  children?: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}

export default function Card({
  title,
  description,
  image,
  imageAlt = '',
  date,
  category,
  href,
  downloadUrl,
  isExternal = false,
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg',
    elevated: 'bg-white shadow-lg hover:shadow-xl border-0',
    bordered: 'bg-transparent border-2 border-primary/10 hover:border-primary/30',
    minimal: 'bg-transparent border-0 hover:bg-surface'
  };

  const sizes = {
    sm: 'p-4 rounded-lg',
    md: 'p-6 rounded-xl',
    lg: 'p-8 rounded-2xl'
  };

  const CardContent = () => (
    <div className={cn(
      'transition-all duration-300 cursor-pointer group',
      variants[variant],
      sizes[size],
      className
    )} {...props}>
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-surface">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex flex-col h-full">
        {(category || date) && (
          <div className="flex items-center justify-between mb-3 text-sm text-muted">
            {category && (
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                {category}
              </span>
            )}
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
            )}
          </div>
        )}

        <h3 className="text-xl font-semibold font-serif mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        {description && (
          <p className="text-muted mb-4 flex-1 line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}

        {children && (
          <div className="mb-4">
            {children}
          </div>
        )}

        {(href || downloadUrl) && (
          <div className="flex items-center gap-2 mt-auto">
            {href && (
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary flex-1"
              >
                자세히 보기
                {isExternal && <ExternalLink className="w-4 h-4 ml-1" />}
              </Button>
            )}
            {/* 다운로드 버튼은 숨김: 인포그래픽 페이지로 전환 */}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          <CardContent />
        </a>
      );
    }
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}