import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { defaultTokens, generateCSSVariables } from './index';

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    docs: {
      description: {
        component:
          'Available design tokens for customization. These tokens can be imported and used to maintain consistent design across your application.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Badge Tokens (showing available color combinations)
export const Badges: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h2>Badge Color Tokens</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '16px',
        }}
      >
        {Object.entries(defaultTokens.badge).map(([key, colors]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div
              style={{
                backgroundColor: colors.bg,
                color: colors.fg,
                padding: '8px 16px',
                borderRadius: '16px',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'inline-block',
              }}
            >
              {key}
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
              BG: {colors.bg}
              <br />
              FG: {colors.fg}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Spacing Tokens
export const Spacing: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h2>Spacing Tokens</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {Object.entries(defaultTokens.spacing).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: value,
                height: '20px',
                backgroundColor: '#6c4de6',
                borderRadius: '4px',
              }}
            />
            <div style={{ minWidth: '60px', fontWeight: 'bold' }}>{key}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Radius Tokens
export const Radius: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h2>Radius Tokens</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
        }}
      >
        {Object.entries(defaultTokens.radius).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#6c4de6',
                borderRadius: value,
                margin: '0 auto 8px',
              }}
            />
            <div style={{ fontWeight: 'bold' }}>{key}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Typography Tokens
export const Typography: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h2>Typography Tokens</h2>

      <h3>Font Weights</h3>
      <div style={{ marginBottom: '24px' }}>
        {Object.entries(defaultTokens.typography.weights).map(([key, value]) => (
          <div key={key} style={{ marginBottom: '8px' }}>
            <span style={{ fontWeight: value, fontSize: '16px' }}>
              {key}: {value}
            </span>
          </div>
        ))}
      </div>

      <h3>Display Scale</h3>
      <div style={{ marginBottom: '24px' }}>
        {Object.entries(defaultTokens.typography.display).map(([key, scale]) => (
          <div key={key} style={{ marginBottom: '16px' }}>
            <div
              style={{
                fontSize: scale.size,
                lineHeight: scale.line,
                letterSpacing: scale.tracking,
                fontWeight: 'bold',
                color: '#2A2A2A',
              }}
            >
              Display {key.toUpperCase()}
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              Size: {scale.size} | Line: {scale.line} | Tracking: {scale.tracking}
            </div>
          </div>
        ))}
      </div>

      <h3>Text Scale</h3>
      <div>
        {Object.entries(defaultTokens.typography.text).map(([key, scale]) => (
          <div key={key} style={{ marginBottom: '16px' }}>
            <div
              style={{
                fontSize: scale.size,
                lineHeight: scale.line,
                letterSpacing: scale.tracking,
                color: '#2A2A2A',
              }}
            >
              Text {key.toUpperCase()}
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              Size: {scale.size} | Line: {scale.line} | Tracking: {scale.tracking}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Palette Tokens
export const Palette: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h2>Palette Tokens</h2>
      {Object.entries(defaultTokens.palette).map(([paletteName, palette]) => (
        <div key={paletteName} style={{ marginBottom: '32px' }}>
          <h3 style={{ textTransform: 'capitalize', marginBottom: '16px' }}>{paletteName}</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
              gap: '8px',
            }}
          >
            {Object.entries(palette).map(([shade, value]) => (
              <div key={shade} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: value as string,
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    margin: '0 auto 4px',
                  }}
                />
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{shade}</div>
                <div style={{ fontSize: '10px', color: '#666' }}>{value as string}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// CSS Variables
export const CSSVariables: Story = {
  render: () => {
    const cssVars = generateCSSVariables(defaultTokens);

    return (
      <div style={{ padding: '20px' }}>
        <h2>CSS Custom Properties</h2>
        <p style={{ marginBottom: '16px', color: '#666' }}>
          These CSS custom properties are automatically generated from the design tokens and can be
          used in your CSS.
        </p>
        <div
          style={{
            backgroundColor: '#f5f5f5',
            padding: '16px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '12px',
            maxHeight: '400px',
            overflow: 'auto',
          }}
        >
          {Object.entries(cssVars).map(([property, value]) => (
            <div key={property} style={{ marginBottom: '4px' }}>
              <span style={{ color: '#0066cc' }}>{property}</span>:{' '}
              <span style={{ color: '#cc6600' }}>{value}</span>;
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Usage Examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h2>Usage Examples</h2>

      <h3>Importing Tokens</h3>
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '16px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '12px',
          marginBottom: '24px',
        }}
      >
        {`import { defaultTokens, generateCSSVariables } from 'pinnate/tokens';

// Use tokens directly
const primaryColor = defaultTokens.colors.primary500;
const spacing = defaultTokens.spacing.md;

// Generate CSS variables
const cssVars = generateCSSVariables(defaultTokens);`}
      </div>

      <h3>Using in Components</h3>
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '16px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '12px',
          marginBottom: '24px',
        }}
      >
        {`const Button = styled.button\`
  background-color: \${defaultTokens.palette.brand[500]};
  padding: \${defaultTokens.spacing.md};
  border-radius: \${defaultTokens.radius.md};
  font-weight: \${defaultTokens.typography.weights.semiBold};
\`;`}
      </div>

      <h3>CSS Custom Properties</h3>
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '16px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '12px',
        }}
      >
        {`.custom-button {
  background-color: var(--pinnate-palette-brand-500);
  padding: var(--pinnate-spacing-md);
  border-radius: var(--pinnate-radius-md);
  font-weight: var(--pinnate-font-weight-semiBold);
}`}
      </div>
    </div>
  ),
};
