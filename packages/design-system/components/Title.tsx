import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import theme from "../theme";
import Text from "./Text";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  topQuestion: string;
  bottomQuestion: string;
  desc: string;
  textAlign?: CSSProperties["textAlign"];
}

function Title({
  topQuestion,
  bottomQuestion,
  desc,
  textAlign,
  ...restProps
}: TitleProps) {
  return (
    <Wrapper {...restProps}>
      <QuestionWrapper>
        <Text type="h1" color={theme.palette.white} textAlign={textAlign}>
          {topQuestion}
        </Text>
        <Text type="h1" color={theme.palette.white} textAlign={textAlign}>
          {bottomQuestion}
        </Text>
      </QuestionWrapper>
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

const QuestionWrapper = styled.div``;

export default Title;
