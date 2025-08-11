'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar } from 'lucide-react';
import Button from './Button';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  details?: string[];
  image?: string;
  category?: string;
  achievements?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
  const [selectedYear, setSelectedYear] = useState<string>(items[0]?.year || '');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const selectedItem = items.find(item => item.year === selectedYear);

  return (
    <div className={cn('w-full', className)}>
      {/* Year Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setSelectedYear(item.year)}
            className={cn(
              'relative px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              selectedYear === item.year
                ? 'bg-primary text-white shadow-lg transform scale-105'
                : 'bg-surface text-muted hover:bg-primary/10 hover:text-primary'
            )}
          >
            {/* Connection Line */}
            {index < items.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2" />
            )}
            
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {item.year}
            </div>
            
            {selectedYear === item.year && (
              <motion.div
                layoutId="timeline-indicator"
                className="absolute -bottom-1 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Selected Year Content */}
      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.div
            key={selectedItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-primary/10"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  {selectedItem.year.slice(-2)}
                </div>
                {selectedItem.category && (
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    {selectedItem.category}
                  </span>
                )}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                {selectedItem.title}
              </h3>
              
              <p className="text-lg text-muted leading-relaxed">
                {selectedItem.description}
              </p>
            </div>

            {/* Image */}
            {selectedItem.image && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}

            {/* Details */}
            {selectedItem.details && selectedItem.details.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-foreground">상세 내용</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(selectedItem.id)}
                    className="text-primary"
                  >
                    {expandedItems.has(selectedItem.id) ? '접기' : '더보기'}
                    <ChevronDown className={cn(
                      'w-4 h-4 ml-1 transition-transform',
                      expandedItems.has(selectedItem.id) && 'rotate-180'
                    )} />
                  </Button>
                </div>
                
                <AnimatePresence>
                  {expandedItems.has(selectedItem.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-3">
                        {selectedItem.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                            <span className="text-muted leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Achievements */}
            {selectedItem.achievements && selectedItem.achievements.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">주요 성과</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedItem.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-emerald/5 to-primary/5 rounded-lg border border-primary/10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-foreground font-medium">{achievement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}