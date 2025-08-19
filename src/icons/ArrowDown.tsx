export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export function ArrowDown({ width = 20, height = 20, ...rest }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.72456 7.05806C3.96864 6.81398 4.36437 6.81398 4.60844 7.05806L9.99984 12.4494L15.3913 7.05806C15.6353 6.81398 16.031 6.81398 16.2751 7.05806C16.5192 7.30213 16.5192 7.69786 16.2751 7.94194L10.4418 13.7752C10.3246 13.8925 10.1656 13.9583 9.99984 13.9583C9.83408 13.9583 9.67509 13.8925 9.55792 13.7752L3.72456 7.94194C3.48049 7.69786 3.48049 7.30213 3.72456 7.05806Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ArrowDown;
