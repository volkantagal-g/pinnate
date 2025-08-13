import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number
}

export function IndeterminateDisable({ width = 10, height = 2, ...rest }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.916748 1.00008C0.916748 0.677906 1.17792 0.416748 1.50008 0.416748H8.50008C8.82226 0.416748 9.08342 0.677906 9.08342 1.00008C9.08342 1.32226 8.82226 1.58341 8.50008 1.58341H1.50008C1.17792 1.58341 0.916748 1.32226 0.916748 1.00008Z" fill="#D5D7DA"/>
    </svg>
  );
}

export default IndeterminateDisable;

