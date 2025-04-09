
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { globalAttributes } from '@/data/globalAttributes';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';

const GlobalAttributes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const isMobile = useIsMobile();
  
  const filteredAttributes = globalAttributes.filter(attr => 
    attr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attr.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showGlobalAttributesLink={false} showBackToTagsButton={true} />
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <h1 className="text-2xl font-bold mb-4">Global HTML Attributes</h1>
        
        <p className="text-gray-600 mb-6">
          Global attributes are attributes that can be used with all HTML elements.
          This table lists all global attributes as defined by MDN Web Docs.
        </p>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search attributes..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Separator className="my-4" />
        
        {isMobile ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredAttributes.length > 0 ? (
              filteredAttributes.map((attr) => (
                <Card key={attr.name} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-blue-50 p-3 border-b">
                      <h3 className="font-mono font-bold text-blue-700">{attr.name}</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <p>{attr.description}</p>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Values:</h4>
                        <p className="text-sm">{attr.values.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Applicable Tags:</h4>
                        <p className="text-sm">{attr.applicableTags.join(', ')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow">
                <p>No attributes found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px] font-bold">Attribute</TableHead>
                    <TableHead className="font-bold">Description</TableHead>
                    <TableHead className="font-bold">Values</TableHead>
                    <TableHead className="font-bold">Applicable Tags</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAttributes.length > 0 ? (
                    filteredAttributes.map((attr) => (
                      <TableRow key={attr.name}>
                        <TableCell className="font-mono">{attr.name}</TableCell>
                        <TableCell>{attr.description}</TableCell>
                        <TableCell>{attr.values.join(', ')}</TableCell>
                        <TableCell>{attr.applicableTags.join(', ')}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8">
                        No attributes found matching "{searchTerm}"
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
        
        <div className="mt-4 text-sm text-gray-500 text-right">
          Showing {filteredAttributes.length} of {globalAttributes.length} attributes
        </div>
      </main>
      <footer className="bg-white border-t py-2 sm:py-4 mt-4">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-gray-500">
          <p>HTML Tag Explorer © {new Date().getFullYear()} - Data sourced from MDN Web Docs</p>
        </div>
      </footer>
    </div>
  );
};

export default GlobalAttributes;
