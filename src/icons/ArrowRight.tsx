import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number
}

export function ArrowRight({ width = 8, height = 14, ...rest }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M0.641554 13.2754C0.419666 13.0535 0.399494 12.7063 0.581039 12.4617L0.641554 12.3916L6.03266 7.00016L0.641554 1.60877C0.419666 1.38688 0.399494 1.03966 0.581039 0.794987L0.641554 0.724888C0.863443 0.502999 1.21066 0.482827 1.45534 0.664372L1.52544 0.724888L7.35877 6.55822C7.58066 6.78011 7.60083 7.12733 7.41929 7.37201L7.35877 7.4421L1.52544 13.2754C1.28136 13.5195 0.885632 13.5195 0.641554 13.2754Z" fill="white"/>
    </svg>
  );
}

export default ArrowRight;

