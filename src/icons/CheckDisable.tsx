import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function CheckDisable({ size = 14, ...rest }: IconProps) {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.46881 7.39074C3.31948 7.39074 3.17015 7.33357 3.0564 7.21982L0.504314 4.6678C0.276231 4.43972 0.276231 4.07099 0.504314 3.84297C0.732398 3.61488 1.10106 3.61488 1.32915 3.84297L3.46881 5.98263L8.67098 0.780438C8.89906 0.552354 9.26773 0.552354 9.49581 0.780438C9.72389 1.00852 9.72389 1.37719 9.49581 1.60527L3.88123 7.21982C3.76748 7.33357 3.61815 7.39074 3.46881 7.39074Z" fill="#D5D7DA"/>
    </svg>
  );
}

export default CheckDisable;

