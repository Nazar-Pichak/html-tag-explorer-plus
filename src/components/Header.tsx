
import React from 'react';
import { Code2, Tag, Info, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  showGlobalAttributesLink?: boolean;
  showBackToTagsButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  showGlobalAttributesLink = true,
  showBackToTagsButton = false
}) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
          <Link to="/" className={`${isMobile ? "text-lg" : "text-xl"} font-bold text-gray-900 hover:text-blue-700 transition-colors`}>
            HTML Tag Explorer
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {showGlobalAttributesLink && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 bg-transparent">Explore</NavigationMenuTrigger>
                  <NavigationMenuContent className="left-0 right-auto origin-top-left">
                    <ul className="grid gap-3 p-4 w-[220px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded">
                            <Tag size={16} />
                            <div>
                              <div className="text-sm font-medium">HTML Tags</div>
                              <p className="text-xs text-muted-foreground">All HTML elements</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/global-attributes" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded">
                            <Info size={16} />
                            <div>
                              <div className="text-sm font-medium">Global Attributes</div>
                              <p className="text-xs text-muted-foreground">Universal HTML attributes</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
          
          {showBackToTagsButton && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="flex items-center gap-1 mr-2"
            >
              <Link to="/">
                <ArrowLeft size={16} />
                <span>{isMobile ? "Tags" : "Back to Tags"}</span>
              </Link>
            </Button>
          )}
          
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
