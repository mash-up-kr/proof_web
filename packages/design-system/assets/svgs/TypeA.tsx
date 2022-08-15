import React from "react";
import theme from "../../theme";

const TypeA = ({ ...restProps }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M0 24V7.71168L5.0173 2.69438C6.74248 0.969198 9.08233 0 11.5221 0H24V17.8936L20.588 21.3056C18.8628 23.0308 16.523 24 14.0832 24H0Z"
        fill={theme.palette.purple300}
      />
      <path
        d="M16.7456 17L13.323 7.09945H10.6786L7.25597 17H9.46039L10.2049 14.7182H13.7967L14.5412 17H16.7456ZM11.9597 9.33287H12.0371L13.2698 13.1084H10.727L11.9597 9.33287Z"
        fill={theme.palette.white}
      />
    </svg>
  );
};

export default TypeA;
