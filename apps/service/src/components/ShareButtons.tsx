import styled from "@emotion/styled";
import { Button, ButtonHierarchy } from "design-system";
import React from "react";

interface ShareButtonsProps extends React.ComponentProps<"div"> {
  handleClickLeftButton?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickRightButton?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  shared: boolean;
}

function ShareButtons({
  handleClickLeftButton,
  handleClickRightButton,
  shared = false,
  ...restProps
}: ShareButtonsProps) {
  return (
    <Wrapper {...restProps}>
      {!shared && (
        <Button
          width={"30%"}
          onClick={handleClickLeftButton}
          hierarchy={ButtonHierarchy.Secondary}
        >
          확인
        </Button>
      )}
      <Button
        width={shared ? "100%" : "70%"}
        onClick={handleClickRightButton}
        hierarchy={ButtonHierarchy.Primary}
      >
        {shared ? "나도 해보기" : "공유하기"}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
  padding-inline: 24px;
  gap: 8px;
  padding-bottom: 40px;
`;

export default ShareButtons;
