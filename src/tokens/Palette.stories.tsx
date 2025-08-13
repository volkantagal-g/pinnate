import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';

type Shade = '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

const shades: Shade[] = ['25','50','100','200','300','400','500','600','700','800','900','950'];

const paletteScales = [
  { key: 'gray-light', title: 'Gray (light)' },
  { key: 'gray-dark', title: 'Gray (dark)' },
  { key: 'brand', title: 'Brand' },
  { key: 'brand-secondary', title: 'Brand Secondary' },
  { key: 'error', title: 'Error' },
  { key: 'warning', title: 'Warning' },
  { key: 'success', title: 'Success' },
  { key: 'blue', title: 'Blue' },
  { key: 'pink', title: 'Pink' },
  { key: 'teal', title: 'Teal' },
];

function Swatch({ varName }: { varName: string }) {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const [hex, setHex] = React.useState('');

  React.useEffect(() => {
    const el = ref.current ?? document.documentElement;
    const value = getComputedStyle(el).getPropertyValue(varName).trim();
    setHex(value);
  }, [varName]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(varName);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // noop
    }
  };

  return (
    <button
      onClick={onCopy}
      style={{
        all: 'unset',
        cursor: 'pointer',
        display: 'grid',
        gap: 6,
        width: 116,
        alignItems: 'start',
      }}
      title={`Click to copy ${varName}`}
    >
      <div
        ref={ref}
        style={{
          width: '100%',
          height: 64,
          borderRadius: 'var(--pn-radius-md)',
          boxShadow: 'var(--pn-elevation-sm)',
          background: `var(${varName})`,
          border: varName.includes('white') ? '1px solid var(--pn-palette-gray-light-200)' : 'none',
        }}
      />
      <div style={{ fontFamily: 'var(--pn-font-family)', fontSize: '12px', lineHeight: '16px', color: 'var(--pn-palette-gray-dark-900)' }}>
        <div>{varName}</div>
        <div style={{ color: 'var(--pn-palette-gray-light-500)' }}>{hex}</div>
        {copied && <div style={{ color: 'var(--pn-palette-brand-700)' }}>Copied</div>}
      </div>
    </button>
  );
}

function Scale({ scaleKey, title }: { scaleKey: string; title: string }) {
  return (
    <section style={{ display: 'grid', gap: 8 }}>
      <h4 style={{ margin: 0, fontFamily: 'var(--pn-font-family)', fontWeight: 600, fontSize: '14px', lineHeight: '20px', color: 'var(--pn-palette-gray-dark-900)' }}>{title}</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {shades.map((s) => (
          <Swatch key={s} varName={`--pn-palette-${scaleKey}-${s}`} />
        ))}
      </div>
    </section>
  );
}

function Intro() {
  const textStyle: React.CSSProperties = {
    margin: 0,
    fontFamily: 'var(--pn-font-family)',
    fontSize: '14px',
    lineHeight: '20px',
    color: 'var(--pn-palette-gray-dark-900)'
  };
  const subtle: React.CSSProperties = { ...textStyle, color: 'var(--pn-palette-gray-light-600)' };
  const code: React.CSSProperties = {
    fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    fontSize: 12,
    background: 'var(--pn-palette-gray-light-50)',
    border: '1px solid var(--pn-palette-gray-light-200)',
    borderRadius: 'var(--pn-radius-sm)',
    padding: '8px 10px',
    display: 'inline-block'
  };
  return (
    <section style={{ display: 'grid', gap: 8 }}>
      <h3 style={{ margin: 0, fontFamily: 'var(--pn-font-family)', fontWeight: 600, fontSize: 16, lineHeight: '24px' }}>Why Design Tokens?</h3>
      <p style={textStyle}>Design tokens are the single source of truth for visual decisions (color, typography, spacing, radius, etc.). They let us theme Pinnate consistently, change styles in one place, and ship UIs that look and feel the same across products.</p>
      <p style={textStyle}>Tokens are exposed to components as CSS variables at runtime via the <code style={code}>PinnateProvider</code>. Any component style references a variable instead of hard-coded values. When a token changes, every component updates automatically.</p>
      <p style={subtle}>Example usage in CSS:</p>
      <pre style={{ margin: 0 }}>
        <code style={code}>background: var(--pn-palette-brand-500); /* primary brand color */</code>
      </pre>
      <p style={subtle}>Click any swatch below to copy the variable name to your clipboard.</p>
    </section>
  );
}

const meta: Meta = {
  title: 'Tokens/Palette',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Palette tokens define our color system as CSS variables (e.g., --pn-palette-brand-500). Use these variables in components to ensure consistency and enable theming without changing component code.'
      }
    }
  },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ display: 'grid', gap: 24 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <Intro />
      <section style={{ display: 'grid', gap: 8 }}>
        <h4 style={{ margin: 0, fontFamily: 'var(--pn-font-family)', fontWeight: 600, fontSize: '14px', lineHeight: '20px', color: 'var(--pn-palette-gray-dark-900)' }}>Base</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Swatch varName={'--pn-palette-base-white'} />
          <Swatch varName={'--pn-palette-base-black'} />
        </div>
      </section>
      {paletteScales.map((s) => (
        <Scale key={s.key} scaleKey={s.key} title={s.title} />
      ))}
    </div>
  ),
};

