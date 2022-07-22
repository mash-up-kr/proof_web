import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { CSSProperties, PropsWithChildren } from 'react';

import theme, { FontKeyType, PalleteValueType } from '../theme';

interface Text extends React.HTMLAttributes<HTMLDivElement> {
  type: FontKeyType;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  color?: PalleteValueType;
}

interface TextProps extends PropsWithChildren<Text> {}

function Text({
  type,
  children,
  display = 'block',
  textAlign = 'left',
  color = theme.colors.text.general,
  ...restProps
}: TextProps) {
  return (
    <Wrapper
      type={type}
      display={display}
      textAlign={textAlign}
      color={color}
      {...restProps}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<TextProps>`
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
