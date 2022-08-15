import theme from "../../theme";

function Vote({ ...restProps }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M14.6666 7.88625V8.49958C14.6658 9.9372 14.2003 11.336 13.3395 12.4875C12.4787 13.6389 11.2688 14.4812 9.89016 14.8889C8.51154 15.2965 7.03809 15.2475 5.68957 14.7493C4.34104 14.2511 3.18969 13.3303 2.40723 12.1243C1.62476 10.9183 1.25311 9.49163 1.3477 8.05713C1.44229 6.62263 1.99806 5.25713 2.93211 4.1643C3.86615 3.07146 5.12844 2.30984 6.53071 1.99301C7.93298 1.67619 9.4001 1.82114 10.7133 2.40625"
        stroke={theme.palette.green200}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 3.16699L8 9.84033L6 7.84033"
        stroke={theme.palette.green200}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Vote;
