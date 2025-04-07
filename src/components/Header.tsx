
import React from 'react';
import { Code2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">HTML Tag Explorer</h1>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            MDN Docs
          </a>
        </div>
      </div>
    </header>
  );
};
