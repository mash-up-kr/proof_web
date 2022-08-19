import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import Button, { ButtonHierarchy } from "./Button";
import Text from "./Text";

interface BottomButtonProps extends React.ComponentProps<"button"> {
  isActive: boolean;
}

function BottomButton({
  children,
  isActive,
  ...restProps
}: PropsWithChildren<BottomButtonProps>) {
  return (
    <Wrapper
      hierarchy={ButtonHierarchy.Primary}
      {...restProps}
      className={`${isActive ? "active" : ""}`}
      disabled={!isActive}
    >
      <Text type="body2" textAlign="center">
        {children}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(Button)`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 52px;
  transition: all 0.3s;
  pointer-events: none;

  border-radius: 0;

  &.active {
    pointer-events: auto;
  }
`;

export default BottomButton;
