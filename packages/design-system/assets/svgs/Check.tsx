import theme from "../../theme";

const Check = ({ ...restProps }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M34 2L12 24L2 14"
        stroke={theme.palette.purple50}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
