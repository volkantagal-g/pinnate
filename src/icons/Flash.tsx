import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const Flash: React.FC<IconProps> = ({ width = 16, height = 16 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.5 1L7.5 6H11L7.5 15L8.5 10H5L8.5 1Z" fill="currentColor" />
  </svg>
);

export default Flash;
