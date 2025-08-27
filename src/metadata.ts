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
      "variant": "purple",
      "title": "Alert",
      "children": "Alert",
      "onClose": null,
      "actions": null,
      "className": "Alert"
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
      "user": {},
      "name": "Dropdown",
      "email": "Dropdown",
      "avatar": "Dropdown"
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
      "title": "InfoTooltip",
      "content": "InfoTooltip",
      "placement": null,
      "scheme": "dark",
      "visible": false,
      "permissionId": "InfoTooltip"
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
      "title": "Modal",
      "children": "Modal",
      "size": "md",
      "variant": "default",
      "footerActions": null
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
      "permissionId": "Button"
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
      "position": null,
      "title": "Notification",
      "description": "Notification",
      "primaryAction": {},
      "secondaryAction": {},
      "onClose": null,
      "permissionId": "Notification",
      "durationMs": 0,
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
      "color": null,
      "iconPosition": "start",
      "tone": "filled",
      "permissionId": "Badge"
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
      "name": null,
      "size": "number",
      "className": "Icon"
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
      "src": "Image",
      "alt": "Image",
      "fallbackSrc": "Image",
      "width": null,
      "height": null,
      "objectFit": "contain",
      "radius": "none",
      "shadow": "none",
      "loading": "lazy",
      "placeholder": "blur",
      "aspectRatio": "Image",
      "skeleton": false,
      "onClick": null,
      "hover": "none",
      "quality": "low",
      "responsive": {},
      "sm": "Image",
      "md": "Image",
      "lg": "Image",
      "xl": "Image"
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
      "variant": "display-xl",
      "weight": "regular",
      "color": "default",
      "align": "left",
      "transform": "none",
      "decoration": "none",
      "maxLines": 0,
      "interactive": false,
      "hover": "none",
      "as": "p",
      "fontFamily": "default",
      "spacing": "none",
      "indent": false,
      "leading": "tight"
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
      "variant": "display-xl",
      "weight": "regular",
      "color": "default",
      "align": "left",
      "transform": "none",
      "decoration": "none",
      "truncate": false,
      "maxLines": 0,
      "interactive": false,
      "hover": "none",
      "as": "span",
      "fontFamily": "default"
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
      "label": "CheckboxGroup",
      "badge": "CheckboxGroup",
      "disabled": false,
      "checked": false,
      "hint": "CheckboxGroup",
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
      "icon": "React.ReactNode",
      "title": "string",
      "disabled": "boolean",
      "error": "boolean"
    },
    "initialValues": {
      "label": "InputGroup",
      "required": false,
      "tooltip": "InputGroup",
      "showInfo": false,
      "hint": "InputGroup",
      "errorMessage": "InputGroup",
      "permissionId": "InputGroup",
      "icon": null,
      "title": "InputGroup",
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
      "defaultValue": "SelectGroup",
      "id": "SelectGroup",
      "options": null,
      "value": "SelectGroup",
      "placeholder": "SelectGroup",
      "emptyText": "SelectGroup",
      "disabled": false,
      "error": false,
      "label": "SelectGroup",
      "required": false,
      "tooltip": "SelectGroup",
      "showInfo": false,
      "hint": "SelectGroup",
      "errorMessage": "SelectGroup",
      "permissionId": "SelectGroup",
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
      "spaceBetween": "boolean"
    },
    "initialValues": {
      "label": "Switch",
      "hint": "Switch",
      "size": "md",
      "badge": "Switch",
      "reverse": false,
      "spaceBetween": false
    },
    "type": "component"
  },
  {
    "name": "TextboxGroup",
    "description": "TextboxGroup component",
    "category": "Form Elements",
    "props": {
      "maxLength": "number",
      "title": "string",
      "error": "boolean",
      "label": "string",
      "required": "boolean",
      "tooltip": "string",
      "showInfo": "boolean",
      "hint": "string",
      "errorMessage": "string",
      "permissionId": "string"
    },
    "initialValues": {
      "maxLength": 0,
      "title": "TextboxGroup",
      "error": false,
      "label": "TextboxGroup",
      "required": false,
      "tooltip": "TextboxGroup",
      "showInfo": false,
      "hint": "TextboxGroup",
      "errorMessage": "TextboxGroup",
      "permissionId": "TextboxGroup"
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
      "items": null,
      "showHome": false,
      "separator": null,
      "permissionId": "Breadcrumb"
    },
    "type": "component"
  }
];

export default componentMetadata;
