
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterState, HtmlTag, TagCategory } from '@/types/tag';

interface FilterControlsProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onClear: () => void;
  onApply: () => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  filters,
  setFilters,
  onClear,
  onApply
}) => {
  const displayOptions: HtmlTag['display'][] = [
    'block',
    'inline',
    'inline-block',
    'flex',
    'grid',
    'table',
    'none',
    'other'
  ];

  const categoryOptions: TagCategory[] = [
    'Root',
    'Document Metadata',
    'Sectioning',
    'Content',
    'Text',
    'Inline Text',
    'Image & Multimedia',
    'Embedded Content',
    'Scripting',
    'Demarcating Edits',
    'Table',
    'Forms',
    'Interactive',
    'Web Components',
    'Obsolete & Deprecated'
  ];

  return (
    <div className="space-y-4 py-2">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Tag Name</Label>
          <Input
            id="name"
            placeholder="Filter by tag name"
            value={filters.name}
            onChange={(e) => setFilters((prev) => ({ ...prev, name: e.target.value }))}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={filters.category}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, category: value as TagCategory }))}
          >
            <SelectTrigger id="category" className="truncate">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="max-h-[280px]">
              <SelectItem value="">All Categories</SelectItem>
              {categoryOptions.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="isPair">Tag Type</Label>
          <Select
            value={filters.isPair === '' ? 'all-types' : filters.isPair ? 'true' : 'false'}
            onValueChange={(value) => {
              const boolValue = value === 'all-types' ? '' : value === 'true';
              setFilters((prev) => ({ ...prev, isPair: boolValue }));
            }}
          >
            <SelectTrigger id="isPair">
              <SelectValue placeholder="Select tag type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Types</SelectItem>
              <SelectItem value="true">Pair Tags</SelectItem>
              <SelectItem value="false">Single Tags</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="display">Display Type</Label>
          <Select
            value={filters.display || 'all-display-types'}
            onValueChange={(value) => setFilters((prev) => ({ 
              ...prev, 
              display: value === 'all-display-types' ? '' : value as HtmlTag['display'] 
            }))}
          >
            <SelectTrigger id="display">
              <SelectValue placeholder="Select display type" />
            </SelectTrigger>
            <SelectContent className="max-h-[280px]">
              <SelectItem value="all-display-types">All Display Types</SelectItem>
              {displayOptions.map((display) => (
                <SelectItem key={display} value={display}>
                  {display}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="globalAttrs">Global Attributes</Label>
          <Select
            value={filters.hasGlobalAttributes === '' ? 'all-attrs' : filters.hasGlobalAttributes ? 'true' : 'false'}
            onValueChange={(value) => {
              const boolValue = value === 'all-attrs' ? '' : value === 'true';
              setFilters((prev) => ({ ...prev, hasGlobalAttributes: boolValue }));
            }}
          >
            <SelectTrigger id="globalAttrs">
              <SelectValue placeholder="Select global attributes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-attrs">All</SelectItem>
              <SelectItem value="true">Has Global Attributes</SelectItem>
              <SelectItem value="false">No Global Attributes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onClear}>Clear All</Button>
        <Button onClick={onApply}>Apply Filters</Button>
      </div>
    </div>
  );
};
