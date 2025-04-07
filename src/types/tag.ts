
export interface HtmlTag {
  name: string;
  description: string;
  isPair: boolean;
  display: 'block' | 'inline' | 'none' | 'inline-block' | 'flex' | 'grid' | 'table' | 'table-caption' | 'table-column' | 'table-column-group' | 'table-row' | 'table-cell' | 'other';
  hasGlobalAttributes: boolean;
  specificAttributes: string[];
  eventListeners: string[];
  category: TagCategory;
}

export type TagCategory = 
  | 'Root' 
  | 'Document Metadata'
  | 'Sectioning'
  | 'Content'
  | 'Text'
  | 'Inline Text'
  | 'Image & Multimedia'
  | 'Embedded Content'
  | 'Scripting'
  | 'Demarcating Edits'
  | 'Table'
  | 'Forms'
  | 'Interactive'
  | 'Web Components'
  | 'Obsolete & Deprecated';

export type SortDirection = 'asc' | 'desc';

export interface FilterState {
  name: string;
  category: TagCategory | '';
  isPair: boolean | '';
  display: HtmlTag['display'] | '';
  hasGlobalAttributes: boolean | '';
}
