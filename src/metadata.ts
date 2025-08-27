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
    "name": "Badge",
    "description": "Badge component",
    "category": "Display",
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
    "name": "Alert",
    "description": "Alert component",
    "category": "Feedback",
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
    "name": "Icon",
    "description": "Icon component",
    "category": "Display",
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
    "name": "Tooltip",
    "description": "Tooltip component",
    "category": "Components",
    "props": {
      "title": "string",
      "content": "string",
      "placement": " | top-start | top | top-end | right-start | right | right-end | bottom-start | bottom | bottom-end | left-start | left | left-end",
      "scheme": "dark | light",
      "permissionId": "string"
    },
    "initialValues": {
      "title": "Tooltip",
      "content": "Tooltip",
      "placement": null,
      "scheme": "dark",
      "permissionId": "Tooltip"
    },
    "type": "component"
  },
  {
    "name": "Checkbox",
    "description": "Checkbox component",
    "category": "Form Elements",
    "props": {
      "checked": "boolean",
      "error": "boolean",
      "disabled": "boolean",
      "indeterminate": "boolean"
    },
    "initialValues": {
      "checked": false,
      "error": false,
      "disabled": false,
      "indeterminate": false
    },
    "type": "component"
  },
  {
    "name": "FormLabel",
    "description": "FormLabel component",
    "category": "Components",
    "props": {
      "text": "string",
      "required": "boolean"
    },
    "initialValues": {
      "text": "FormLabel",
      "required": false
    },
    "type": "component"
  },
  {
    "name": "InputGroup",
    "description": "InputGroup component",
    "category": "Components",
    "props": {
      "label": "string",
      "required": "boolean",
      "tooltip": "string",
      "showInfo": "boolean",
      "hint": "string",
      "errorMessage": "string",
      "permissionId": "string"
    },
    "initialValues": {
      "label": "InputGroup",
      "required": false,
      "tooltip": "InputGroup",
      "showInfo": false,
      "hint": "InputGroup",
      "errorMessage": "InputGroup",
      "permissionId": "InputGroup"
    },
    "type": "component"
  },
  {
    "name": "Input",
    "description": "Input component",
    "category": "Form Elements",
    "props": {
      "icon": "React.ReactNode",
      "title": "string",
      "required": "boolean",
      "disabled": "boolean",
      "error": "boolean",
      "permissionId": "string"
    },
    "initialValues": {
      "icon": null,
      "title": "Input",
      "required": false,
      "disabled": false,
      "error": false,
      "permissionId": "Input"
    },
    "type": "component"
  },
  {
    "name": "InputHint",
    "description": "InputHint component",
    "category": "Components",
    "props": {
      "text": "string",
      "type": "info | success | warning | error | help | disabled | default"
    },
    "initialValues": {
      "text": "InputHint",
      "type": "info"
    },
    "type": "component"
  },
  {
    "name": "Select",
    "description": "Select component",
    "category": "Form Elements",
    "props": {
      "options": "SelectOption[]",
      "value": "string",
      "defaultValue": "string",
      "onChange": "(value: string) => void",
      "placeholder": "string",
      "emptyText": "string",
      "title": "string",
      "required": "boolean",
      "disabled": "boolean",
      "error": "boolean",
      "id": "string",
      "permissionId": "string"
    },
    "initialValues": {
      "options": null,
      "value": "Select",
      "defaultValue": "Select",
      "onChange": null,
      "placeholder": "Select",
      "emptyText": "Select",
      "title": "Select",
      "required": false,
      "disabled": false,
      "error": false,
      "id": "Select",
      "permissionId": "Select"
    },
    "type": "component"
  },
  {
    "name": "SelectGroup",
    "description": "SelectGroup component",
    "category": "Components",
    "props": {
      "label": "string",
      "required": "boolean",
      "tooltip": "string",
      "showInfo": "boolean",
      "hint": "string",
      "errorMessage": "string",
      "permissionId": "string"
    },
    "initialValues": {
      "label": "SelectGroup",
      "required": false,
      "tooltip": "SelectGroup",
      "showInfo": false,
      "hint": "SelectGroup",
      "errorMessage": "SelectGroup",
      "permissionId": "SelectGroup"
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
    "name": "Textbox",
    "description": "Textbox component",
    "category": "Form Elements",
    "props": {
      "title": "string",
      "required": "boolean",
      "maxLength": "number",
      "error": "boolean",
      "permissionId": "string"
    },
    "initialValues": {
      "title": "Textbox",
      "required": false,
      "maxLength": 0,
      "error": false,
      "permissionId": "Textbox"
    },
    "type": "component"
  },
  {
    "name": "TextboxGroup",
    "description": "TextboxGroup component",
    "category": "Components",
    "props": {
      "maxLength": "number",
      "title": "string",
      "error": "boolean"
    },
    "initialValues": {
      "maxLength": 0,
      "title": "TextboxGroup",
      "error": false
    },
    "type": "component"
  },
  {
    "name": "Breadcrumb",
    "description": "Breadcrumb component",
    "category": "Components",
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
