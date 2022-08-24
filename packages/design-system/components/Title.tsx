import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import theme from "../theme";
import Text from "./Text";

interface TitleProps extends React.ComponentProps<"div"> {
  title: string;
  desc?: string;
  textAlign?: CSSProperties["textAlign"];
}

function Title({ title, desc = "", textAlign, ...restProps }: TitleProps) {
  return (
    <Wrapper {...restProps}>
      <TitleWrapper>
        <Text
          type="h1"
          color={theme.palette.white}
          textAlign={textAlign}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </TitleWrapper>
      <Text type="body2" color={theme.palette.gray200} textAlign={textAlign}>
        {desc}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.padding.sm}px;
`;

const TitleWrapper = styled.div`
  word-break: keep-all;
  white-space: pre-line;
`;

export default Title;
