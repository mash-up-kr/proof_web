import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { colors } from "./theme";

/* TODOS: add defualt value */
const globalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: url("/fonts/Pretendard-Bold.woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url("/fonts/Pretendard-SemiBold.woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url("/fonts/Pretendard-Medium.woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url("/fonts/Pretendard-Regular.woff");
  }

  body {
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    background-color: ${colors.background};
    color: ${colors.text.general};

    font-family: Pretendard;
  }

  button {
    border: none;
  }

  button:active {
    background-color: ${colors.primary.pressed};
  }
`;

export default globalStyle;
