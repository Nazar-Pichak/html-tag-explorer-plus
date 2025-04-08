
interface GlobalAttribute {
  name: string;
  description: string;
  values: string[];
  applicableTags: string[];
}

export const globalAttributes: GlobalAttribute[] = [
  {
    name: "accesskey",
    description: "Specifies a keyboard shortcut to activate or focus an element.",
    values: ["Character", "Space-separated list of characters"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "autocapitalize",
    description: "Controls whether and how text input is automatically capitalized as it is entered by the user.",
    values: ["off", "none", "on", "sentences", "words", "characters"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "autocorrect",
    description: "A non-standard attribute used by Safari that controls whether and how text input is automatically corrected during typing.",
    values: ["on", "off"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "autofocus",
    description: "Specifies that an element should automatically get focus when the page loads, or when the dialog that contains it is shown.",
    values: ["", "autofocus"],
    applicableTags: ["button", "input", "select", "textarea"]
  },
  {
    name: "class",
    description: "A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements.",
    values: ["CSS class names"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "contenteditable",
    description: "Indicates whether the element's content is editable.",
    values: ["true", "false"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "data-*",
    description: "Forms a class of attributes that allows proprietary information to be exchanged between the HTML and its DOM representation.",
    values: ["Any string value"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "dir",
    description: "Specifies the text direction for the content in an element.",
    values: ["ltr", "rtl", "auto"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "draggable",
    description: "Specifies whether an element is draggable.",
    values: ["true", "false", "auto"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "enterkeyhint",
    description: "Defines what action label or icon to present for the enter key on virtual keyboards.",
    values: ["enter", "done", "go", "next", "previous", "search", "send"],
    applicableTags: ["All HTML elements with contenteditable enabled", "input", "textarea"]
  },
  {
    name: "hidden",
    description: "Specifies that an element is not yet, or is no longer, relevant and is not rendered.",
    values: ["", "hidden", "until-found"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "id",
    description: "Specifies a unique id for an element which must be unique in the whole document.",
    values: ["Any unique string identifier"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "inert",
    description: "Indicates that the element is to be made inert (unresponsive to user input).",
    values: ["", "inert"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "inputmode",
    description: "Provides a hint to browsers about the type of virtual keyboard configuration to use when editing this element.",
    values: ["none", "text", "decimal", "numeric", "tel", "search", "email", "url"],
    applicableTags: ["All HTML elements with contenteditable enabled", "input", "textarea"]
  },
  {
    name: "is",
    description: "Specifies which custom built-in element the element should behave as.",
    values: ["Any valid custom element name"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "itemid",
    description: "Microdata attribute that establishes a microdata item with the specified ID.",
    values: ["Valid URL or URI"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "itemprop",
    description: "Microdata attribute that adds a property to an item.",
    values: ["Any string value"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "itemref",
    description: "Microdata attribute that specifies additional elements that are not descendants of the itemscope that contain properties of the item.",
    values: ["Space-separated list of element IDs"],
    applicableTags: ["All HTML elements with itemscope"]
  },
  {
    name: "itemscope",
    description: "Microdata attribute that creates a new item, a group of name-value pairs.",
    values: ["", "itemscope"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "itemtype",
    description: "Microdata attribute that specifies the URL of the vocabulary that will be used to define the item properties.",
    values: ["Valid URL"],
    applicableTags: ["All HTML elements with itemscope"]
  },
  {
    name: "lang",
    description: "Specifies the language of the element's content.",
    values: ["Valid language code (e.g., 'en', 'fr', 'de')"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "nonce",
    description: "A cryptographic nonce (number used once) used by Content Security Policy to determine whether a given fetch will be allowed to proceed.",
    values: ["Base64-encoded cryptographic nonce"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "part",
    description: "A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree.",
    values: ["CSS part names"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "popover",
    description: "Indicates that the element is a popover element.",
    values: ["auto", "manual"],
    applicableTags: ["All HTML elements except dialog"]
  },
  {
    name: "slot",
    description: "Assigns a slot in a shadow DOM shadow tree to an element.",
    values: ["Any string value"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "spellcheck",
    description: "Specifies whether the element is to have its spelling and grammar checked.",
    values: ["true", "false"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "style",
    description: "Contains CSS styling declarations to be applied to the element.",
    values: ["Any valid CSS style string"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "tabindex",
    description: "Specifies the tab order of an element (when the tab button is used for navigating).",
    values: ["Integer (negative, zero, or positive)"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "title",
    description: "Contains a text representing advisory information related to the element.",
    values: ["Any string value"],
    applicableTags: ["All HTML elements"]
  },
  {
    name: "translate",
    description: "Specifies whether the content of an element should be translated or not.",
    values: ["yes", "no"],
    applicableTags: ["All HTML elements"]
  }
];
