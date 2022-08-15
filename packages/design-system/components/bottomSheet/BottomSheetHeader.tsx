import styled from "@emotion/styled";
import * as React from "react";
import theme from "../../theme";

export function BottomSheetHeader({...restProps}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
      <Wrapper {...restProps}>
        <Handle/>
      </Wrapper>
  )
}

const Handle = styled.div`
  width: 36px;
  height: 4px;
  margin: auto;

  border-radius: 4px;
  background-color: ${theme.palette.gray400};
`

const Wrapper = styled.div`
  position: relative;
  height: 24px;
  padding-top: 8px;

  border-radius: 20px 20px 0 0;
  background-color: ${theme.palette.gray600};
`;
