import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Circle({ size = 14, ...rest }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.2083 3.12598C6.41124 3.12598 3.33325 6.20397 3.33325 10.001C3.33325 13.7971 6.4112 16.8752 10.2083 16.8752C14.0053 16.8752 17.0833 13.7971 17.0833 10.001C17.0833 6.20397 14.0053 3.12598 10.2083 3.12598ZM2.08325 10.001C2.08325 5.51361 5.72089 1.87598 10.2083 1.87598C14.6956 1.87598 18.3333 5.51361 18.3333 10.001C18.3333 14.4876 14.6956 18.1252 10.2083 18.1252C5.72094 18.1252 2.08325 14.4876 2.08325 10.001Z" fill="#717680"/>
    </svg>
  );
}

export default Circle;
