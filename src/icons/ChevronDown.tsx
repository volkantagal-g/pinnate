import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const ChevronDown: React.FC<IconProps> = ({ width = 16, height = 16 }) => (
    <svg width={width} height={height} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.725048 1.05806C0.969123 0.813981 1.36486 0.813981 1.60893 1.05806L7.00032 6.44941L12.3917 1.05806C12.6358 0.813981 13.0315 0.813981 13.2756 1.05806C13.5197 1.30213 13.5197 1.69786 13.2756 1.94194L7.44224 7.77525C7.32507 7.8925 7.16607 7.95833 7.00032 7.95833C6.83457 7.95833 6.67557 7.8925 6.55841 7.77525L0.725048 1.94194C0.480973 1.69786 0.480973 1.30213 0.725048 1.05806Z" fill="#717680"/>
    </svg>
);

export default ChevronDown;

