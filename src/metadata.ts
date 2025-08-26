// Auto-generated component metadata
export interface ComponentMetadata {
  name: string;
  description: string;
  category: string;
  props: Record<string, string>;
  initialValues: Record<string, any>;
  type: 'component';
}

export const componentMetadata: ComponentMetadata[] = [
  {
    "name": "Alert",
    "description": "Alert message component",
    "category": "Feedback",
    "props": {
      "variant": "purple | info | error | warning | success",
      "title": "string",
      "children": "React.ReactNode",
      "onClose": "function",
      "actions": "AlertAction[]",
      "className": "string"
    },
    "initialValues": {
      "variant": "purple",
      "title": "Alert",
      "children": null,
      "onClose": null,
      "actions": null,
      "className": ""
    },
    "type": "component"
  },
  {
    "name": "Badge",
    "description": "Small status indicator component",
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
      "children": null,
      "size": "sm",
      "variant": "filled",
      "color": null,
      "iconPosition": "start",
      "tone": "filled",
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "Dropdown",
    "description": "Dropdown menu component",
    "category": "Overlay",
    "props": {
      "user": "object",
      "name": "string",
      "email": "string",
      "avatar": "string"
    },
    "initialValues": {
      "user": null,
      "name": "",
      "email": "",
      "avatar": ""
    },
    "type": "component"
  },
  {
    "name": "Button",
    "description": "Interactive button component with multiple variants and sizes",
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
      "size": "xs",
      "icon": null,
      "iconPosition": "start",
      "onlyIcon": false,
      "error": false,
      "color": false,
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "Icon",
    "description": "Icon display component",
    "category": "Media",
    "props": {
      "name": "IconName",
      "size": "number",
      "className": "string"
    },
    "initialValues": {
      "name": null,
      "size": 0,
      "className": ""
    },
    "type": "component"
  },
  {
    "name": "InfoTooltip",
    "description": "Information tooltip component",
    "category": "Overlay",
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
      "content": "",
      "placement": null,
      "scheme": "dark",
      "visible": false,
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "Modal",
    "description": "Modal dialog component",
    "category": "Overlay",
    "props": {
      "isOpen": "boolean",
      "onClose": "function",
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
      "children": null,
      "size": "sm",
      "variant": "default",
      "footerActions": null
    },
    "type": "component"
  },
  {
    "name": "Notification",
    "description": "Toast notification component",
    "category": "Feedback",
    "props": {
      "open": "boolean",
      "variant": "info | error | warning | success",
      "position": " | top-left | top-center | top-right | middle-left | middle-center | middle-right | bottom-left | bottom-center | bottom-right",
      "title": "string",
      "description": "string",
      "primaryAction": "object",
      "secondaryAction": "object",
      "onClose": "function",
      "permissionId": "string",
      "durationMs": "number",
      "offsetPx": "number"
    },
    "initialValues": {
      "open": false,
      "variant": "info",
      "position": null,
      "title": "Notification",
      "description": "",
      "primaryAction": null,
      "secondaryAction": null,
      "onClose": null,
      "permissionId": "",
      "durationMs": 0,
      "offsetPx": 0
    },
    "type": "component"
  },
  {
    "name": "Tooltip",
    "description": "Tooltip overlay component",
    "category": "Overlay",
    "props": {
      "title": "string",
      "content": "string",
      "placement": " | top-start | top | top-end | right-start | right | right-end | bottom-start | bottom | bottom-end | left-start | left | left-end",
      "scheme": "dark | light",
      "permissionId": "string"
    },
    "initialValues": {
      "title": "Tooltip",
      "content": "",
      "placement": null,
      "scheme": "dark",
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "Checkbox",
    "description": "Checkbox input component",
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
    "name": "CheckboxGroupBadge",
    "description": "CheckboxGroupBadge component",
    "category": "Other",
    "props": {
      "text": "string",
      "disabled": "boolean"
    },
    "initialValues": {
      "text": "",
      "disabled": false
    },
    "type": "component"
  },
  {
    "name": "FormLabel",
    "description": "Form label component",
    "category": "Form Elements",
    "props": {
      "text": "string",
      "required": "boolean"
    },
    "initialValues": {
      "text": "",
      "required": false
    },
    "type": "component"
  },
  {
    "name": "Input",
    "description": "Text input field component",
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
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "InputHint",
    "description": "InputHint component",
    "category": "Other",
    "props": {
      "text": "string",
      "type": "info | success | warning | error | help | disabled | default"
    },
    "initialValues": {
      "text": "",
      "type": "info"
    },
    "type": "component"
  },
  {
    "name": "InputGroup",
    "description": "Input field with label and additional elements",
    "category": "Form Elements",
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
      "tooltip": "",
      "showInfo": false,
      "hint": "",
      "errorMessage": "",
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "Select",
    "description": "Dropdown selection component",
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
      "value": "",
      "defaultValue": "",
      "onChange": null,
      "placeholder": "",
      "emptyText": "",
      "title": "Select",
      "required": false,
      "disabled": false,
      "error": false,
      "id": "",
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "SelectGroup",
    "description": "Select component with label and additional elements",
    "category": "Form Elements",
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
      "tooltip": "",
      "showInfo": false,
      "hint": "",
      "errorMessage": "",
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "Textbox",
    "description": "Multi-line text input component",
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
      "permissionId": ""
    },
    "type": "component"
  },
  {
    "name": "Switch",
    "description": "Toggle switch component",
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
      "hint": "",
      "size": "sm",
      "badge": "",
      "reverse": false,
      "spaceBetween": false
    },
    "type": "component"
  },
  {
    "name": "TextboxGroup",
    "description": "Textbox with label and additional elements",
    "category": "Form Elements",
    "props": {
      "maxLength": "number | undefined",
      "title": "string | undefined",
      "error": "boolean | undefined"
    },
    "initialValues": {
      "maxLength": "number",
      "title": "string",
      "error": "boolean"
    },
    "type": "component"
  },
  {
    "name": "Breadcrumb",
    "description": "Navigation breadcrumb component",
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
      "permissionId": ""
    },
    "type": "component"
  }
];

export default componentMetadata;
