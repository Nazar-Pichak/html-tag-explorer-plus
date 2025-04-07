import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  X, 
  Filter 
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { htmlTags } from '@/data/htmlTags';
import { FilterState, HtmlTag, SortDirection, TagCategory } from '@/types/tag';
import { FilterControls } from './FilterControls';
import { TagDetail } from './TagDetail';

export const TagExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof HtmlTag; direction: SortDirection }>({
    key: 'name',
    direction: 'asc'
  });
  const [filters, setFilters] = useState<FilterState>({
    name: '',
    category: '',
    isPair: '',
    display: '',
    hasGlobalAttributes: '',
  });
  const [selectedTag, setSelectedTag] = useState<HtmlTag | null>(null);
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  const handleSort = (key: keyof HtmlTag) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const clearFilters = () => {
    setFilters({
      name: '',
      category: '',
      isPair: '',
      display: '',
      hasGlobalAttributes: '',
    });
    setSearchTerm('');
  };

  const filteredTags = useMemo(() => {
    return htmlTags.filter(tag => {
      if (searchTerm && !tag.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !tag.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      if (filters.name && !tag.name.toLowerCase().includes(filters.name.toLowerCase())) {
        return false;
      }
      
      if (filters.category && tag.category !== filters.category) {
        return false;
      }
      
      if (filters.isPair !== '' && tag.isPair !== filters.isPair) {
        return false;
      }
      
      if (filters.display && tag.display !== filters.display) {
        return false;
      }
      
      if (filters.hasGlobalAttributes !== '' && tag.hasGlobalAttributes !== filters.hasGlobalAttributes) {
        return false;
      }
      
      return true;
    });
  }, [htmlTags, searchTerm, filters]);

  const sortedTags = useMemo(() => {
    const sortableItems = [...filteredTags];
    
    sortableItems.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        return sortConfig.direction === 'asc' ? (aValue ? 1 : -1) : (aValue ? -1 : 1);
      }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      return 0;
    });
    
    return sortableItems;
  }, [filteredTags, sortConfig]);

  const activeFiltersCount = Object.values(filters).filter(value => value !== '').length;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-64 md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search tags or descriptions..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Dialog open={isFilterDialogOpen} onOpenChange={setIsFilterDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">{activeFiltersCount}</Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Filter Tags</DialogTitle>
              </DialogHeader>
              <FilterControls 
                filters={filters} 
                setFilters={setFilters} 
                onClear={clearFilters}
                onApply={() => setIsFilterDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
          
          {activeFiltersCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="h-9"
            >
              <X className="h-4 w-4 mr-1" /> Clear
            </Button>
          )}
        </div>
      </div>
      
      {activeFiltersCount > 0 && (
        <Card className="bg-muted/50 border-muted">
          <CardContent className="p-3 flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground mr-1">Active filters:</span>
            {filters.name && (
              <Badge variant="outline" className="flex items-center gap-1">
                Name: {filters.name}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setFilters(prev => ({ ...prev, name: '' }))} 
                />
              </Badge>
            )}
            {filters.category && (
              <Badge variant="outline" className="flex items-center gap-1">
                Category: {filters.category}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setFilters(prev => ({ ...prev, category: '' }))} 
                />
              </Badge>
            )}
            {filters.isPair !== '' && (
              <Badge variant="outline" className="flex items-center gap-1">
                {filters.isPair ? 'Pair Tag' : 'Single Tag'}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setFilters(prev => ({ ...prev, isPair: '' }))} 
                />
              </Badge>
            )}
            {filters.display && (
              <Badge variant="outline" className="flex items-center gap-1">
                Display: {filters.display}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setFilters(prev => ({ ...prev, display: '' }))} 
                />
              </Badge>
            )}
            {filters.hasGlobalAttributes !== '' && (
              <Badge variant="outline" className="flex items-center gap-1">
                {filters.hasGlobalAttributes ? 'Has Global Attrs' : 'No Global Attrs'}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setFilters(prev => ({ ...prev, hasGlobalAttributes: '' }))} 
                />
              </Badge>
            )}
          </CardContent>
        </Card>
      )}
      
      <div className="rounded-md border bg-white overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] cursor-pointer" onClick={() => handleSort('name')}>
                <div className="flex items-center">
                  Tag Name
                  {sortConfig.key === 'name' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('description')}>
                <div className="flex items-center">
                  Description
                  {sortConfig.key === 'description' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead className="w-[100px] cursor-pointer" onClick={() => handleSort('isPair')}>
                <div className="flex items-center">
                  Type
                  {sortConfig.key === 'isPair' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead className="w-[100px] cursor-pointer" onClick={() => handleSort('display')}>
                <div className="flex items-center">
                  Display
                  {sortConfig.key === 'display' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead className="w-[110px] cursor-pointer" onClick={() => handleSort('hasGlobalAttributes')}>
                <div className="flex items-center">
                  Global Attrs
                  {sortConfig.key === 'hasGlobalAttributes' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead className="w-[140px] cursor-pointer" onClick={() => handleSort('category')}>
                <div className="flex items-center">
                  Category
                  {sortConfig.key === 'category' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTags.length > 0 ? (
              sortedTags.map((tag) => (
                <TableRow 
                  key={tag.name}
                  className="hover:bg-muted/50 cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  <TableCell className="font-mono font-medium">
                    &lt;{tag.name}&gt;
                  </TableCell>
                  <TableCell className="max-w-[400px] truncate">{tag.description}</TableCell>
                  <TableCell>
                    {tag.isPair ? (
                      <Badge variant="outline" className="bg-blue-50">Pair</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-50">Single</Badge>
                    )}
                  </TableCell>
                  <TableCell>{tag.display}</TableCell>
                  <TableCell>
                    {tag.hasGlobalAttributes ? (
                      <Badge variant="outline" className="bg-green-50">Yes</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-50">No</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="whitespace-nowrap">
                      {tag.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTag(tag);
                      }}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-sm text-gray-500 text-right">
        Showing {sortedTags.length} of {htmlTags.length} tags
      </div>
      
      {selectedTag && (
        <Dialog open={!!selectedTag} onOpenChange={(open) => !open && setSelectedTag(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-mono">
                &lt;{selectedTag.name}&gt;
              </DialogTitle>
            </DialogHeader>
            <TagDetail tag={selectedTag} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
