import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { colors } from "./theme";

/* TODOS: add defualt value */
const globalStyle = css`
  ${emotionReset}

  body {
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    background-color: ${colors.background};
    color: ${colors.text.general};
  }

  button {
    border: none;
  }

  button:active {
    background-color: ${colors.primary.pressed};
  }
`;

export default globalStyle;
