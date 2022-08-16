import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import theme from "../theme";

// TODOS: 타입 유틸으로 분리
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends Record<string, unknown>
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export enum ButtonHierarchy {
  Primary = "Primary",
  Secondary = "Secondary",
  Tertiary = "Tertiary",
}

type ButtonProps = XOR<
  {
    fullWidth?: boolean;
    hierarchy?: ButtonHierarchy;
    children: React.ReactNode;
    margin?: CSSProperties["margin"];
    className?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
  },
  {
    width?: CSSProperties["width"];
    hierarchy?: ButtonHierarchy;
    children: React.ReactNode;
    margin?: CSSProperties["margin"];
    className?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
  }
>;

function Button(props: ButtonProps) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button<ButtonProps>`
  padding: 15px;
  width: ${({ width, fullWidth }) => {
    if (width) return typeof width === "number" ? width + "px" : width;
    if (fullWidth) return "100%";
    return "auto";
  }};
  margin: ${(props) => props.margin};
  border-radius: 8px;
  color: ${({ disabled }) =>
    disabled ? theme.palette.gray300 : theme.colors.text.special};
  background-color: ${({ hierarchy, disabled }) => {
    if (hierarchy === ButtonHierarchy.Secondary) return theme.palette.gray400;
    if (hierarchy === ButtonHierarchy.Tertiary || disabled)
      return theme.palette.gray500;

    return theme.colors.primary.default;
  }};
  outline: none;
  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

export default Button;
