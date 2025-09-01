import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../theme/PinnateProvider';

const radiusVars = [
  { key: 'xs', varName: '--pn-radius-xs' },
  { key: 'sm', varName: '--pn-radius-sm' },
  { key: 'md', varName: '--pn-radius-md' },
  { key: 'lg', varName: '--pn-radius-lg' },
  { key: 'pill', varName: '--pn-radius-pill' },
  { key: 'full', varName: '--pn-radius-full' },
];

function Swatch({ varName, label }: { varName: string; label: string }) {
  const [copied, setCopied] = React.useState(false);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const computed = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    setValue(computed);
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
      title={`Click to copy ${varName}`}
      style={{ all: 'unset', cursor: 'pointer', width: 160 }}
    >
      <div
        style={{
          width: '100%',
          height: 72,
          background: 'var(--pn-palette-base-white)',
          border: '1px solid var(--pn-palette-gray-light-200)',
          borderRadius: `var(${varName})`,
          boxShadow: 'var(--pn-elevation-sm)',
        }}
      />
      <div style={{ marginTop: 8, display: 'grid', gap: 2 }}>
        <div
          style={{
            fontFamily: 'var(--pn-font-family)',
            fontWeight: 600,
            fontSize: 12,
            lineHeight: '16px',
            color: 'var(--pn-palette-gray-dark-900)',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: 'var(--pn-font-family)',
            fontSize: 12,
            lineHeight: '16px',
            color: 'var(--pn-palette-gray-dark-900)',
          }}
        >
          {varName}
        </div>
        <div
          style={{
            fontFamily: 'var(--pn-font-family)',
            fontSize: 12,
            lineHeight: '16px',
            color: 'var(--pn-palette-gray-light-500)',
          }}
        >
          {value}
        </div>
        {copied && (
          <div
            style={{
              fontFamily: 'var(--pn-font-family)',
              fontSize: 12,
              lineHeight: '16px',
              color: 'var(--pn-palette-brand-700)',
            }}
          >
            Copied
          </div>
        )}
      </div>
    </button>
  );
}

function Intro() {
  const textStyle: React.CSSProperties = {
    margin: 0,
    fontFamily: 'var(--pn-font-family)',
    fontSize: '14px',
    lineHeight: '20px',
    color: 'var(--pn-palette-gray-dark-900)',
  };
  const subtle: React.CSSProperties = { ...textStyle, color: 'var(--pn-palette-gray-light-600)' };
  return (
    <section style={{ display: 'grid', gap: 8 }}>
      <h3
        style={{
          margin: 0,
          fontFamily: 'var(--pn-font-family)',
          fontWeight: 600,
          fontSize: 16,
          lineHeight: '24px',
        }}
      >
        Radius Tokens
      </h3>
      <p style={textStyle}>
        Radius tokens control the rounding of component corners. Using tokens instead of hard-coded
        values keeps corners consistent and themable across the system.
      </p>
      <p style={subtle}>Click any swatch below to copy its CSS variable name.</p>
    </section>
  );
}

const meta: Meta = {
  title: 'Tokens/Radius',
  parameters: { layout: 'padded' },
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
    <div style={{ display: 'grid', gap: 16 }}>
      <Intro />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {radiusVars.map((r) => (
          <Swatch key={r.key} varName={r.varName} label={r.key} />
        ))}
      </div>
    </div>
  ),
};
