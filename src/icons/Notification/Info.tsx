import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number
}

export function Info({ width = 20, height = 20, ...rest }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.756 13.693C10.756 14.107 10.42 14.443 10.006 14.443C9.592 14.443 9.256 14.107 9.256 13.693V9.394C9.256 8.98 9.592 8.644 10.006 8.644C10.42 8.644 10.756 8.98 10.756 9.394V13.693ZM9.25 6.291C9.25 5.877 9.586 5.541 10 5.541C10.414 5.541 10.75 5.877 10.75 6.291C10.75 6.705 10.414 7.073 10 7.073C9.586 7.073 9.25 6.768 9.25 6.354V6.291ZM10 0.5C4.762 0.5 0.5 4.761 0.5 10C0.5 15.238 4.762 19.5 10 19.5C15.238 19.5 19.5 15.238 19.5 10C19.5 4.761 15.238 0.5 10 0.5Z" fill="#414651"/>
    </svg>
  );
}

export default Info;

