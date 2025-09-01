# Design Tokens

This directory contains all the design tokens for the Pinnate component library. Design tokens are the foundational design decisions that define the visual language of your application.

## What are Design Tokens?

Design tokens are the atomic design decisions that define the visual language of your application. They include:

- **Colors**: Primary, danger, neutral, and text colors
- **Spacing**: Consistent spacing scale for margins, padding, and layout
- **Typography**: Font families, weights, sizes, and line heights
- **Radius**: Border radius values for components
- **Elevation**: Shadow and depth values
- **Badge**: Predefined badge color combinations
- **Palette**: Extended color palette with various shades

## Usage

### Importing Tokens

```typescript
import { defaultTokens } from 'pinnate/tokens';

// Use tokens directly
const primaryColor = defaultTokens.palette.brand[500];
const spacing = defaultTokens.spacing.md;
const borderRadius = defaultTokens.radius.md;
```

### Using in Components

```typescript
import { defaultTokens } from 'pinnate/tokens';

const Button = styled.button`
  background-color: ${defaultTokens.palette.brand[500]};
  padding: ${defaultTokens.spacing.md};
  border-radius: ${defaultTokens.radius.md};
  font-weight: ${defaultTokens.typography.weights.semiBold};
  font-size: ${defaultTokens.typography.text.md.size};
`;
```

### CSS Custom Properties

The library automatically generates CSS custom properties that you can use in your CSS:

```css
.custom-button {
  background-color: var(--pinnate-palette-brand-500);
  padding: var(--pinnate-spacing-md);
  border-radius: var(--pinnate-radius-md);
  font-weight: var(--pinnate-font-weight-semiBold);
}
```

## Available Token Groups

### Colors

Colors are available through the palette system:

- `palette.brand[500]`, `palette.brand[600]`: Primary brand colors
- `palette.error[500]`, `palette.error[600]`: Error and danger states
- `palette.grayLight[900]`, `palette.grayLight[600]`: Text colors
- `palette.base.white`: Background colors
- `palette.grayLight[200]`: Border colors

### Spacing

- `xs`, `sm`, `md`, `lg`, `xl`: Standard spacing scale
- `xxs`, `2xl`, `3xl`: Extended spacing options

### Typography

- **Weights**: `regular`, `medium`, `semiBold`, `bold`
- **Display Scale**: `xl`, `lg`, `md`, `sm`, `xs`
- **Text Scale**: `xl`, `lg`, `md`, `sm`, `xs`, `x2s`
- **Fonts**: `fontFamily`, `modalFontFamily`

### Radius

- `xs`, `sm`, `md`, `lg`, `xl`: Border radius values
- `pill`, `full`: Special radius values

### Badge Colors

Predefined color combinations for badges:

- `gray`, `purple`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `pink`

### Palette

Extended color palette with various shades (25-950):

- `base`: White and black
- `grayLight`, `grayDark`: Gray scales
- `brand`, `brandSecondary`: Brand colors
- `error`, `warning`, `success`: Semantic colors
- `blue`, `pink`, `teal`: Additional color options

## Utilities

### generateCSSVariables(tokens)

Generates CSS custom properties from design tokens:

```typescript
import { generateCSSVariables } from 'pinnate/tokens';

const cssVars = generateCSSVariables(defaultTokens);
// Returns: { '--pinnate-color-primary500': '#6c4de6', ... }
```

### applyCSSVariables(tokens)

Applies CSS custom properties to the document:

```typescript
import { applyCSSVariables } from 'pinnate/tokens';

// Apply tokens as CSS variables
applyCSSVariables(defaultTokens);
```

### removeCSSVariables()

Removes all Pinnate CSS custom properties from the document:

```typescript
import { removeCSSVariables } from 'pinnate/tokens';

// Clean up CSS variables
removeCSSVariables();
```

### getTokenValue(tokens, path)

Gets a token value using dot notation:

```typescript
import { getTokenValue } from 'pinnate/tokens';

const fontSize = getTokenValue(defaultTokens, 'typography.text.md.size');
// Returns: '16px'
```

## Customization

You can customize tokens by creating your own token object and merging it with the defaults:

```typescript
import { defaultTokens } from 'pinnate/tokens';

const customTokens = {
  colors: {
    primary500: '#your-custom-color',
    // ... other custom colors
  },
};

// Merge with defaults
const mergedTokens = {
  ...defaultTokens,
  ...customTokens,
  colors: {
    ...defaultTokens.colors,
    ...customTokens.colors,
  },
};
```

## Storybook

View all available tokens in Storybook under "Design System/Tokens". This includes:

- Visual representation of all token values
- Interactive examples
- CSS custom properties generation
- Usage examples and code snippets

## Best Practices

1. **Always use tokens**: Don't hardcode values like `#6c4de6` or `16px`
2. **Maintain consistency**: Use the same spacing, colors, and typography throughout your app
3. **Semantic naming**: Use tokens that describe their purpose, not their appearance
4. **Extend thoughtfully**: Add new tokens only when necessary, following the existing patterns
5. **Document changes**: Update this README when adding new tokens or changing existing ones

## Contributing

When adding new tokens:

1. Add the token to the appropriate interface in `types.ts`
2. Add the value to `default.ts`
3. Update the CSS variable generation in `index.ts`
4. Add visual examples to the Storybook stories
5. Update this README
6. Ensure the token follows the existing naming conventions
