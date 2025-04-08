
import React from 'react';
import { HtmlTag } from '@/types/tag';
import { Badge } from '@/components/ui/badge';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from '@/components/ui/separator';

interface TagDetailProps {
  tag: HtmlTag;
}

export const TagDetail: React.FC<TagDetailProps> = ({ tag }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-gray-500">
          {tag.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="outline" className={tag.isPair ? "bg-blue-50" : "bg-amber-50"}>
            {tag.isPair ? 'Pair Tag' : 'Single Tag'}
          </Badge>
          <Badge variant="outline" className="bg-purple-50">
            Display: {tag.display}
          </Badge>
          <Badge variant="outline" className={tag.hasGlobalAttributes ? "bg-green-50" : "bg-red-50"}>
            {tag.hasGlobalAttributes ? 'Has Global Attributes' : 'No Global Attributes'}
          </Badge>
          <Badge variant="secondary" className="bg-gray-100">
            {tag.category}
          </Badge>
        </div>
      </div>
      
      <Separator />
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="usage">
          <AccordionTrigger>Usage</AccordionTrigger>
          <AccordionContent>
            <div className="font-mono bg-gray-50 p-3 rounded-md text-sm">
              {tag.isPair ? (
                <>
                  <div>{`<${tag.name}>`}</div>
                  <div className="pl-4">Content</div>
                  <div>{`</${tag.name}>`}</div>
                </>
              ) : (
                <div>{`<${tag.name}>`}</div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {tag.specificAttributes.length > 0 && (
          <AccordionItem value="specific-attributes">
            <AccordionTrigger>Specific Attributes</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tag.specificAttributes.map((attr) => (
                  <Badge key={attr} variant="outline" className="justify-start font-mono text-xs sm:text-sm">
                    {attr}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
        
        {tag.eventListeners.length > 0 && (
          <AccordionItem value="event-listeners">
            <AccordionTrigger>Event Listeners</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tag.eventListeners.map((event) => (
                  <Badge key={event} variant="outline" className="justify-start font-mono text-xs sm:text-sm">
                    {event}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
      
      <Separator />
      
      <div className="text-xs text-gray-500">
        <p>Note: This is a reference display of the HTML tag. For complete and up-to-date information, please refer to the <a href={`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag.name}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MDN Web Docs</a>.</p>
      </div>
    </div>
  );
};
