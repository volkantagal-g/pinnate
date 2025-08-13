import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number
}

export function Close({ width = 10, height = 10, ...rest }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M1.35355 0.646445C1.15829 0.451185 0.841705 0.451185 0.646445 0.646445C0.451185 0.841705 0.451185 1.15829 0.646445 1.35355L4.29286 5L0.646445 8.64646C0.451185 8.84173 0.451185 9.15827 0.646445 9.35353C0.841705 9.5488 1.15829 9.5488 1.35355 9.35353L5 5.70713L8.64646 9.35353C8.84173 9.5488 9.15827 9.5488 9.35353 9.35353C9.5488 9.15827 9.5488 8.84173 9.35353 8.64646L5.70713 5L9.35353 1.35355C9.5488 1.15829 9.5488 0.841705 9.35353 0.646445C9.15827 0.451185 8.84173 0.451185 8.64646 0.646445L5 4.29286L1.35355 0.646445Z" fill="#717680"/>
    </svg>
  );
}

export default Close;

