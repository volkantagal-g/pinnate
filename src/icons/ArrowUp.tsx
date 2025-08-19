export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export function ArrowUp({ width = 20, height = 20, ...rest }: IconProps) {
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
        d="M9.55792 7.05806C9.802 6.81398 10.1977 6.81398 10.4418 7.05806L16.2751 12.8914C16.5192 13.1355 16.5192 13.5312 16.2751 13.7752C16.031 14.0193 15.6353 14.0193 15.3913 13.7752L9.99984 8.38391L4.60844 13.7752C4.36437 14.0193 3.96864 14.0193 3.72456 13.7752C3.48049 13.5312 3.48049 13.1355 3.72456 12.8914L9.55792 7.05806Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ArrowUp;
