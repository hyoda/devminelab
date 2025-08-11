'use client';

import { useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
  badge?: string | number;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
  tabsClassName?: string;
  contentClassName?: string;
  variant?: 'default' | 'pills' | 'underline' | 'cards';
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
}

export default function Tabs({
  items,
  defaultTab,
  className,
  tabsClassName,
  contentClassName,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal'
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const activeItem = items.find(item => item.id === activeTab);

  const variants = {
    default: {
      tabs: 'bg-surface rounded-lg p-1',
      tab: 'relative px-4 py-2 rounded-md transition-all duration-200 font-medium',
      active: 'bg-white text-primary shadow-sm',
      inactive: 'text-muted hover:text-foreground hover:bg-white/50'
    },
    pills: {
      tabs: 'space-x-1',
      tab: 'px-4 py-2 rounded-full transition-all duration-200 font-medium',
      active: 'bg-primary text-white shadow-md',
      inactive: 'text-muted hover:text-foreground hover:bg-surface'
    },
    underline: {
      tabs: 'border-b border-gray-200',
      tab: 'relative px-4 py-3 font-medium transition-all duration-200',
      active: 'text-primary border-b-2 border-primary',
      inactive: 'text-muted hover:text-foreground'
    },
    cards: {
      tabs: 'space-x-2',
      tab: 'px-6 py-3 rounded-t-lg border-b-2 transition-all duration-200 font-medium',
      active: 'bg-white text-primary border-primary shadow-sm',
      inactive: 'bg-surface text-muted border-transparent hover:text-foreground hover:bg-white/50'
    }
  };

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const orientationClasses = {
    horizontal: {
      container: 'flex flex-col',
      tabs: 'flex flex-wrap',
      content: 'mt-6'
    },
    vertical: {
      container: 'flex gap-8',
      tabs: 'flex flex-col min-w-[200px]',
      content: 'flex-1'
    }
  };

  return (
    <div className={cn(
      orientationClasses[orientation].container,
      className
    )}>
      {/* Tab Navigation */}
      <div className={cn(
        orientationClasses[orientation].tabs,
        variants[variant].tabs,
        sizes[size],
        tabsClassName
      )}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              variants[variant].tab,
              activeTab === item.id
                ? variants[variant].active
                : variants[variant].inactive,
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
            )}
          >
            <div className="flex items-center gap-2">
              {item.icon && (
                <span className={cn(
                  'transition-colors',
                  activeTab === item.id ? 'text-inherit' : 'text-muted'
                )}>
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
              {item.badge && (
                <span className={cn(
                  'px-2 py-0.5 text-xs font-semibold rounded-full',
                  activeTab === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'bg-muted/20 text-muted'
                )}>
                  {item.badge}
                </span>
              )}
            </div>
            
            {/* Active indicator for underline variant */}
            {variant === 'underline' && activeTab === item.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={cn(
        orientationClasses[orientation].content,
        contentClassName
      )}>
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1]
              }}
            >
              {activeItem.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Convenience component for tab content
export function TabContent({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn('space-y-6', className)}>
      {children}
    </div>
  );
}

// Convenience component for tab panels with rich content
export function TabPanel({
  title,
  description,
  children,
  className
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('space-y-6', className)}>
      {title && (
        <h3 className="text-2xl font-serif font-semibold text-foreground">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
      <div>
        {children}
      </div>
    </div>
  );
}