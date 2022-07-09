import { css } from '@emotion/react';

export const palette = {
  purple50: '#EDEDFF',
  purple100: '#C4BEFF',
  purple200: '#9685FF',
  purple300: '#6748E3',
  purple400: '#4F17C5',

  green100: '#E6F5C0',
  green200: '#BAE348',
  green300: '#96B602',

  orange100: '#FFD9CF',
  orange200: '#FF9B81',
  orange300: '#EF562D',

  white: '#FCFCFF',

  gray50: '#EFEFF8',
  gray100: '#D5D8EA',
  gray200: '#AEB4CA',
  gray300: '#8D90A9',
  gray400: '#5D6077',
  gray500: '#383A4D',
  gray600: '#2A2C3C',

  black: '#1C1C26',
} as const;

export const colors = {
  primary: {
    default: palette.purple300,
    dark: palette.black,
    disabled: palette.gray500,
    pressed: palette.purple300,
  },
  background: palette.black,
  text: {
    general: palette.gray50,
    special: palette.white,
    highlight: palette.purple200,
  },
  ui: {
    divider: palette.gray400,
    overlay: `linear-gradient(180deg, rgba(79, 23, 197, 0) -39.47%, ${palette.purple400} 100%)`,
  },
} as const;

const fonts = {
  h1: css`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h2: css`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h3: css`
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h4: css`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h5: css`
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  body1: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 20px;
  `,
  body2: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 16px;
  `,
  body3: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 14px;
  `,
  body4: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 13px;
  `,

  body5: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 12px;
  `,
  body6: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 11px;
  `,
  body7: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 10px;
  `,

  button1: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.015em;
  `,
  button2: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.015em;
  `,
  button3: css`
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.015em;
  `,
} as const;

const size = {
  mobile: 768,
};

const padding = {
  lg: 20,
  md: 16,
  sm: 12,
};

const zIndex = {
  header: 999,
  nav: 888,
};

const theme = {
  padding,
  palette,
  size,
  colors,
  fonts,
  zIndex,
} as const;

type PalleteType = typeof palette;
type FontType = typeof fonts;
export type PalleteValueType = PalleteType[keyof PalleteType];
export type FontKeyType = keyof FontType;
export type Theme = typeof theme;

export default theme;
