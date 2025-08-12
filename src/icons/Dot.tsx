import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Dot({ size = 14, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="3.00002" cy="3" r="3" fill="white" />
    </svg>
  );
}

export default Dot;

