
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HtmlTag } from '@/types/tag';
import { Card, CardContent } from '@/components/ui/card';

interface ResponsiveTagViewProps {
  tags: HtmlTag[];
  onSelectTag: (tag: HtmlTag) => void;
}

export const ResponsiveTagView: React.FC<ResponsiveTagViewProps> = ({ tags, onSelectTag }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {tags.map((tag) => (
        <Card 
          key={tag.name}
          className={tag.category === 'Obsolete & Deprecated' ? 'bg-red-200 hover:bg-red-300 border-red-300' : ''}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-mono font-medium text-sm">&lt;{tag.name}&gt;</h3>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">{tag.description}</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onSelectTag(tag)}
              >
                Details
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {tag.isPair ? (
                <Badge variant="outline" className="bg-blue-100">Pair</Badge>
              ) : (
                <Badge variant="outline" className="bg-amber-100">Single</Badge>
              )}
              {tag.hasGlobalAttributes ? (
                <Badge variant="outline" className="bg-green-100 text-xs">Global Attrs</Badge>
              ) : (
                <Badge variant="outline" className="bg-red-100 text-xs">No Global</Badge>
              )}
              <Badge variant="secondary" className="text-xs">
                {tag.display}
              </Badge>
              <Badge variant="secondary" className="text-xs whitespace-nowrap">
                {tag.category}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
