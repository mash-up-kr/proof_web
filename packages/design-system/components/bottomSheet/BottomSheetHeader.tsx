import styled from "@emotion/styled";
import {forwardRef, PropsWithChildren} from "react";
import theme from "../../theme";

export const BottomSheetHeader = forwardRef<HTMLDivElement, PropsWithChildren<unknown>>((props, ref) => (
    <Wrapper ref={ref}>
      <Handle/>
      {props.children}
    </Wrapper>
));

const Handle = styled.div`
  width: 36px;
  height: 4px;
  margin: auto;

  border-radius: 4px;
  background-color: ${theme.palette.gray400};
`

const Wrapper = styled.div`
  padding-top: 8px;

  border-radius: 20px 20px 0 0;
  background-color: ${theme.palette.gray600};
`;
