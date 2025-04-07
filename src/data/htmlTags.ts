
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
    name: 'acronym',
    description: 'Represents an acronym. Deprecated in HTML5.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
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
    name: 'big',
    description: 'Renders the enclosed text in a bigger font. Deprecated in HTML5.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
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
    name: 'center',
    description: 'Centers its content horizontally. Deprecated in HTML5.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
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
    name: 'dir',
    description: 'Directory list. Deprecated in HTML5.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
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
  },
  {
    name: 'em',
    description: 'Marks text that has stress emphasis.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'embed',
    description: 'Embeds external content at the specified point in the document.',
    isPair: false,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['height', 'src', 'type', 'width'],
    eventListeners: [],
    category: 'Embedded Content'
  },
  {
    name: 'fencedframe',
    description: 'An experimental element for embedding isolated content from another website.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['src'],
    eventListeners: [],
    category: 'Embedded Content'
  },
  {
    name: 'fieldset',
    description: 'Used to group several controls as well as labels within a web form.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['disabled', 'form', 'name'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'figcaption',
    description: 'Represents a caption or legend describing the rest of the contents of its parent figure element.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'figure',
    description: 'Represents self-contained content, potentially with an optional caption.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'font',
    description: 'Defines font, color, and size for text. Deprecated in HTML5.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['color', 'face', 'size'],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'footer',
    description: 'Represents a footer for its nearest sectioning content or sectioning root element.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Sectioning'
  },
  {
    name: 'form',
    description: 'Represents a document section containing interactive controls for submitting information.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novalidate', 'target'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'frame',
    description: 'Defines a particular area in which another HTML document can be displayed. Deprecated in HTML5.',
    isPair: false,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['src', 'name', 'frameborder', 'marginwidth', 'marginheight', 'noresize', 'scrolling'],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'frameset',
    description: 'Used to hold frame elements. Deprecated in HTML5.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['cols', 'rows'],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'h1',
    description: 'Represents a level 1 section heading, the highest heading level.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'h2',
    description: 'Represents a level 2 section heading.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'h3',
    description: 'Represents a level 3 section heading.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'h4',
    description: 'Represents a level 4 section heading.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'h5',
    description: 'Represents a level 5 section heading.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'h6',
    description: 'Represents a level 6 section heading, the lowest heading level.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'head',
    description: 'Contains machine-readable information (metadata) about the document.',
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Document Metadata'
  },
  {
    name: 'header',
    description: 'Represents introductory content, typically a group of introductory or navigational aids.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Sectioning'
  },
  {
    name: 'hgroup',
    description: 'Represents a heading and related content.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'hr',
    description: 'Represents a thematic break between paragraph-level elements.',
    isPair: false,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'html',
    description: 'Represents the root of an HTML document.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['xmlns'],
    eventListeners: [],
    category: 'Root'
  },
  {
    name: 'i',
    description: 'Represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'iframe',
    description: 'Represents a nested browsing context, embedding another HTML page into the current one.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['allow', 'allowfullscreen', 'allowpaymentrequest', 'height', 'loading', 'name', 'referrerpolicy', 'sandbox', 'src', 'srcdoc', 'width'],
    eventListeners: [],
    category: 'Embedded Content'
  },
  {
    name: 'img',
    description: 'Embeds an image into the document.',
    isPair: false,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['alt', 'crossorigin', 'decoding', 'height', 'ismap', 'loading', 'referrerpolicy', 'sizes', 'src', 'srcset', 'usemap', 'width'],
    eventListeners: [],
    category: 'Image & Multimedia'
  },
  {
    name: 'input',
    description: 'Used to create interactive controls for web-based forms in order to accept data from the user.',
    isPair: false,
    display: 'inline-block',
    hasGlobalAttributes: true,
    specificAttributes: ['accept', 'alt', 'autocomplete', 'autofocus', 'checked', 'dirname', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'height', 'list', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'src', 'step', 'type', 'value', 'width'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'ins',
    description: 'Represents a range of text that has been added to a document.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['cite', 'datetime'],
    eventListeners: [],
    category: 'Demarcating Edits'
  },
  {
    name: 'kbd',
    description: 'Represents user input, typically keyboard input.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'label',
    description: 'Represents a caption for an item in a user interface.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['for', 'form'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'legend',
    description: 'Represents a caption for the content of its parent fieldset.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'li',
    description: 'Represents an item in a list.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['value'],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'link',
    description: 'Specifies relationships between the current document and an external resource.',
    isPair: false,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['as', 'crossorigin', 'disabled', 'href', 'hreflang', 'media', 'rel', 'sizes', 'title', 'type'],
    eventListeners: [],
    category: 'Document Metadata'
  },
  {
    name: 'main',
    description: 'Represents the dominant content of the body of a document.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Sectioning'
  },
  {
    name: 'map',
    description: 'Used with area elements to define an image map.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['name'],
    eventListeners: [],
    category: 'Image & Multimedia'
  },
  {
    name: 'mark',
    description: 'Represents text which is marked or highlighted for reference or notation purposes.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'marquee',
    description: 'Used to create scrolling text or images. Deprecated.',
    isPair: true,
    display: 'inline-block',
    hasGlobalAttributes: true,
    specificAttributes: ['behavior', 'direction', 'scrollamount', 'scrolldelay'],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'menu',
    description: 'Represents a group of commands that a user can perform or activate.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Interactive'
  },
  {
    name: 'meta',
    description: 'Represents metadata that cannot be represented by other HTML meta-related elements.',
    isPair: false,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['charset', 'content', 'http-equiv', 'name'],
    eventListeners: [],
    category: 'Document Metadata'
  },
  {
    name: 'meter',
    description: 'Represents a scalar measurement within a known range, or a fractional value.',
    isPair: true,
    display: 'inline-block',
    hasGlobalAttributes: true,
    specificAttributes: ['form', 'high', 'low', 'max', 'min', 'optimum', 'value'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'nav',
    description: 'Represents a section of a page whose purpose is to provide navigation links.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Sectioning'
  },
  {
    name: 'nobr',
    description: 'Prevents the text it contains from automatically wrapping across multiple lines. Deprecated.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'noembed',
    description: 'Fallback content for browsers that don't support the embed element. Deprecated.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'noframes',
    description: 'Provides content to be presented in browsers that don't support frames. Deprecated in HTML5.',
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'noscript',
    description: 'Defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Scripting'
  },
  {
    name: 'object',
    description: 'Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['data', 'form', 'height', 'name', 'type', 'usemap', 'width'],
    eventListeners: [],
    category: 'Embedded Content'
  },
  {
    name: 'ol',
    description: 'Represents an ordered list of items.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: ['reversed', 'start', 'type'],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'optgroup',
    description: 'Creates a grouping of options within a select element.',
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['disabled', 'label'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'option',
    description: 'Used to define an item contained in a select, an optgroup, or a datalist element.',
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['disabled', 'label', 'selected', 'value'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'output',
    description: 'Represents the result of a calculation or user action.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['for', 'form', 'name'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'p',
    description: 'Represents a paragraph.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'param',
    description: 'Defines parameters for an object element. Deprecated in HTML5.',
    isPair: false,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['name', 'value'],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'picture',
    description: 'Contains zero or more source elements and one img element to offer alternative versions of an image for different display/device scenarios.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Image & Multimedia'
  },
  {
    name: 'plaintext',
    description: 'Renders everything following it as raw text, without interpreting any HTML. Deprecated.',
    isPair: false,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'pre',
    description: 'Represents preformatted text which is to be presented exactly as written in the HTML file.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'progress',
    description: 'Displays an indicator showing the completion progress of a task.',
    isPair: true,
    display: 'inline-block',
    hasGlobalAttributes: true,
    specificAttributes: ['max', 'value'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'q',
    description: 'Indicates that the enclosed text is a short inline quotation.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['cite'],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'rb',
    description: 'Used to delimit the base text component of a ruby annotation. Deprecated.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'rp',
    description: 'Used to provide fall-back parentheses for browsers that do not support ruby annotations.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Text'
  },
  {
    name: 'rt',
    description: 'Specifies the ruby text component of a ruby annotation.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Text'
  },
  {
    name: 'rtc',
    description: 'Embraces semantic annotations of characters presented in a ruby of rb elements. Deprecated.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'ruby',
    description: 'Represents a ruby annotation, which is used to provide pronunciation information for East Asian typography.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Text'
  },
  {
    name: 's',
    description: 'Renders text with a strikethrough, or a line through it.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'samp',
    description: 'Used to enclose inline text which represents sample (or quoted) output from a computer program.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'script',
    description: 'Used to embed executable code or data; this is typically used to embed or refer to JavaScript code.',
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['async', 'crossorigin', 'defer', 'integrity', 'nomodule', 'src', 'type'],
    eventListeners: [],
    category: 'Scripting'
  },
  {
    name: 'search',
    description: 'Represents a part of a document whose contents are specific to finding content within the document.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Sectioning'
  },
  {
    name: 'section',
    description: "Represents a standalone section of a document, which doesn't have a more specific semantic element to represent it.",
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Sectioning'
  },
  {
    name: 'select',
    description: 'Represents a control that provides a menu of options.',
    isPair: true,
    display: 'inline-block',
    hasGlobalAttributes: true,
    specificAttributes: ['autocomplete', 'autofocus', 'disabled', 'form', 'multiple', 'name', 'required', 'size'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'selectedcontent',
    description: 'Experimental element that contains a copy of the selected portion of a documentFragment.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Interactive'
  },
  {
    name: 'slot',
    description: 'Part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['name'],
    eventListeners: [],
    category: 'Web Components'
  },
  {
    name: 'small',
    description: 'Represents side-comments and small print, like copyright and legal text.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'source',
    description: 'Specifies multiple media resources for the picture, the audio element, or the video element.',
    isPair: false,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['media', 'sizes', 'src', 'srcset', 'type'],
    eventListeners: [],
    category: 'Image & Multimedia'
  },
  {
    name: 'span',
    description: 'Generic inline container for phrasing content, which does not inherently represent anything.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'strike',
    description: 'Renders text with a strikethrough, or a line through it. Deprecated in HTML5.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'strong',
    description: 'Indicates that its contents have strong importance, seriousness, or urgency.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'style',
    description: 'Contains style information for a document, or part of a document.',
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['media', 'type'],
    eventListeners: [],
    category: 'Document Metadata'
  },
  {
    name: 'sub',
    description: 'Defines inline text which should be displayed as subscript.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'summary',
    description: "Specifies a summary, caption, or legend for a details element's disclosure box.",
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Interactive'
  },
  {
    name: 'sup',
    description: 'Defines inline text which is to be displayed as superscript.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'table',
    description: 'Represents tabular data — that is, information presented in a two-dimensional table.',
    isPair: true,
    display: 'table',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'tbody',
    description: 'Encapsulates a set of table rows, indicating that they comprise the body of the table.',
    isPair: true,
    display: 'table',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'td',
    description: 'Defines a cell of a table that contains data.',
    isPair: true,
    display: 'table-cell',
    hasGlobalAttributes: true,
    specificAttributes: ['colspan', 'headers', 'rowspan'],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'template',
    description: 'A mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.',
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Web Components'
  },
  {
    name: 'textarea',
    description: 'Represents a multi-line plain-text editing control.',
    isPair: true,
    display: 'inline-block',
    hasGlobalAttributes: true,
    specificAttributes: ['autocomplete', 'autofocus', 'cols', 'dirname', 'disabled', 'form', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'wrap'],
    eventListeners: [],
    category: 'Forms'
  },
  {
    name: 'tfoot',
    description: 'Defines a set of rows summarizing the columns of the table.',
    isPair: true,
    display: 'table',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'th',
    description: 'Defines a cell as header of a group of table cells.',
    isPair: true,
    display: 'table-cell',
    hasGlobalAttributes: true,
    specificAttributes: ['abbr', 'colspan', 'headers', 'rowspan', 'scope'],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'thead',
    description: 'Defines a set of rows defining the head of the columns of the table.',
    isPair: true,
    display: 'table',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'time',
    description: 'Represents a specific period in time.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['datetime'],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'title',
    description: "Defines the document's title that is shown in a browser's title bar or a page's tab.",
    isPair: true,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Document Metadata'
  },
  {
    name: 'tr',
    description: 'Defines a row of cells in a table.',
    isPair: true,
    display: 'table-row',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Table'
  },
  {
    name: 'track',
    description: 'Used as a child of the media elements audio and video. It lets you specify timed text tracks.',
    isPair: false,
    display: 'none',
    hasGlobalAttributes: true,
    specificAttributes: ['default', 'kind', 'label', 'src', 'srclang'],
    eventListeners: [],
    category: 'Image & Multimedia'
  },
  {
    name: 'tt',
    description: 'Creates inline text which is presented using the user agent's default monospace font face. Deprecated in HTML5.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  },
  {
    name: 'u',
    description: 'Represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'ul',
    description: 'Represents an unordered list of items, typically rendered as a bulleted list.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Content'
  },
  {
    name: 'var',
    description: 'Represents the name of a variable in a mathematical expression or a programming context.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'video',
    description: 'Embeds a media player which supports video playback into the document.',
    isPair: true,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: ['autoplay', 'controls', 'crossorigin', 'height', 'loop', 'muted', 'playsinline', 'poster', 'preload', 'src', 'width'],
    eventListeners: [],
    category: 'Image & Multimedia'
  },
  {
    name: 'wbr',
    description: "Represents a word break opportunity—a position within text where the browser may optionally break a line.",
    isPair: false,
    display: 'inline',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Inline Text'
  },
  {
    name: 'xmp',
    description: 'Renders text between the start and end tags without interpreting the HTML in between. Deprecated in HTML5.',
    isPair: true,
    display: 'block',
    hasGlobalAttributes: true,
    specificAttributes: [],
    eventListeners: [],
    category: 'Obsolete & Deprecated'
  }
];
