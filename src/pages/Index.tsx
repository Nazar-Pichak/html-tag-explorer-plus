
import React from 'react';
import { TagExplorer } from '@/components/TagExplorer';
import { Header } from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <TagExplorer />
      </main>
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>HTML Tag Explorer © {new Date().getFullYear()} - Data based on MDN Web Docs</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
