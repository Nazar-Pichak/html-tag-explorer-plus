
import React from 'react';
import { Code2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
          <h1 className={`${isMobile ? "text-lg" : "text-xl"} font-bold text-gray-900`}>
            HTML Tag Explorer
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            MDN Docs
          </a>
        </div>
      </div>
    </header>
  );
};
