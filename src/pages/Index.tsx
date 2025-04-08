
import React from 'react';
import { TagExplorer } from '@/components/TagExplorer';
import { Header } from '@/components/Header';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <TagExplorer />
      </main>
      <footer className="bg-white border-t py-2 sm:py-4 mt-4">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-gray-500">
          <p>HTML Tag Explorer © {new Date().getFullYear()} - Featuring all 127 HTML tags from MDN Web Docs</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
