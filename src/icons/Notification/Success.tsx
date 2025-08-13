import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number
}

export function Success({ width = 20, height = 20, ...rest }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.993 8.222L9.375 12.84C9.228 12.987 9.037 13.06 8.845 13.06C8.652 13.06 8.461 12.987 8.314 12.84L6.005 10.531C5.712 10.238 5.712 9.763 6.005 9.47C6.298 9.177 6.772 9.177 7.065 9.47L8.845 11.249L12.932 7.161C13.225 6.868 13.7 6.868 13.993 7.161C14.286 7.454 14.286 7.929 13.993 8.222ZM10 0.5C4.762 0.5 0.5 4.762 0.5 10C0.5 15.239 4.762 19.5 10 19.5C15.238 19.5 19.5 15.239 19.5 10C19.5 4.762 15.238 0.5 10 0.5Z" fill="#079455"/>
    </svg>
  );
}

export default Success;

