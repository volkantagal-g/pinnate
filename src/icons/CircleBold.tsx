export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export function CircleBold({ width = 20, height = 20, ...rest }: IconProps) {
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
        d="M10.0002 2.80927C5.63516 2.80927 2.0835 6.36093 2.0835 10.7259C2.0835 15.0909 5.63516 18.6426 10.0002 18.6426C14.3652 18.6426 17.9168 15.0909 17.9168 10.7259C17.9168 6.36093 14.3652 2.80927 10.0002 2.80927Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default CircleBold;
