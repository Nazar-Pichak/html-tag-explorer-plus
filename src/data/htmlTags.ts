import { HtmlTag } from '@/types/tag';

export const htmlTags: HtmlTag[] = [
  {
    name: 'a',
    description: 'Creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['href', 'download', 'hreflang', 'ping', 'referrerpolicy', 'rel', 'target', 'type'],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'abbr',
    description: 'Represents an abbreviation or acronym.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'address',
    description: 'Indicates contact information for a person or organization.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'area',
    description: 'Defines an area inside an image map that has predefined clickable areas.',
    isPair: false,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['alt', 'coords', 'download', 'href', 'hreflang', 'ping', 'referrerpolicy', 'rel', 'shape', 'target'],
    eventListeners: [],
    category: 'Image & Multimedia'
  },
  {
    name: 'article',
    description: 'Represents a self-contained composition in a document, page, application, or site.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Sectioning'
  },
  {
    name: 'aside',
    description: 'Represents a portion of a document whose content is only indirectly related to the main content.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Sectioning'
  },
  {
    name: 'audio',
    description: 'Embeds sound content in documents.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['autoplay', 'controls', 'crossorigin', 'loop', 'muted', 'preload', 'src'],
    eventListeners: [],
    category: 'Image & Multimedia'
  },
  {
    name: 'b',
    description: "Draw the reader's attention to the element's contents, which are not otherwise granted special importance.",
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'base',
    description: 'Specifies the base URL to use for all relative URLs in a document.',
    isPair: false,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['href', 'target'],
    eventListeners: [],
    category: 'Document Metadata'
  },
  {
    name: 'bdi',
    description: 'Isolates a span of text that might be formatted in a different direction from other text outside it.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'bdo',
    description: 'Overrides the current directionality of text.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['dir'],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'blockquote',
    description: 'Indicates that the enclosed text is an extended quotation.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['cite'],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'body',
    description: 'Represents the content of an HTML document.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: ['onafterprint', 'onbeforeprint', 'onbeforeunload', 'onhashchange', 'onlanguagechange', 'onmessage', 'onoffline', 'ononline', 'onpopstate', 'onrejectionhandled', 'onstorage', 'onunhandledrejection', 'onunload'],
    category: 'Root'
  },
  {
    name: 'br',
    description: 'Produces a line break in text.',
    isPair: false,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'button',
    description: 'Represents a clickable button.',
    isPair: true,
    display: 'inline-block',
    hasGlobalAttributes: true,
    specificAttributes: ['autofocus', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'name', 'type', 'value'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'canvas',
    description: 'Used to draw graphics via scripting (usually JavaScript).',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['height', 'width'],
    eventListeners: [],
    category: 'Scripting'
  },
  {
    name: 'caption',
    description: 'Specifies the caption (or title) of a table.',
    isPair: true,
    display: 'table-caption',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'cite',
    description: 'Represents the title of a work.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'code',
    description: 'Displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'col',
    description: 'Defines a column within a table and is used for defining common semantics on all common cells.',
    isPair: false,
    display: 'table-column',
    hasGlobalAttributes: true,
    specificAttributes: ['span'],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'colgroup',
    description: 'Defines a group of columns within a table.',
    isPair: true,
    display: 'table-column-group',
    hasGlobalAttributes: true,
    specificAttributes: ['span'],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'data',
    description: 'Links a given piece of content with a machine-readable translation.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['value'],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'datalist',
    description: 'Contains a set of option elements that represent predefined options for other controls.',
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'dd',
    description: 'Provides the description, definition, or value for the preceding term in a description list.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'del',
    description: 'Represents a range of text that has been deleted from a document.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['cite', 'datetime'],
    eventListeners: [],
    category: 'Demarcating Edits'
  },
  {
    name: 'details',
    description: 'Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['open'],
    eventListeners: [],
    category: 'Interactive'
  },
  {
    name: 'dfn',
    description: 'Indicates the term being defined within the context of a definition phrase or sentence.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'dialog',
    description: 'Represents a dialog box or other interactive component.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['open'],
    eventListeners: [],
    category: 'Interactive'
  },
  {
    name: 'div',
    description: 'Generic container for flow content that by itself does not represent anything.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'dl',
    description: 'Represents a description list.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'dt',
    description: 'Specifies a term in a description list.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  }
];
