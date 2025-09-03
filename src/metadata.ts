// Auto-generated file. Do not edit manually.

export interface ComponentMetadata {
  name: string;
  description: string;
  category?: string;
  props: Record<string, string>;
  initialValues: Record<string, any>;
  type: 'component';
}

export const componentMetadata: ComponentMetadata[] = [
  {
    "name": "Alert",
    "description": "Alert component",
    "category": "Components",
    "props": {
      "variant": "purple | info | error | warning | success",
      "title": "string",
      "children": "React.ReactNode",
      "onClose": "() => void",
      "actions": "AlertAction[]",
      "className": "string"
    },
    "initialValues": {
      "variant": "info",
      "title": "Alert Title",
      "children": "Alert",
      "onClose": null,
      "actions": null,
      "className": ""
    },
    "type": "component"
  },
  {
    "name": "Button",
    "description": "Button component",
    "category": "Form Elements",
    "props": {
      "label": "string",
      "variant": "primary | secondary | tertiary",
      "size": "xs | sm | md | lg",
      "icon": "React.ReactNode",
      "iconPosition": "start | end",
      "onlyIcon": "boolean",
      "error": "boolean",
      "color": "boolean",
      "permissionId": "string"
    },
    "initialValues": {
      "label": "Button",
      "variant": "primary",
      "size": "md",
      "icon": null,
      "iconPosition": "start",
      "onlyIcon": false,
      "error": false,
      "color": false,
      "permissionId": null,
      "disabled": false
    },
    "type": "component"
  },
  {
    "name": "Dropdown",
    "description": "Dropdown component",
    "category": "Components",
    "props": {
      "user": "object",
      "name": "string",
      "email": "string",
      "avatar": "string"
    },
    "initialValues": {
      "user": {
        "name": "John Doe",
        "email": "john.doe@getir.com",
        "avatar": null
      },
      "name": "Dropdown",
      "email": "Dropdown",
      "avatar": "Dropdown",
      "sections": [
        {
          "subheader": "Subheader",
          "items": [
            {
              "label": "Label",
              "value": "1"
            },
            {
              "label": "Label",
              "value": "2"
            },
            {
              "label": "Label",
              "value": "3"
            }
          ]
        },
        {
          "subheader": "Subheader",
          "items": [
            {
              "label": "Label",
              "value": "4"
            },
            {
              "label": "Label",
              "value": "5"
            },
            {
              "label": "Label",
              "value": "6"
            }
          ]
        },
        {
          "subheader": "Subheader",
          "items": [
            {
              "label": "Label",
              "value": "7"
            },
            {
              "label": "Label",
              "value": "8"
            },
            {
              "label": "Label",
              "value": "9"
            }
          ]
        }
      ],
      "triggerIcon": "arrowUp",
      "defaultOpen": false,
      "open": null,
      "onOpenChange": null,
      "onItemSelect": null,
      "className": "",
      "disabled": false
    },
    "type": "component"
  },
  {
    "name": "InfoTooltip",
    "description": "InfoTooltip component",
    "category": "Components",
    "props": {
      "title": "string",
      "content": "string",
      "placement": " | top-start | top | top-end | right-start | right | right-end | bottom-start | bottom | bottom-end | left-start | left | left-end",
      "scheme": "dark | light",
      "visible": "boolean",
      "permissionId": "string"
    },
    "initialValues": {
      "title": "Info",
      "content": "Info tooltip content",
      "placement": "top",
      "scheme": "dark",
      "visible": false,
      "permissionId": null
    },
    "type": "component"
  },
  {
    "name": "Modal",
    "description": "Modal component",
    "category": "Feedback",
    "props": {
      "isOpen": "boolean",
      "onClose": "() => void",
      "title": "string",
      "children": "React.ReactNode",
      "size": "sm | md | lg",
      "variant": "default | success | warning | error",
      "footerActions": "React.ReactNode"
    },
    "initialValues": {
      "isOpen": false,
      "onClose": null,
      "title": "Modal Title",
      "children": "Modal",
      "size": "md",
      "variant": "default",
      "footerActions": null
    },
    "type": "component"
  },
  {
    "name": "Notification",
    "description": "Notification component",
    "category": "Feedback",
    "props": {
      "open": "boolean",
      "variant": "info | error | warning | success",
      "position": " | top-left | top-center | top-right | middle-left | middle-center | middle-right | bottom-left | bottom-center | bottom-right",
      "title": "string",
      "description": "string",
      "primaryAction": "object",
      "secondaryAction": "object",
      "onClose": "() => void",
      "permissionId": "string",
      "durationMs": "number",
      "offsetPx": "number"
    },
    "initialValues": {
      "open": false,
      "variant": "info",
      "position": "top-right",
      "title": "Notification Title",
      "description": "Notification description goes here",
      "primaryAction": null,
      "secondaryAction": null,
      "onClose": null,
      "permissionId": null,
      "durationMs": null,
      "offsetPx": 0
    },
    "type": "component"
  },
  {
    "name": "Badge",
    "description": "Badge component",
    "category": "Components",
    "props": {
      "children": "React.ReactNode",
      "size": "sm | md | lg",
      "variant": "filled | withDot | withCheck",
      "color": " | gray | purple | getir | red | orange | green | yellow | riteg | blue | pink | teal",
      "iconPosition": "start | end",
      "tone": "filled | light",
      "permissionId": "string"
    },
    "initialValues": {
      "children": "Badge",
      "size": "md",
      "variant": "filled",
      "color": "gray",
      "iconPosition": "start",
      "tone": "filled",
      "permissionId": null
    },
    "type": "component"
  },
  {
    "name": "Icon",
    "description": "Icon component",
    "category": "Components",
    "props": {
      "name": "IconName",
      "size": "number",
      "className": "string"
    },
    "initialValues": {
      "name": "Check",
      "size": 16,
      "className": null
    },
    "type": "component"
  },
  {
    "name": "Image",
    "description": "Image component",
    "category": "Display",
    "props": {
      "src": "string",
      "alt": "string",
      "fallbackSrc": "string",
      "width": "number | string",
      "height": "number | string",
      "objectFit": "contain | cover | fill | none | scale-down",
      "radius": "none | sm | md | lg | xl | full",
      "shadow": "none | sm | md | lg | xl",
      "loading": "lazy | eager",
      "placeholder": "blur | none",
      "aspectRatio": "string",
      "skeleton": "boolean",
      "onClick": "() => void",
      "hover": "none | scale | lift | glow",
      "quality": "low | medium | high",
      "responsive": "object",
      "sm": "string",
      "md": "string",
      "lg": "string",
      "xl": "string"
    },
    "initialValues": {
      "src": "https://picsum.photos/150/150?random=1",
      "alt": "Image",
      "fallbackSrc": "https://picsum.photos/150/150?random=2",
      "width": 150,
      "height": 150,
      "objectFit": "cover",
      "radius": "none",
      "shadow": "none",
      "loading": "lazy",
      "placeholder": "none",
      "aspectRatio": null,
      "skeleton": false,
      "onClick": null,
      "hover": "none",
      "quality": "medium",
      "responsive": null,
      "sm": "Image",
      "md": "Image",
      "lg": "Image",
      "xl": "Image"
    },
    "type": "component"
  },
  {
    "name": "InfoBadge",
    "description": "InfoBadge component",
    "category": "Components",
    "props": {
      "children": "React.ReactNode",
      "className": "string"
    },
    "initialValues": {
      "children": "InfoBadge",
      "className": ""
    },
    "type": "component"
  },
  {
    "name": "Line",
    "description": "Line component",
    "category": "Display Elements",
    "props": {
      "variant": "solid | dashed | dotted",
      "color": "default | muted | brand | error | success | warning | info",
      "size": "sm | md | lg",
      "className": "string",
      "style": "React.CSSProperties"
    },
    "initialValues": {
      "variant": "solid",
      "color": "default",
      "size": "md",
      "className": null,
      "style": null
    },
    "type": "component"
  },
  {
    "name": "Paragraph",
    "description": "Paragraph component",
    "category": "Display",
    "props": {
      "children": "React.ReactNode",
      "variant": "display-xl | display-lg | display-md | display-sm | display-xs | text-xl | text-lg | text-md | text-sm | text-xs | text-x2s",
      "weight": "regular | medium | semiBold | bold",
      "color": "default | muted | brand | error | success | warning | info",
      "align": "left | center | right | justify",
      "transform": "none | uppercase | lowercase | capitalize",
      "decoration": "none | underline | line-through | overline",
      "maxLines": "number",
      "interactive": "boolean",
      "hover": "none | underline | color | scale",
      "as": "p | div | span | article | section",
      "fontFamily": "default | modal",
      "spacing": "none | tight | normal | loose",
      "indent": "boolean",
      "leading": "tight | normal | loose"
    },
    "initialValues": {
      "children": "Paragraph",
      "variant": "text-md",
      "weight": "regular",
      "color": "default",
      "align": "left",
      "transform": "none",
      "decoration": "none",
      "maxLines": null,
      "interactive": false,
      "hover": "none",
      "as": "p",
      "fontFamily": "default",
      "spacing": "normal",
      "indent": false,
      "leading": "normal"
    },
    "type": "component"
  },
  {
    "name": "Text",
    "description": "Text component",
    "category": "Display",
    "props": {
      "children": "React.ReactNode",
      "variant": "display-xl | display-lg | display-md | display-sm | display-xs | text-xl | text-lg | text-md | text-sm | text-xs | text-x2s",
      "weight": "regular | medium | semiBold | bold",
      "color": "default | muted | brand | error | success | warning | info",
      "align": "left | center | right | justify",
      "transform": "none | uppercase | lowercase | capitalize",
      "decoration": "none | underline | line-through | overline",
      "truncate": "boolean",
      "maxLines": "number",
      "interactive": "boolean",
      "hover": "none | underline | color | scale",
      "as": "span | p | div | h1 | h2 | h3 | h4 | h5 | h6 | label | strong | em | small",
      "fontFamily": "default | modal"
    },
    "initialValues": {
      "children": "Text",
      "variant": "text-sm",
      "weight": "regular",
      "color": "default",
      "align": "left",
      "transform": "none",
      "decoration": "none",
      "truncate": false,
      "maxLines": null,
      "interactive": false,
      "hover": "none",
      "as": "span",
      "fontFamily": "default"
    },
    "type": "component"
  },
  {
    "name": "Breadcrumb",
    "description": "Breadcrumb component",
    "category": "Navigation",
    "props": {
      "items": "BreadcrumbItem[]",
      "showHome": "boolean",
      "separator": "React.ReactNode",
      "permissionId": "string"
    },
    "initialValues": {
      "items": [
        {
          "label": "Page",
          "href": "/page"
        }
      ],
      "showHome": true,
      "separator": "/",
      "permissionId": null
    },
    "type": "component"
  },
  {
    "name": "CheckboxGroup",
    "description": "CheckboxGroup component",
    "category": "Form Elements",
    "props": {
      "onChange": "(e: ChangeEvent<HTMLInputElement>) => void",
      "error": "boolean",
      "indeterminate": "boolean",
      "label": "string",
      "badge": "string",
      "disabled": "boolean",
      "checked": "boolean",
      "hint": "string",
      "id": "string"
    },
    "initialValues": {
      "onChange": null,
      "error": false,
      "indeterminate": false,
      "label": "Checkbox Group",
      "badge": null,
      "disabled": false,
      "checked": false,
      "hint": null,
      "id": "CheckboxGroup"
    },
    "type": "component"
  },
  {
    "name": "InputGroup",
    "description": "InputGroup component",
    "category": "Form Elements",
    "props": {
      "label": "string",
      "required": "boolean",
      "tooltip": "string",
      "showInfo": "boolean",
      "hint": "string",
      "errorMessage": "string",
      "permissionId": "string",
      "placeholder": "string",
      "icon": "React.ReactNode",
      "disabled": "boolean",
      "error": "boolean"
    },
    "initialValues": {
      "label": "Input Group Label",
      "required": false,
      "tooltip": null,
      "showInfo": true,
      "hint": null,
      "errorMessage": null,
      "permissionId": null,
      "placeholder": "Input Group Placeholder",
      "icon": null,
      "disabled": false,
      "error": false
    },
    "type": "component"
  },
  {
    "name": "SelectGroup",
    "description": "SelectGroup component",
    "category": "Form Elements",
    "props": {
      "onChange": "(value: string) => void",
      "defaultValue": "string",
      "id": "string",
      "options": "SelectOption[]",
      "value": "string",
      "placeholder": "string",
      "emptyText": "string",
      "disabled": "boolean",
      "error": "boolean",
      "label": "string",
      "required": "boolean",
      "tooltip": "string",
      "showInfo": "boolean",
      "hint": "string",
      "errorMessage": "string",
      "permissionId": "string",
      "title": "string"
    },
    "initialValues": {
      "onChange": null,
      "defaultValue": "",
      "id": "SelectGroup",
      "options": [
        {
          "label": "Option 1",
          "value": "option1"
        },
        {
          "label": "Option 2",
          "value": "option2"
        }
      ],
      "value": "",
      "placeholder": "Select",
      "emptyText": null,
      "disabled": false,
      "error": false,
      "label": "Label",
      "required": false,
      "tooltip": "Helper info",
      "showInfo": true,
      "hint": "Helper info",
      "errorMessage": null,
      "permissionId": null,
      "title": "SelectGroup"
    },
    "type": "component"
  },
  {
    "name": "Switch",
    "description": "Switch component",
    "category": "Form Elements",
    "props": {
      "label": "string",
      "hint": "string",
      "size": "sm | md",
      "badge": "string",
      "reverse": "boolean",
      "spaceBetween": "boolean",
      "checked": "boolean",
      "onToggle": "(checked: boolean) => void"
    },
    "initialValues": {
      "label": "Switch Label",
      "hint": "Switch Hint",
      "size": "md",
      "badge": "Switch Badge",
      "reverse": false,
      "spaceBetween": false,
      "checked": false,
      "onToggle": null
    },
    "type": "component"
  },
  {
    "name": "TextboxGroup",
    "description": "TextboxGroup component",
    "category": "Form Elements",
    "props": {
      "maxLength": "number",
      "error": "boolean",
      "label": "string",
      "required": "boolean",
      "tooltip": "string",
      "showInfo": "boolean",
      "hint": "string",
      "errorMessage": "string",
      "permissionId": "string",
      "placeholder": "string"
    },
    "initialValues": {
      "maxLength": 0,
      "error": false,
      "label": "Textbox Group Label",
      "required": false,
      "tooltip": null,
      "showInfo": true,
      "hint": "Textbox Group Hint",
      "errorMessage": null,
      "permissionId": null,
      "placeholder": "Textbox Group Placeholder"
    },
    "type": "component"
  }
];

export default componentMetadata;
