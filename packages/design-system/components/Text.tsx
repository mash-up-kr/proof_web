import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSProperties, ReactNode } from 'react';

import theme, { FontKeyType, PalletValueType } from '../theme';

interface TextProps {
  type: FontKeyType;
  children?: ReactNode;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  color?: PalletValueType;
}

function Text({ type, children, display, textAlign, color }: TextProps) {
  return (
    <TextWrapper
      type={type}
      display={display}
      textAlign={textAlign}
      color={color}
    >
      {children}
    </TextWrapper>
  );
}

const TextWrapper = styled.p<TextProps>`
  ${(props) => {
    return css`
      ${theme.fonts[props.type]};
      text-align: ${props.textAlign};
      display: ${props.display};
      color: ${props.color};
    `;
  }}
`;

export default Text;
