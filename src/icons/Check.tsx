import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Check({ size = 14, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.46875 10.3907C5.31942 10.3907 5.17009 10.3336 5.05634 10.2198L2.50425 7.6678C2.27617 7.43972 2.27617 7.07099 2.50425 6.84297C2.73234 6.61488 3.101 6.61488 3.32909 6.84297L5.46875 8.98263L10.6709 3.78044C10.899 3.55235 11.2677 3.55235 11.4957 3.78044C11.7238 4.00852 11.7238 4.37719 11.4957 4.60527L5.88116 10.2198C5.76742 10.3336 5.61809 10.3907 5.46875 10.3907Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Check;

