import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number
}

export function Exclamation({ width = 20, height = 20, ...rest }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.75 9.999C10.75 10.413 10.414 10.749 10 10.749C9.586 10.749 9.25 10.413 9.25 9.999V6.107C9.25 5.693 9.586 5.357 10 5.357C10.414 5.357 10.75 5.693 10.75 6.107V9.999ZM10 14.467C9.586 14.467 9.25 14.155 9.25 13.741V13.693C9.25 13.279 9.586 12.943 10 12.943C10.414 12.943 10.75 13.279 10.75 13.693C10.75 14.107 10.414 14.467 10 14.467ZM18.692 5.26L14.741 1.31C14.222 0.787 13.528 0.5 12.79 0.5H7.21C6.482 0.5 5.771 0.795 5.26 1.309L1.309 5.26C0.795 5.772 0.5 6.482 0.5 7.209V12.79C0.5 13.518 0.795 14.228 1.309 14.741L5.26 18.692C5.771 19.205 6.482 19.5 7.21 19.5H12.79C13.528 19.5 14.221 19.213 14.74 18.692L18.692 14.741C19.205 14.229 19.5 13.518 19.5 12.79V7.209C19.5 6.472 19.213 5.779 18.692 5.26Z" fill="#D92D20"/>
    </svg>
  );
}

export default Exclamation;

