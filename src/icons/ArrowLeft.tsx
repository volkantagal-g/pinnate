import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number
}

export function ArrowLeft({ width = 8, height = 14, ...rest }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M7.35845 0.724562C7.58033 0.946451 7.60051 1.29367 7.41896 1.53835L7.35845 1.60845L1.96734 6.99984L7.35845 12.3912C7.58033 12.6131 7.60051 12.9603 7.41896 13.205L7.35845 13.2751C7.13656 13.497 6.78934 13.5172 6.54466 13.3356L6.47456 13.2751L0.641229 7.44178C0.419341 7.21989 0.399168 6.87267 0.580714 6.62799L0.641229 6.5579L6.47456 0.724562C6.71864 0.480484 7.11437 0.480484 7.35845 0.724562Z" fill="white"/>
    </svg>
  );
}

export default ArrowLeft;

